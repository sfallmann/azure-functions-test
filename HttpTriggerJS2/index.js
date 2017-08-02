const fs = require('fs');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (!dirExist(context, 'D:/home/data/gda/product_profiles')){
        fs.mkdirSync('D:/home/data/gda');
    }

    fs.writeFile( 'D:/home/data/gda/message.txt', 'Some text...', (err) => {
        if (err) {
            context.done(err);
        } else {
            context.done(null, 'Done!');
        }
    });
};

function dirExist(context, path) {
    try {
        fs.statSync(path);
        context.log('true');
        return true;
    }
    catch (e){
        context.log('false');
        return false;
    }
}