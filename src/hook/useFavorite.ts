import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Course} from '../types/interfaces';
import { addToFavoriteList } from '../redux/FavoriteSlice';

const useFavorite = (course: Course) => {
  const {favoriteCourses} = useSelector(
    (state: RootState) => state.favoriteCourses,
  );
  const item = favoriteCourses.find(f => f.course.id === course?.id);

  const [favorite, setFavorite] = useState(item ? item.isFavorite : false);

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    setFavorite(!favorite);
    dispatch(addToFavoriteList({course, isFavorite: !favorite}));
  };

  return {toggleFavorite, favorite};
};

export default useFavorite;
