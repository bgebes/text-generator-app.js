import axios from 'axios';
import { setParasCount, toggleHTML } from '../redux/Paras/ParasSlice';
import { store } from '../redux/store';

export function max(a, b) {
  return a > b ? a : b;
}

export async function getParasFromAPI({ parasCount, format }) {
  const res = await axios(
    `https://baconipsum.com/api/?type=all-meat&paras=${parasCount}&format=${format}`
  );

  return res.data;
}

export function handleParasCount(event) {
  const dispatch = store.dispatch;

  dispatch(setParasCount({ count: max(1, event.target.value) }));
}

export function handleIncludeHTML(event) {
  const dispatch = store.dispatch;

  dispatch(toggleHTML({ newState: event.target.value }));
}
