const User = require('../model/user');

exports.getUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
        res.status(200).json({ users: users });
    }).catch(err => {
        console.log(err);
    });
}

exports.getUser = (req, res, next) => {
    const userId = req.params.id;

    User.findByPk(userId)
    .then((user) => {
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user: user });
    }).catch((err) => {
        console.log(err);
    });
}

exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;

    User.create({
        name: name,
        email: email
    })
    .then((userCreated) => {
        console.log('User created')
        res.status(201).json({
            message: 'User created successfully',
            user: userCreated
        });
    }).catch((err) => {
        console.log(err);
    });
}

exports.updateUser = (req, res, next) => {
    const userId = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    User.findByPk(userId)
    .then((userFounded) => {
        if(!userFounded) {
            return res.status(404).json({ message: 'User not found' });
        }
        userFounded.name = name
        userFounded.email = email
        return userFounded.save();
    })
    .then((result) => {
        res.status(200).json({ 
            message: 'User updated successfully',
            user: result 
        });
    }).catch((err) => console.log(err));
}

exports.deleteUser = (req, res, next) => {
    const userId = req.params.id;

    User.findByPk(userId)
    .then((userFounded) => {
        if(!userFounded) {
            return res.status(404).json({ message: 'User not found' });
        }
        return User.destroy({
            where: {
                id: userId
            }
        });
    })
    .then(() => {
        res.status(200).json({ 
            message: 'User deleted successfully',
        });
    }).catch((err) => console.log(err));
}