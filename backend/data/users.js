import bcrypt from "bcryptjs";

const users = [
    {
        name:'Admin User',
        email:'admin@email.com',
        password:bcrypt.hashSync('12345', 10),
        isAdmin:true,
    },
    {
        name:'Jack Rong',
        email:'jack@email.com',
        password:bcrypt.hashSync('22222', 10),
        isAdmin:false,
    },
    {
        name:'Sylvia Xie',
        email:'sylvia@email.com',
        password:bcrypt.hashSync('33333', 10),
        isAdmin:false,
    },
]

export default users;