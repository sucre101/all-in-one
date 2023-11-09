export default function (req, res, next) {
    if (!req.headers['content-type'] && req.headers['content-type'] !== 'application/json') {
        res.statusCode = 403;
        res.json({message: 'Sorry! How are you ?'});
    }
    next();
}