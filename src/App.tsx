import React, { useEffect } from 'react';
import {useSelector } from 'react-redux';
import { fetchApiCategories } from './JokesAction';
import { RootState } from './store';
import { useAppDispatch } from './hooks';
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, categoryTypes } = useSelector((state: RootState) => state.jokes);

  useEffect(() => {
    dispatch(fetchApiCategories());
    console.log(categoryTypes);
  }, [categoryTypes, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Categories</h1>
      <pre>{JSON.stringify(categoryTypes, null, 2)}</pre>
    </div>
  );
};

export default App;