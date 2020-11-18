import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

// TODO: Actually type for parameter 'action' is not well for now
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
