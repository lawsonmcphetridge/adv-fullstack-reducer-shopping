
import ShoppingPost from './ShoppingPost';

export default function ShoppingPostList({ shoppingList }) {
  return (
    <ol>
    
      {shoppingList.map((post) => {
        return (
          <li key={post.id}>
            <ShoppingPost post={post} />
          </li>
        );
      })}
    </ol>
  );
}
