# Order API

Post /Order/Create
{
	OrderNumber string
}

Response
{
  Code : 200
  Description : Success
}


# Json
"paths": {
    "/": {
      "post": {
        "tags": [
          "Order"
        ],
        "operationId": "Create",
        "parameters": [
          {
            "name": "orderNumber",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    }
  }

 #  APLIM
 * Test Link : This is apim link for create operation 
 
