import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: [true, 'O username eh obrigatorio'],
        trim: true,
        index: true,
        unique: true
    },
    phone: {
        type: Number,
    },
    address: {
        cep: {
            type: Number,
        },
        bairro: {
            type: String,
        },
        number: {
            type: Number,
        }
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    token: String
});

const User = mongoose.model('User', schema);
export default User;
