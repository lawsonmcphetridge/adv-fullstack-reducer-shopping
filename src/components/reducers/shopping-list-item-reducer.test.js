import { shoppingListLoadStartAction } from '../actions/shopping-list-actions';
import { reducer, initialState } from './shopping-list-reducer';

describe('shopping-list-item-reducer', () => {
  describe('post list', () => {
    it('makes loading mode change to loading', () => {
      const newState = reducer(initialState(), shoppingListLoadStartAction());
      expect(newState.loadingMode).toEqual('Loading');
    });
  });
});
