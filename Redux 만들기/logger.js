export const logger = store => next => action => {
  const currentState = store.getState();

  console.groupCollapsed('Action logger => ', action.type);
  console.log('Current state: ', currentState)
  console.log('Action payload: ', action.payload)
  console.groupEnd();

  next(action);
}