import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchApiCategories, fetchApiRandom } from './JokesAction';
import { RootState } from './store';
import { useAppDispatch } from './hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [categoryInput, setCategoryInput] = useState('');
  const jokesCategory = useSelector((state: RootState) => state.jokes);
  useEffect(() => {
    dispatch(fetchApiCategories());
    dispatch(fetchApiRandom(categoryInput));
  }, [categoryInput, dispatch]);
  const categories = Array.isArray(jokesCategory.categoryTypes) ? jokesCategory.categoryTypes : [];
  const randomJoke = Array.isArray(jokesCategory.categoryTypes) ? jokesCategory.randomJoke : [];
  const handleJokeGenerator = (categoryInputs: string) => {
    setCategoryInput(categoryInputs);
    dispatch(fetchApiRandom(categoryInputs));
  };
  return (
    <div className="grid-cols-1 justify-center ">
      <div className="flex justify-center ml-12 mt-12 w-48 h-32">
        <a href='https://api.chucknorris.io/'>
        <img alt="Chuck Norris Jokes Api - JSON API for random Chuck Norris jokes" src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" className="width-[20%]"></img>
        </a>
      </div>

      <div className="h-96 border-2 border-red-950 m-12 flex">
        <div className="basis-1/2 bg-cyan-300 p-12 font-bold text-lg">
          <h1 className="text-black font-bold text-lg">Categories</h1>
          <div className="flex">
            <div className="flex flex-wrap">
              {categories.map((category: string, index: number) => (
                <div key={index} className="bg-blue-500 text-white rounded-full px-2 py-1 m-1 hover:bg-blue-950 hover:cursor-pointer" onClick={() => handleJokeGenerator(category)}>
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-1/2 bg-blue-100 p-8 text-lg">
          {jokesCategory.isLoading && <div>Loading ....</div>}
          {!jokesCategory.isLoading && randomJoke ? (
            <div>
              <h3 className="bg-blue-500 text-white rounded-full px-2 py-1 m-1 font-bold hover:bg-blue-950 text-center">
                <a href={randomJoke.url}>{randomJoke.categories}</a>
              </h3>
              <div className="p-4 grid-cols-1">
                <p>{randomJoke.value}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
