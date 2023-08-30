import { store } from "..";
import { counterSlice } from "../reducers/test";

const testAction = async (data) => {
    const result = await (data);
    if (result.data) {
        store.dispatch(counterSlice(result.data))
    }
    return result
}

export { testAction }