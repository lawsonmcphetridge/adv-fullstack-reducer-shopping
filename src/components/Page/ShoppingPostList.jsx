
import ShoppingPost from './ShoppingPost';

export default function ShoppingPostList({ shoppingList, handleSeenChanged }) {
  return (
    <ol>
    
      {shoppingList.map((post) => {
        return (
          <li key={post.id}>
            <ShoppingPost post={post} handleSeenChanged={(seen) => {
              handleSeenChanged(post.id, seen);
            }} />
          </li>
        );
      })}
    </ol>
  );
}
