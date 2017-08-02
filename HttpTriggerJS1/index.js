module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let res;
    if (req.query.name || (req.body && req.body.name)) {
        res = {
            // status: 200, /* Defaults to 200 */
            body: { "data":  "Hello " + (req.query.name || req.body.name) },
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }            
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done(null, res);
};