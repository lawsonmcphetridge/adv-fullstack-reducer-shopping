export const shoppingListLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};

export const shoppingListLoadStartAction = () => {
  return {
    type: 'shopping-list-loading',
  };
};

export const shoppingListErrorAction = (error) => {
  return {
    type: 'shopping-list-error',
    error,
  };
};

export const shoppingListCandidateBodyChanged = (body) => {
  return {
    body,
    type: 'shopping-list-candidate-body-changed'
  };
};

