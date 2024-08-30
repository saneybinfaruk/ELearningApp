import storage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import FavoriteCourses from './FavoriteSlice';
import EnrolledCourses from './CourseEnrollSlice';
import {persistReducer, persistStore} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteCourses', 'enrolledCourses'],
};

const reducers = combineReducers({
  favoriteCourses: FavoriteCourses,
  enrolledCourses: EnrolledCourses,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
