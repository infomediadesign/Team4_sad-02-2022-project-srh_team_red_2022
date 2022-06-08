import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE
} from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
      // after the API call , action.payload is the newly updated post
       // LIKE has same Logic as update function
    case 'UPDATE':
    case 'LIKE':

      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    
    // We use filter because we keep all posts which are NOT equal to action.payload
    case 'DELETE':
      return posts.filter((post) => post._id !== action.payload);

     
    

    default:
      return posts;
  }
};