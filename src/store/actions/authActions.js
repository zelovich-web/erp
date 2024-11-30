export const login = (user, role, fio) => ({
  
  type: 'LOGIN',
  payload: { user, role, fio },
});

export const logout = () => ({
  type: 'LOGOUT',
});


