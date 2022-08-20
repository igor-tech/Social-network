import {createContext} from 'react';
import store from './redux/redux-store';

const StoreContext = createContext(store)


export default StoreContext