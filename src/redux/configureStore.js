import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  category: categoryReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
