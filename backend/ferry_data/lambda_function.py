import active_ferries
import ferry_info
import json
import requests
import datetime
from google.transit import gtfs_realtime_pb2

with open('api-key.json') as f:
  apikey = json.load(f)['api-key']

apis = {
  'vehiclepos' : {'url' : 'https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/ferries'},
  'realtime'   : {'url' : 'https://api.transport.nsw.gov.au/v1/gtfs/realtime/ferries'}
}

def lambda_handler(event, context):
  for api in apis:
    feed = gtfs_realtime_pb2.FeedMessage()
    response = requests.get(apis[api]['url'], headers={'Authorization': apikey})
    feed.ParseFromString(response.content)
    apis[api]['feed'] = feed

  routed = active_ferries.actives(apis['realtime']['feed'])
  positioned = active_ferries.positions(apis['vehiclepos']['feed'])

  payload = []

  for ferry_id, details in positioned.items():
    ferry_route = routed.get(ferry_id)
    info = ferry_info.info.get(details['ferry'])
    if ferry_route:
      payload.append({
        'ferry' : details['ferry'],
        'class' : info['class'],
        'route' : ferry_route['route'],
        'destination' : ferry_route['destination'],
        'location' : ferry_route['location'],
        'speed': details['speed'],
        'heading': details['heading'],
        'coordinates': details['coordinates'],
        'stops': ferry_route['stops'],
        'ferry_info': info['ferry_info'],
        'class_info': info['class_info'],
        'images': info['images']
      })
    else:
      payload.append({
        'ferry' : details['ferry'],
        'class' : info['class'],
        'route' : 'OS',
        'destination' : 'Out of Service',
        'location' : '',
        'speed': details['speed'],
        'heading': details['heading'],
        'coordinates': details['coordinates'],
        'stops': [],
        'ferry_info': info['ferry_info'],
        'class_info': info['class_info'],
        'images': info['images']
      })

  return {
    'statusCode': 200,
    'data': sorted(payload, key=lambda k: k['ferry'])
  }

if __name__ == '__main__':
  print(lambda_handler('',''))
