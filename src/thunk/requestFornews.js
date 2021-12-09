

import axios from "axios";
import { getnews, settitle, titledata } from "../actions";


export const requestnews = (Search) => async (dispatch) => {


    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=818ac5544b4446a4a5c83bd93690d304`)
        console.log(response.data)

        dispatch(getnews([response.data]));
   
    } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
    }
  
}

export const requestbytitle = (title) => async (dispatch) => {
console.log(title);

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${title}&apiKey=818ac5544b4446a4a5c83bd93690d304`)
        console.log(response.data)

        dispatch(titledata([response.data]));
   
    } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
    }
  
}