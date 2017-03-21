import axios from "axios";

export const addNumber = (inputNumber) => ({
  type: "ADD_NUMBER",
  inputNumber
});

function receiveNumber(number){
  return {
    type: "RECEIVE_NUMBER",
    data: number
  }
}

function resetUserNumber(){
  return {
    type: "RESET_USER_NUMBERS"
  }
}

export function fetchNumber(){
  return dispatch => {
    return axios.get("http://localhost:8080/src/data/data.json")
           .then(response => {dispatch(receiveNumber(response.data.correctNumbers[Math.floor(Math.random() * 5)]))})
           .then(dispatch(resetUserNumber()))
           .catch(function(error){
             if(error.response){
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
             }else{
               console.log("Error", error.message);
             }
           });           
  }
}