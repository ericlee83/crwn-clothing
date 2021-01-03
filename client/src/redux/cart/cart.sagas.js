import { takeLatest, all, call, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.type";
import { clearCart } from "./cart.actions";

export function* cartSagas() {
  yield all([call(OnSignoutSucess)]);
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* OnSignoutSucess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}
