export const all = (req, res) => {
    res.json({success: true, route: 'get users'})
}

export const get = (req, res) => {
    res.json({success: true, route: 'get user', userId: req.params.id})
}

export const put = (req, res) => {
    console.log(req.body);
    res.json({success: true, route: 'add user', body: req.body})
}

export const patch = (req, res) => {
    console.log(req.params.id)
    res.json({success: true, route: 'update user'})
}

export const remove = (req, res) => {
    res.json({success: true, route: 'delete user'})
}