import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // TODO: Write logic to add the new bucket item to the bucket state variable
    setBucket([...bucket, item]);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {
      console.log('item ---> ', item);
      // TODO: Write logic that marks an item as complete or incomplete when invoked
      if (item.id === id) {
        item.isComplete = !item.isComplete;
        // want to reassign to not its current value
        // 0 -> 1
        // 1 -> 0
        // item.isComplete ^= 1
        // 0 xor 1 = 1
        // 1 xor 1 = 0
      }
      return item;

    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function
    const newBucketList = bucket.filter((item) => item.id !== id);
    // TODO: Update the bucket state variable
    setBucket(newBucketList);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    console.log('item ID -> ', itemId);
    console.log('new Value --> ', newValue);
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
