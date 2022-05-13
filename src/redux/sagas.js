import { all, call } from "redux-saga/effects";

import cartSaga from "./shoppingCart/cartSaga";

export default function* rootSaga() {
  yield all([call(cartSaga)]);
}
