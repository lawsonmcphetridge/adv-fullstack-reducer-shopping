import ShoppingPostList from './ShoppingPostList';
import { Context } from '../ShoppingListProvider.jsx';
import { useContext } from 'react';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <ShoppingPostList shoppingList={state.shoppingList} />
    </>
  );
}
