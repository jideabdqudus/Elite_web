import { ADD_TRANSACTION } from './Types'

  export const addTransaction = transaction => {
    return {
      type: ADD_TRANSACTION,
      payload: transaction,
    }
  }