cloned from https://gitlab.com/garethm/serverless-nodejs-template.git
# Purpose

To create a service using this repo as template run
`serverless create --template-url https://github.com/homero304/serverless-nodejs-template.git --path myService`
This project serves as a basic template for helping get a new Serverless service
up and running. Just clone the repo, `rm -rf .git` then `npm install` and start 
developing.

Because of the inclusion of the `serverless-mocha-plugin`, a new function and
related test file can be created with the following example command:

`sls create function -f functionName --handler src/functions/fileName.handlerName --path src/test/functions --stage local`

Also, the aws-sdk-mock npm module is included to allow for complete mocking of 
AWS services allowing tests to be run at any time and debugging to occur very 
simply.
