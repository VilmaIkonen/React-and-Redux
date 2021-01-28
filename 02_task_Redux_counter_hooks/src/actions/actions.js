export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const ADDFIVE = "ADDFIVE"
export const REMOVEFIVE = "REMOVEFIVE"
export const RESET = "RESET"
export const STORE_RESULT = "STORE_RESULT"
export const REMOVE_RESULT = "REMOVE_RESULT"


export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});
export const addFive = () => ({type: ADDFIVE, value: 5});
export const removeFive = () => ({type: REMOVEFIVE, value: 5});
export const reset = () => ({type: RESET});
export const storeResult = (currentState) => ({type: STORE_RESULT, value: currentState});
export const removeResult = (id) => ({type: REMOVE_RESULT, id: id})

// value, payload... with it can add different types of data: numbers, boolean... --> to reducer function