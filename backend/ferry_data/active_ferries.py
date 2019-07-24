import boto3
import collections
import csv
import datetime
import dateutil.tz

s3 = boto3.client('s3')
for filename in ['stop_times.txt', 'routes.txt', 'stops.txt']:
  s3.download_file('tuttuttuuuut', f'timetables/{filename}', f'/tmp/{filename}')

def parse_stop_time(time_string):
  (hour, minute, second) = map(int, time_string.split(':'))
  tz_sydney = dateutil.tz.gettz('Australia/Sydney')
  date = datetime.datetime.now(dateutil.tz.UTC).astimezone(tz_sydney)
  date += datetime.timedelta(days=hour//24)
  dt = datetime.datetime(
    date.year, 
    date.month, 
    date.day, 
    hour%24, 
    minute, 
    second, 
    tzinfo=tz_sydney)
  return dt.timestamp()

def timetable_trips():
  with open('/tmp/stop_times.txt', 'r') as f:
    reader = csv.DictReader(f)
    timetable = collections.defaultdict(dict)
    for row in reader:
      if row['stop_sequence'] == '1':
        timetable[row['trip_id']]['start'] = parse_stop_time(row['arrival_time'])
      elif row['pickup_type'] == '1':
        timetable[row['trip_id']]['end'] = parse_stop_time(row['departure_time'])
  return timetable

def timetable_stops():
  with open('/tmp/stop_times.txt') as f:
    reader = csv.DictReader(f)
    timetable = collections.defaultdict(dict)
    for row in reader:
      timetable[row['trip_id']][row['stop_id']] = parse_stop_time(row['arrival_time'])
  return timetable

def timetable_routes():
  with open('/tmp/routes.txt') as f:
    timetable = collections.defaultdict(dict)
    reader = csv.DictReader(f)
    for row in reader:
      timetable[row['route_id']]['route_short_name'] = row['route_short_name']
      timetable[row['route_id']]['route_long_name'] = row['route_long_name']
  return timetable

def wharves():
  with open('/tmp/stops.txt') as f:
    reader = csv.DictReader(f)
    return {row['stop_id']:row['stop_name'] for row in reader}

def toMin(timestamp):
    if timestamp < 60:
      return 'Now'
    return f'{int(timestamp/60)} min'

def eta(timetable, current_time, trip_id, stop_id, delay):
  sheduled_time = timetable[trip_id][stop_id]
  arrival_time = sheduled_time + delay
  return arrival_time - current_time

def degs(degree_value):
  val = int((degree_value/22.5)+.5)
  directions = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
  return directions[(val % 16)]

def positions(feed):
  ferry_details = {}
  for entity in feed.entity:
    ferry_id = entity.vehicle.vehicle.id
    ferry = entity.vehicle.vehicle.label
    speed = f'{round(entity.vehicle.position.speed, 1)} km/h'
    heading = f'{round(entity.vehicle.position.bearing)}° {degs(entity.vehicle.position.bearing)}'
    lat = entity.vehicle.position.latitude
    lon = entity.vehicle.position.longitude
    ferry_details[ferry_id] = {
      'ferry':ferry, 
      'speed':speed, 
      'heading':heading, 
      'coordinates': {'lat':lat, 'lon':lon},
      }
  return ferry_details

def actives(feed):
  timetable_today = timetable_trips()
  stops_list = timetable_stops()
  routes_list = timetable_routes()
  current_time = datetime.datetime.now().timestamp()
  wharves_list = wharves()  

  active_ferries = {}

  for entity in feed.entity:
    trip_id = entity.trip_update.trip.trip_id
    schedule_relationship = entity.trip_update.trip.schedule_relationship
    route_id = entity.trip_update.trip.route_id
    route_short_name = routes_list[route_id]['route_short_name']
    route_long_name = routes_list[route_id]['route_long_name']
    vehicle_id = entity.trip_update.vehicle.id
    vehicle_label = entity.trip_update.vehicle.label
    timestamp = entity.trip_update.timestamp
    stops = []
    for stop in entity.trip_update.stop_time_update:
      stop_details = {}
      stop_details['stop_sequence'] = stop.stop_sequence
      
      if abs(stop.arrival.delay) < 14400:
        arrival_delay = stop.arrival.delay
      stop_details['arrival_delay'] = arrival_delay

      if abs(stop.arrival.delay) < 14400:
        departure_delay = stop.departure.delay
      stop_details['departure_delay'] = departure_delay

      stop_details['stop_id'] = stop.stop_id
      stop_details['stop_name'] = wharves_list[stop_details['stop_id']]
      stop_details['schedule_relationship'] = stop.schedule_relationship
      stops.append(stop_details)

    if schedule_relationship != 3:
      start_delay = stops[0]['arrival_delay']
      end_delay = stops[-1]['departure_delay']
      try:
        start_time = timetable_today[trip_id]['start'] + start_delay
        end_time = timetable_today[trip_id]['end'] + end_delay

        if start_time < current_time and end_time > current_time:
          stops = [{'stop': stop['stop_name'], 'eta' : toMin(eta(stops_list, current_time, trip_id, stop['stop_id'], stop['arrival_delay']))} for stop in stops if eta(stops_list, current_time, trip_id, stop['stop_id'], stop['arrival_delay']) > -60]
          active_ferries[vehicle_id] = {
            'ferry': vehicle_label,
            'route': route_short_name,
            'destination': route_long_name,
            'location': stops[0]['stop'],
            'stops': stops
            }
      except KeyError as e:
        print(f'KeyError: {e} active_ferries.py line 123-134, Trip {trip_id} for {vehicle_label} not in stop_times.txt')
  
  return active_ferries
