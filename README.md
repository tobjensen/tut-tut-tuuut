## TUTTUT**_TUUUUT_**

Show all of your favourite Sydney Harbour Ferries.

Data from [Transport for NSW](https://opendata.transport.nsw.gov.au/)

## Getting Started

In the frontend directory, you can run:

### `yarn run dev-server`

Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Deploy Backend

The backend consists of two AWS Lambda functions, hooked up with API Gateway & S3.

You may deploy your own version of this backend with an AWS account.

In the backend directory, you will find the two Lambda functions within their directories, each with their own dependencies. 
You can deploy each lambda with AWS.

You will need to apply for an api key with [Transport for NSW](https://opendata.transport.nsw.gov.au/get-started) to access data.

Additionally, you will need to [create an S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html), [create a REST API with API Getaway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html), as well as [create IAM roles](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html) for the lambda functions.

## Built With

### Frontend
* [React](https://reactjs.org/) - UI
* [Redux](https://react-redux.js.org/) - Data store

### Backend
* [Lambda](https://docs.aws.amazon.com/lambda/index.html) - Serverless computing
* [API Gateway](https://docs.aws.amazon.com/apigateway/index.html) - Creating APIs
* [S3](https://docs.aws.amazon.com/s3/index.html) - Storage
