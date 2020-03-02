import { INCREMENT_COUNTER, DECRENENT_COUNTER } from "./testConstants";

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER,
    }
}


    export const decrementCounter = () => {
    return {
        type: DECRENENT_COUNTER,
    }
}