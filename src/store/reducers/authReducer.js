const initialState = {
  isAuthenticated: false,
  user: null,
  role: null, 
  username: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
          return {
              ...state,
              isAuthenticated: true,
              user: action.payload.user,
              role: action.payload.role, 
              username: action.payload.username,
          };
          case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: { username: null, role: null }, 
            };
          
          
      default:
          return state;
  }
};

export default authReducer; 