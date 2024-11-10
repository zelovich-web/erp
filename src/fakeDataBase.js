const fakeUsers = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        role: 'admin',
    },
     {
        id: 2,
        username: 'admin2',
        password: 'admin2',
        role: 'admin',
    },
    {
        id: 3,
        username: 'teacher',
        password: 'teacher',
        role: 'teacher',
    },
    {
        id: 4,
        username: 'student',
        password: 'student',
        role: 'student',
    },
    {
        id: 5,
        username: 'account-manager',
        password: 'account-manager',
        role: 'account-manager',

    }
];



export const addUser = (newUser) => {

    const cleanedUsername = newUser.login;
    const userExists = fakeUsers.some(user => user.login === cleanedUsername);
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