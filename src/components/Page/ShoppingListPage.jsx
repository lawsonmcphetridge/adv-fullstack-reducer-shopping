import ShoppingPostList from './ShoppingPostList';
import { Context } from '../ShoppingListProvider.jsx';
import { useContext, useEffect } from 'react';
import { createShoppingListItem } from '../../services/shopping-list-items';
// eslint-disable-next-line max-len
import {
  shoppingListCandidateBodyChanged,
  shoppingListSeenChanged,
} from '../actions/shopping-list-actions';
import ShoppingListForm from './ShoppingListForm';
import {
  getPostsEffect,
  updateShoppingListItemEffect,
} from '../../effects/shopping-list-effects';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getPostsEffect(dispatch);
  }, []);

  // useEffect((postId, seen) => {
  //   updateShoppingListItemEffect(dispatch, postId, seen);
  // }, []);

  const handleSeenChanged = (postId, seen) => {
    dispatch(shoppingListSeenChanged(postId, seen));
    updateShoppingListItemEffect(dispatch, postId, { seen });
  };
  return (
    <>
      <ShoppingListForm
        body={state.shoppingCandidateBody}
        onBodyChanged={(body) => {
          dispatch(shoppingListCandidateBodyChanged(body));
        }}
        onSubmit={async (body) => {
          await createShoppingListItem(body);
          getPostsEffect(dispatch);
          dispatch(shoppingListCandidateBodyChanged(''));
        }}
      />
      {state.loadingMode === 'Loading' ? (
        <div>Loading your Shopping List</div>
      ) : (
        <ShoppingPostList
          shoppingList={state.shoppingList}
          handleSeenChangedByPostId={(postId, seen) =>
            handleSeenChanged(postId, seen)
          }
        />
      )}
    </>
  );
}
