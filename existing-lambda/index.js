exports.handler = async (event) => {
    console.log('Handling existing API request:', JSON.stringify(event, null, 2));

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://*.priyanshudevops.tech',  // Allows all origins; change to specific domains if needed
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
        body: JSON.stringify({
            message: "Hello from Existing Lambda Function!",
        }),
    };

    return response;
};
