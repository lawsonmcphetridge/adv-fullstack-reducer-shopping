import ShoppingPostList from './ShoppingPostList';
import { Context } from '../ShoppingListProvider.jsx';
import { useContext, useEffect } from 'react';
import { getShoppingListItems } from '../../services/shopping-list-items';
// eslint-disable-next-line max-len
import { shoppingListLoadSuccessAction } from '../actions/shopping-list-actions';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    (async () => {
      const posts = await getShoppingListItems();
      const action = shoppingListLoadSuccessAction(posts);
      dispatch(action);
    })();
  }, []);
  return (
    <>
      <ShoppingPostList shoppingList={state.shoppingList} />
    </>
  );
}
