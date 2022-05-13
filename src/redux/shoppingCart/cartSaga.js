import { all, call, put, select, take, takeEvery } from "redux-saga/effects";
import { getCart, updateCart } from "../../firebase/service";
import { cartItemsSelector, userSelector } from "../selectors";
import { login } from "../user/userSlice";
import { setCart, addItem, updateItem, removeItem } from "./cartItemsSlide";

function* watchLogin() {
  while (true) {
    yield take(login.toString());
    const user = yield select(userSelector);

    const cart = yield call(getCart, user.uid);

    yield put(setCart(cart));
  }
}

function* workerAddItem(action) {
  const newItem = action.payload;
  const state = yield select(cartItemsSelector);

  const duplicate = state.products.filter(
    (e) =>
      e.slug === newItem.slug &&
      e.color === newItem.color &&
      e.size === newItem.size
  );
  const newCart = { ...state };

  if (duplicate.length > 0) {
    newCart.products = newCart.products.filter(
      (e) =>
        e.slug !== newItem.slug ||
        e.color !== newItem.color ||
        e.size !== newItem.size
    );
    newCart.products = [
      ...newCart.products,
      {
        id: duplicate[0].id,
        slug: newItem.slug,
        color: newItem.color,
        size: newItem.size,
        price: newItem.price,
        quantity: newItem.quantity + duplicate[0].quantity,
      },
    ];
  } else {
    newCart.products = [
      ...newCart.products,
      {
        ...action.payload,
        id:
          newCart.products.length > 0
            ? newCart.products[newCart.products.length - 1].id + 1
            : 1,
      },
    ];
  }
  const user = yield select(userSelector);
  yield call(updateCart, user.uid, newCart);
  yield put(setCart(newCart));
}

function* watchAddItem() {
  yield takeEvery(addItem.toString(), workerAddItem);
}

function* workerUpdateItem(action) {
  const newItem = action.payload;
  const cartState = yield select(cartItemsSelector);
  const newCartState = { ...cartState };
  const item = newCartState.products.filter(
    (e) =>
      e.slug === newItem.slug &&
      e.color === newItem.color &&
      e.size === newItem.size
  );
  if (item.length > 0) {
    newCartState.products = newCartState.products.filter(
      (e) =>
        e.slug !== newItem.slug ||
        e.color !== newItem.color ||
        e.size !== newItem.size
    );
    newCartState.products = [
      ...newCartState.products,
      {
        id: item[0].id,
        slug: newItem.slug,
        color: newItem.color,
        size: newItem.size,
        price: newItem.price,
        quantity: newItem.quantity,
      },
    ];
  }
  const user = yield select(userSelector);
  yield call(updateCart, user.uid, newCartState);
  yield put(setCart(newCartState));
}

function* watchUpdateItem() {
  yield takeEvery(updateItem.toString(), workerUpdateItem);
}

function* workerRemoveItem(action) {
  const item = action.payload;
  const cartState = yield select(cartItemsSelector);
  const newCartState = { ...cartState };
  newCartState.products = newCartState.products.filter(
    (e) =>
      e.slug !== item.slug || e.color !== item.color || e.size !== item.size
  );

  const user = yield select(userSelector);
  yield call(updateCart, user.uid, newCartState);
  yield put(setCart(newCartState));
}

function* watchRemoveItem() {
  yield takeEvery(removeItem.toString(), workerRemoveItem);
}

export default function* cartSaga() {
  //   yield all([
  //     call(onSaveOrderHistoryStart),
  //     call(onGetUserOrderHistoryStart),
  //     call(onGetOrderDetailsStart),
  //   ]);
  yield all([
    call(watchLogin),
    call(watchAddItem),
    call(watchUpdateItem),
    call(watchRemoveItem),
  ]);
  console.log("cart sagas");
}
