import { GET_NEWS, SET_TITLE, TITLE_DATA } from "../actions";

  const initialState = {
  bookmark:[],
  }
  const getLocalStorage = (bookmarks=[]) =>{
      const data = JSON.stringify(bookmarks);
      localStorage.setItem('Bookmarks',data)
  }
  
  export default function bookMarks (state = initialState, action) {
    switch (action.type) {

      case 'ADD_BOOKMARKS':
          const bookmarks = [...state.bookmark,action.payload]
          getLocalStorage(bookMarks)
        return {
          ...state,
           bookmarks:[ action.payload,...state.bookmark]
        };
        
         

      default:
        return state;
    }
  }