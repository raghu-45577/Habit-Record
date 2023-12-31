import { legacy_createStore as createStore } from "redux";
import HabitReducer from "./reducer";

// creating up the store
const store = createStore(HabitReducer);

// exporting the store
export default store;
