import boto3
import datetime
import io
import json
import requests
import zipfile

def lambda_handler(event, context):
	with open('api-key.json') as f:
		apikey = json.load(f)['api-key']

	api = 'https://api.transport.nsw.gov.au/v1/gtfs/schedule/ferries'
	response = requests.get(api, headers={'Authorization': apikey})
	response_last_modified_text = response.headers['Last-Modified']
	response_last_modified = datetime.datetime.strptime(
		response_last_modified_text,
		'%a, %d %b %Y %X %Z')

	s3 = boto3.client('s3')
	s3_last_modified_text = s3.head_object(
	  Bucket='tuttuttuuuut',
	  Key='timetables.zip')['Metadata']['last-modified']
	s3_last_modified = datetime.datetime.strptime(
		s3_last_modified_text,
		'%a, %d %b %Y %X %Z')

	if response_last_modified > s3_last_modified:
		print(f'Updating Timetables. Last modified: {response_last_modified_text}')
		zip_data = io.BytesIO()
		zip_data.write(response.content)
		zip_file = zipfile.ZipFile(zip_data)

		s3.put_object(
			Body=response.content, 
			Bucket='tuttuttuuuut', 
			Key=f'timetables.zip',
			Metadata=dict(response.headers))

		for name in zip_file.namelist():
			file = zip_file.open(name)
			s3.put_object(
				Body=file.read(), 
				Bucket='tuttuttuuuut', 
				Key=f'timetables/{name}',
				Metadata=dict(response.headers))
	else:
		print(f'Timetables are up to date. Last modified: {s3_last_modified_text}')

if __name__ == '__main__':
	lambda_handler('','')
