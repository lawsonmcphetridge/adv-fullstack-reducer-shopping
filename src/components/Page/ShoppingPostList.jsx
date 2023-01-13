import ShoppingPost from './ShoppingPost';

export default function ShoppingPostList({
  shoppingList,
  handleSeenChangedByPostId,
}) {
  return (
    <ol>
      {shoppingList.map((post) => {
        return (
          <li key={post.id}>
            <ShoppingPost
              post={post}
              handleSeenChanged={(seen) => {
                handleSeenChangedByPostId(post.id, seen);
              }}
            />
          </li>
        );
      })}
    </ol>
  );
}
