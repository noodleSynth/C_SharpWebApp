
import {createStore} from 'vuex';
import productsModule from './modules/products';

export * from './modules/mutation-types';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    products: productsModule,
  },
  state: {},
});
