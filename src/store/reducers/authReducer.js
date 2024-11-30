const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
          return {
              ...state,
              isAuthenticated: true,
              user: {
                ...state.user,
                username: action.payload.user.username,
                role: action.payload.user.role,
                fio: action.payload.user.fio,
            },
          };
      case 'LOGOUT':
          return initialState;
      default:
          return state;
  }
};

export default authReducer;