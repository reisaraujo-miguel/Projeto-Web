import mongoose from 'mongoose'

const User = mongoose.model('User');

const userController = {};

userController.get = async (req, res) => {
    try{
        const data = await User.find({})
        res.status(200).send(data)
    } 
    catch(e){
        res.status(400).send({
            message: "Falha na busca de usuarios",
            data: e
        });
    }
}

userController.getByIsAdmin = async (req, res) => {
    try{
        const data = await User.find({isAdmin: true})
        res.status(200).send(data)
    } 
    catch(e){
        res.status(400).send({
            message: "Falha na busca de admin",
            data: e
        });
    }
}

userController.getByUsername = async (req, res) => {
    try{
        const data = await User.findOne({username: req.params.id})
        res.status(200).send(data)
    } 
    catch(e){
        res.status(400).send({
            message: "Falha na busca de usuario",
            data: e
        });
    }
}
userController.post = async (req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        res.status(201).send({
            message: "Usuario cadastrado"
        });
    }
    catch(e){
        res.status(400).send({
            message: "Falha no cadastro de usuario",
            data: e
        });
    }
}
userController.put = async (req, res) => {
    try{
        await User.findOneAndUpdate({username: req.params.id}, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                password: req.body.password,
                isAdmin: req.body.isAdmin
            }
        });
        res.status(201).send({
            message: "Dados de usuario atualizados"
        });
    }
    catch(e){
        res.status(400).send({
            message: "Falha ao atualizar dados do usuario",
            data: e
        });
    }
}
userController.delete = async (req, res) => {
    try{
        await User.deleteOne({slug: req.params.id});
        res.status(201).send({
            message: "Usuario deletado"
        });
    }
    catch(e){
        res.status(400).send({
            message: "Falha ao deletar usuario"
        });
    }
}
export default userController;
