import { PayloadAction, createSlice} from '@reduxjs/toolkit';
import { fetchApiCategories, fetchApiRandom } from './JokesAction';

  interface JokesInfo {
    state: string;
    categories: string[] | null;
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
    isLoading: boolean;
    randomJoke: [] | null;
    categoryTypes: string;
    categoryError: boolean;
    randomError: boolean;
  }

  const initialState: JokesInfo = {
    state: 'INITIAL',
    categories: [],
    created_at: '',
    icon_url: '',
    id: '',
    updated_at: '',
    url: '',
    value: '',
    isLoading : false,
    randomJoke : null,
    categoryTypes: '',
    categoryError: false,
    randomError: false,
  };
  const jokesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchApiCategories.pending, (state) => {
          state.state = 'PENDING';
          state.isLoading = true;
        })
        .addCase(fetchApiCategories.fulfilled, (state, action: PayloadAction<any>) => {
          state.state = 'FULFILLED';
          state.isLoading = false;
          state.categoryTypes = action.payload;
        })
        .addCase(fetchApiCategories.rejected, (state) => {
          state.state = 'REJECTED';
            state.categoryError = true;
        })
        .addCase(fetchApiRandom.pending, (state) => {
            state.state = 'PENDING';
            state.isLoading = true;
          })
          .addCase(fetchApiRandom.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'FULFILLED';
            state.isLoading = false;
            state.randomJoke = action.payload;
          })
          .addCase(fetchApiRandom.rejected, (state) => {
            state.state = 'REJECTED';
              state.randomError = true;
           
          });
        
    },
  });

export const jokesSliceAction = jokesSlice.actions;
export default jokesSlice.reducer;
