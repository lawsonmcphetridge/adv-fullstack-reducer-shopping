// eslint-disable-next-line max-len
import { shoppingListCandidateBodyChanged, shoppingListLoadStartAction } from '../actions/shopping-list-actions';
import { reducer, initialState } from './shopping-list-reducer';

describe('shopping-list-item-reducer', () => {
  describe('post list', () => {
    it('makes loading mode change to loading', () => {
      const newState = reducer(
        initialState(),
        shoppingListLoadStartAction()
      );
      expect(newState.loadingMode).toEqual('Loading');
    });
  });

  describe('post candidate', () => {
    it('uses new body provided', () => {
      const oldState = {
        ...initialState(),
        shoppingCandidateBody: 'hello',
      };
      const newState = reducer(
        oldState,
        shoppingListCandidateBodyChanged('hello')
      );
      expect(newState.shoppingCandidateBody).toEqual('hello');
    });
  });
});
