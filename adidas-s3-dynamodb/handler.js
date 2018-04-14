'use strict';
import AWS from 'aws-sdk';
AWS.config.update({region: 'eu-west-1'});
const rekognition = new AWS.Rekognition();
const docClient = new AWS.DynamoDB.DocumentClient(); 

export function hello(event, context, callback) {
    console.log(JSON.stringify(event, null, 4));
    console.log(event.Records[0].s3.object.key);
    const rekParams = {
        CollectionId: "adidas-faces",
        DetectionAttributes: [
            "ALL"
        ],
        ExternalImageId: "myphotoid",
        Image: {
            S3Object: {
                Bucket: "adidas-userfiles-mobilehub-1907738294",
                Name: event.Records[0].s3.object.key
            }
        }
    };

    rekognition.indexFaces(rekParams, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(JSON.stringify(data, null, 4));
            var params = {
                TableName: 'adidas-mobilehub-1907738294-faces',
                Item:{
                    "faceId": data.FaceRecords[0].Face.FaceId,
                    "datetime": event.Records[0].eventTime,
                    "emotions": {
                        "happy": 100
                    }
                }
            };

            console.log("Adding a new item...");
            docClient.put(params, function(err, data) {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                    callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
                }
            });
        }
    });
};
