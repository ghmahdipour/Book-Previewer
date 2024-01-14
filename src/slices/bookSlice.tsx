import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "@models/book.model";
import {ShowPartialText} from '@helpers/utils';

export interface BookState {
  data: Array<IBook>;
  status: string;
  error: any;
}

const initialState: BookState = {
  data: [],
  status: '',
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
        state.data = [...action.payload].map((item) => {
          return {
            ...item,
            description: ShowPartialText(item.description, 28)
          }
        });
        state.status = 'succeeded'
    },
    setError: (state, action) => {
        state.error = [...action.payload];
        state.status = 'failed'
    }
  }
});

export const { setBooks, setError } = bookSlice.actions;

export default bookSlice.reducer;
