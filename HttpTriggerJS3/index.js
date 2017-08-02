const FTPClient = require('ftp');
const ftpUser = process.env['DS_FTP_USER']
const ftpPassword = process.env['DS_FTP_PASS']
const ftpHost = process.env['PBM_FTP_HOST']

module.exports = function (context, req) {
    context.log(ftpUser);
    context.log('JavaScript HTTP trigger function processed a request.');
    const ftpClient = new FTPClient();

    ftpClient.connect({
        host: ftpHost,
        user: ftpUser,
        password: ftpPassword
    });

    context.log('Establish ftp connection')

    ftpClient.on('ready',() => {
        context.log('Ftp connection ready');
        ftpClient.put('sometext', (new Date().getTime()).toString() + '.txt', (error) => {
            if(error){
                ftpClient.end();
                context.log(error);
                context.done(error);
            } else {
                ftpClient.end();
                context.res = 'File transferred';
                context.done();
            }
        });

    });
};