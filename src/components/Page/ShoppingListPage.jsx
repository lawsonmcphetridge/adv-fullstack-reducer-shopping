import ShoppingPostList from './ShoppingPostList';

export default function ShoppingListPage() {
  const shoppingList = [
    {
      id: '1',
      body: 'first post',
    },
  ];
  return (
    <>
      <ShoppingPostList shoppingList={shoppingList} />
    </>
  );
}
