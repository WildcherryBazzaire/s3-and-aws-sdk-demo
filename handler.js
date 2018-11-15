'use strict';
const AWS = require('aws-sdk'); //
const s3 = new AWS.S3(); //S3 = Web service
//Bucket = thing that stores
module.exports.create = (event, context, callback) => {
  console.log("event.bucketName",event.body.bucketName);
  const params = {
    Bucket : event.body.bucketName //Name of the bucket
  }
  // console.log("event",event);
  s3.createBucket(params, (err,data) => { //function creates a new bucket with params and a function as parameters
    if (err) console.log(err); //console logs an error if there is any
    console.log('data',data);
    const response =  {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: data
      }),
    };
    callback(null,response);
  });
};
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };