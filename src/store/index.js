import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import catsReducer from '../components/Cats/catState';
import catSaga from '../components/Cats/catSaga';


const saga = createSagaMiddleware();


const store = configureStore({
    reducer: {
      cats: catsReducer
    },
    middleware: [saga]
});

saga.run(catSaga);

export default store;