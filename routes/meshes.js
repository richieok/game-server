const Router = require('express').Router();

Router.get('/:name', (req, res, next)=>{
    const options = {
        root: path.join(__dirname, 'public/meshes'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    const filename = req.params.name;
    console.log(`Filename: ${filename}`);
    res.sendFile(filename, options, (err) => {
        if (err) {
            console.log(err);
            next();
        } else {
            console.log('Sent: ', filename);
        }
    });
});

module.exports = Router;