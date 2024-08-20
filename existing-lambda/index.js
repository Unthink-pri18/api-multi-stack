exports.handler = async (event) => {
    console.log('Handling existing API request:', JSON.stringify(event, null, 2));

    // Define allowed origins
    const allowedOrigins = ['http://webpage.priyanshudevops.tech', 'http://testpage.priyanshudevops.tech','http://abcd.priyanshudevops.tech'];
    
    // Get the Origin header from the request
    const requestOrigin = event.headers.Origin || event.headers.origin;
    
    // Determine if the request origin is allowed
    const responseOrigin = allowedOrigins.includes(requestOrigin) ? requestOrigin : null;
    
    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': responseOrigin || '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify({ message: "CORS preflight check successful" }),
        };
    }

    // Regular request handling
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': responseOrigin || '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
        body: JSON.stringify({
            message: "Hello from Existing Lambda Function!",
        }),
    };

    return response;
};
