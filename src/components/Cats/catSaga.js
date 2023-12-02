import { call, put, takeEvery } from 'redux-saga/effects';
import { getCats } from '../../services/cats-api';
import { getCatsSuccess, getCatsFailure } from './catState';


const workGetCatsFetch = function* () {
    const URL = 'https://api.thecatapi.com/v1/breeds';
    try {
        
        const cats = yield call(() => getCats(URL));
        const formattedCatsShortened = cats.slice(0, 10);
        yield put(getCatsSuccess(formattedCatsShortened));
    } catch (err) {
        yield put(getCatsFailure());
    }
};

const catSaga = function* () {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
};

export default catSaga;