import { ADD_TRANSACTION } from "../actions/Types"

const initialState = {
  transactions: [
    {
      id: 1,
      name: "John Doe",
      amount: "4000",
      number: "QQWE212",
      status:"Received",
      date: "2020-08-27",
      color:"success"
    },
    {
      id: 2,
      name: "Jane Doe",
      amount: "3000",
      number: "LEGE212",
      status:"Sent",
      date: "2020-04-27",
      color:"danger"
    },
    {
      id: 1,
      name: "Jide Abdul-Qudus",
      amount: "7000",
      number: "REE212",
      status:"Received",
      date: "2020-01-12",
      color:"success"
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      }
    default:
      return state
  }
}
