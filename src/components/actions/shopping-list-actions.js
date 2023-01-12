export const shoppingListLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};
