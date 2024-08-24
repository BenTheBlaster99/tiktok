import { createStore } from "redux";
import { combineReducers } from "redux";



function Store() {
    const intitialState = {
      videos: [],
    };
      const videoReducer = (state = intitialState, action) => {
        switch (action.type) {
          case "SET_VIDEOS":
            return {
              ...state,
              videos: action.payload,
            };
          default:
            return state;
        }
    }
  
}
const rootReducer = combineReducers({
    videoData: videoReducer,
});
const store = createStore(rootReducer);

export default Store;


