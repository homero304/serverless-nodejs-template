'use strict'

module.exports.exampleFunction = (event, context, exampleFunctionCallback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success!'
    })
  }

  exampleFunctionCallback(null, response)
}
