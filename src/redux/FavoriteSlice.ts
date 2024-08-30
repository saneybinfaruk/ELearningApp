import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Course} from '../types/interfaces';

interface FavoriteCourses {
  isFavorite: boolean;
  course: Course;
}

interface FavoriteCoursesState {
  favoriteCourses: FavoriteCourses[];
}

const initialState: FavoriteCoursesState = {
  favoriteCourses: [],
};

const FavoriteCourses = createSlice({
  name: 'FavoriteCourses',
  initialState,
  reducers: {
    addToFavoriteList(state, action: PayloadAction<FavoriteCourses>) {
      const {course} = action.payload;

      const favoriteCourses = state.favoriteCourses.find(
        p => p.course.id === course.id,
      );

      if (favoriteCourses) {
        state.favoriteCourses = state.favoriteCourses.filter(
          favoriteProduct => favoriteProduct.course.id !== course.id,
        );
      } else {
        state.favoriteCourses.push(action.payload);
      }
    },
  },
});

export const {addToFavoriteList} = FavoriteCourses.actions;

export default FavoriteCourses.reducer;
