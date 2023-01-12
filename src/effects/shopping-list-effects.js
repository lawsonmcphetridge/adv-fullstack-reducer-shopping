// eslint-disable-next-line max-len
import { shoppingListLoadStartAction } from '../components/actions/shopping-list-actions';
import { getShoppingListItems } from '../services/shopping-list-items';
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
