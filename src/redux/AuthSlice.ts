import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../types/interfaces';

type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      const user = action.payload;
      state.user = user;
    },

    logout(state) {
      console.log('Logout');
      
      state.user = null;
    },
  },
});

export const {setUser, logout} = AuthSlice.actions;
export default AuthSlice.reducer;
