'use strict'

export async function example(event, context, callback) {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({message: 'Success!'})
    };
    callback(null, response);
  }
  catch (error) {
    callback(error, null);
  }
}
