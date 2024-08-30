import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Course} from '../types/interfaces';

interface EnrolledCourses {
  enrolled: boolean;
  course: Course;
}

interface EnrolledCoursesState {
  enrolledCourses: EnrolledCourses[];
}

const initialState: EnrolledCoursesState = {
  enrolledCourses: [],
};

const EnrolledCourses = createSlice({
  name: 'FavoriteCourses',
  initialState,
  reducers: {
    addToEnrolledList(state, action: PayloadAction<EnrolledCourses>) {
      const {course} = action.payload;

      const enrolledCourses = state.enrolledCourses.find(
        p => p.course.id === course.id,
      );

      if (enrolledCourses) {
      } else {
        state.enrolledCourses.push(action.payload);
      }
    },
  },
});

export const {addToEnrolledList} = EnrolledCourses.actions;

export default EnrolledCourses.reducer;
