export const login = (user, role, username) => ({
  
  type: 'LOGIN',
  payload: { user, role, username },
});

export const logout = () => ({
  type: 'LOGOUT',
});