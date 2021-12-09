import { GET_NEWS, SET_TITLE, TITLE_DATA } from "../actions";

  const initialState = {
  news:[],
  title:"",
  titleData:[],
  }
  
  export default function allnews (state = initialState, action) {
    switch (action.type) {

      case GET_NEWS:
        return {
          ...state,
          news: action.payload,
        };
        case SET_TITLE:
            return {
              ...state,
              title: action.payload,
            };

         case TITLE_DATA:
                return {
                    ...state,
                titleData: action.payload,
                  };

      default:
        return state;
    }
  }