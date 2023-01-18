export const initialState = () => {
  return {
    loadingMode: 'at-rest',
    loadingError: null,
    shoppingCandidateBody: '',
    shoppingList: [],
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'shopping-list-loading':
      return {
        ...state,
        loadingMode: 'Loading',
      };
    case 'shopping-list-error':
      return {
        ...state,
        loadingMode: 'error',
        loadingError: action.error,
      };
    case 'shopping-list-load-success':
      return {
        ...state,
        shoppingList: action.shoppingList,
        loadingMode: 'success',
      };
    case 'shopping-list-candidate-body-changed':
      return {
        ...state,
        shoppingCandidateBody: action.body,
      };
    case 'shopping-list-seen-changed': {
      const shoppingList = [...state.shoppingList];
      const index = shoppingList.findIndex(
        (post) => post.id === action.postId
      );
      shoppingList[index] = {
        ...shoppingList[index],
        seen: action.seen,
      };      
      return {
        ...state,
        shoppingList,
      };
    }
    default:
      console.error(`Action type not allowed ${action.type}`, action);
      return state;
  }
};
