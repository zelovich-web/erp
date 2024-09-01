export const login = (user, role) => ({
  type: 'LOGIN',
  payload: { user, role },
});

export const logout = () => ({
  type: 'LOGOUT',
});