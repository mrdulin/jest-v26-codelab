import { store } from './store';
import { fetchUserById } from './users.slice';

store.dispatch(fetchUserById('1'));
