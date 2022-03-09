import { createStore } from './redux.js'
import { reducer } from './reducer.js';
import * as Actions from './actions.js';

const store = createStore(reducer);

// 함수 구독(등록)
store.subscribe(function () {
  console.log(store.getState());
})

store.dispath(Actions.increase());
store.dispath(Actions.increase());
store.dispath(Actions.increase());
store.dispath(Actions.decrease());
store.dispath(Actions.reset());