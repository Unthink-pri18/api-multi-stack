exports.handler = async (event) => {
    console.log('Handling existing API request:', JSON.stringify(event, null, 2));

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from latest Lambda Function!",
        }),
    };

    return response;
};
