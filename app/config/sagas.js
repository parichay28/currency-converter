import {takeEvery, put, call, select} from 'redux-saga/effects';

import {
  CHANGE_BASE_CURRENCY,
  SWAP_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const getLatestRate = currency =>
  fetch(`https://api.frankfurter.app/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);

    const data = yield response.json();

    if (data.error) {
      yield put({type: CONVERSION_ERROR, error: data.error});
    } else {
      yield put({type: CONVERSION_RESULT, data});
    }
  } catch (err) {
    // sending err instead of err.message to trigger error showing as is based on comparing error object that is passed here. A simple string comparison would result in error of same type not showing again.
    yield put({type: CONVERSION_ERROR, error: err});
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
