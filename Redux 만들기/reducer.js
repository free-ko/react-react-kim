import * as ActionType from './action-type.js';

const InitializeState = { count: 0 };

export function reducer(state = InitializeState, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      if (action.payload) {
        // payload값이 있을 경우 로직 작성
      }
      return { ...state, count: state.count + 1 };
    case ActionType.DECREASE:
      if (action.payload) {
        // payload값이 있을 경우 로직 작성
      }
      return { ...state, count: state.count - 1 };
    case ActionType.RESET:
      if (action.payload) {
        // payload값이 있을 경우 로직 작성
      }
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}