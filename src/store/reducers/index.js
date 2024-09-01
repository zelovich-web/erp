import { combineReducers } from 'redux';
   import authReducer from './authReducer'; // Убедитесь, что вы также создали authReducer.js

   const rootReducer = combineReducers({
       auth: authReducer,
       // добавьте другие редьюсеры, если они есть
   });

   export default rootReducer;