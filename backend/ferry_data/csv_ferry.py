import csv

def write(feed):
  with open('realtime.csv', 'w') as f:
    writer = csv.writer(f)
    header = ['trip_id', 'schedule_relationship', 'route_id', 'id', 'label', 'timestamp', 'stops']
    writer.writerow(header)
    for entity in feed.entity:
      row = []
      row.append(entity.trip_update.trip.trip_id)
      row.append(entity.trip_update.trip.schedule_relationship)
      row.append(entity.trip_update.trip.route_id)
      row.append(entity.trip_update.vehicle.id)
      row.append(entity.trip_update.vehicle.label)
      row.append(entity.trip_update.timestamp)
      stops = []
      for stop in entity.trip_update.stop_time_update:
        result = {}
        result['stop_sequence'] = stop.stop_sequence
        result['arrival_delay'] = stop.arrival.delay
        result['departure_delay'] = stop.departure.delay
        result['stop_id'] = stop.stop_id
        result['schedule_relationship'] = stop.schedule_relationship
        stops.append(result)
      row.append(stops)
      writer.writerow(row)

  with open('vehiclepos.csv', 'w') as f:
    writer = csv.writer(f)  
    header = ['trip_id', 'latitude', 'longitude', 'bearing', 'speed', 'timestamp', 'id', 'label']
    writer.writerow(header)
    for entity in feed.entity:
      row = []
      row.append(entity.vehicle.trip.trip_id)
      row.append(entity.vehicle.position.latitude)
      row.append(entity.vehicle.position.longitude)
      row.append(entity.vehicle.position.bearing)
      row.append(entity.vehicle.position.speed)
      row.append(entity.vehicle.timestamp)
      row.append(entity.vehicle.vehicle.id)
      row.append(entity.vehicle.vehicle.label)
      writer.writerow(row)