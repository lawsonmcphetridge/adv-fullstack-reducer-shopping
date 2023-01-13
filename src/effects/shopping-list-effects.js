// eslint-disable-next-line max-len
import {
  shoppingListLoadStartAction,
  shoppingListSeenChanged,
} from '../components/actions/shopping-list-actions';
import {
  getShoppingListItems,
  updateShoppingItem,
} from '../services/shopping-list-items';
// eslint-disable-next-line max-len
import { shoppingListLoadSuccessAction } from '../components/actions/shopping-list-actions';
// eslint-disable-next-line max-len
import { shoppingListErrorAction } from '../components/actions/shopping-list-actions';

export const getPostsEffect = async (dispatch) => {
  dispatch(shoppingListLoadStartAction());
  try {
    const posts = await getShoppingListItems();
    dispatch(shoppingListLoadSuccessAction(posts));
  } catch (e) {
    dispatch(shoppingListErrorAction(e));
  }
};

export const updateShoppingListItemEffect = async (
  dispatch,
  itemId,
  updatedItem
) => {
  // dispatch(shoppingListSeenChanged());
  try {
    const updatedList = await updateShoppingItem(itemId, updatedItem);
    dispatch(shoppingListSeenChanged(updatedList));
  } catch (e) {
    dispatch(shoppingListErrorAction(e));
  }
};


// for storing operations.
// anything that is not react,
//sending something to database has nothing to react
// any mutative alteration
