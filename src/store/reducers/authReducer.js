const initialState = {
  isAuthenticated: false,
  user: null,
  role: null, // Новое поле для хранения роли
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
          return {
              ...state,
              isAuthenticated: true,
              user: action.payload.user,
              role: action.payload.role, // Сохраняем роль
          };
          case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: { username: null, role: null }, // Сброс объекта пользователя
            };
          
          
      default:
          return state;
  }
};

export default authReducer; 