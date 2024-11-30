const fakeUsers = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        role: 'admin',
        fio: 'Админ Админович',
        email: 'admin@gmail.com'
    },
     {
        id: 2,
        username: 'admin2',
        password: 'admin2',
        role: 'admin',
        fio: 'Админ Админович2',
        email: 'admin@gmail2.com'

        

    },
    {
        id: 1,
        username: 'teacher',
        password: 'teacher',
        role: 'teacher',
        fio: 'Учитель Учителевич',
        email: 'teacher@gmail.com'


    },
    {
        id: 1,
        username: 'account-manager',
        password: 'account-manager',
        role: 'account-manager',
        fio: 'Аккаунт Мэнеджерович',
        email: 'account-manager@gmail.com'



    },
    {
        id: 2,
        username: 'account-manager2',
        password: 'account-manager2',
        role: 'account-manager',
        fio: 'Аккаунт Мэнеджерович2',
        email: 'account-manager@gmail2.com'



    },
    {
        id: 3,
        username: 'account-manager3',
        password: 'account-manager3',
        role: 'account-manager',
        fio: 'Аккаунт Мэнеджерович3',
        email: 'account-manager3@gmail.com'



    },
    {
        id: 4,
        username: 'account-manager4',
        password: 'account-manager4',
        role: 'account-manager',
        fio: 'Аккаунт Мэнеджерович4',
        email: 'account-manage4r@gmail.com'

    },
    {
        id: 5,
        username: 'account-manager5',
        password: 'account-manager5',
        role: 'account-manager',
        fio: 'Аккаунт Мэнеджерович5',
        email: 'account-manager5@gmail.com'

    }
];



export const addUser = (newUser) => {

    const cleanedUsername = newUser.username;
    const userExists = fakeUsers.some(user => user.username === cleanedUsername);
    if (userExists) {
        throw new Error('Пользователь с таким именем уже существует!');
    }

    newUser.id = fakeUsers.length + 1;
    fakeUsers.push(newUser)
}

export const getUsers = () => {
    return fakeUsers
}

export const findUsers = (username, password) => {
    return fakeUsers.find(u => u.username === username && u.password === password);
}

export default fakeUsers;