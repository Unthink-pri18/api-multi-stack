exports.handler = async (event) => {
    console.log('Handling new API request:', JSON.stringify(event, null, 2));

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from New Lambda Function!",
        }),
    };

    return response;
};
