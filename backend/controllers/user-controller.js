import mongoose from 'mongoose'

const User = mongoose.model('User');

const userController = {};

userController.get = async (req, res) => {
    const data = await User.find({username: req.params.id})
    res.status(200).send(data)
}
userController.post = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({
        message: "Usuario cadastrado"
    });
}

export default userController;
