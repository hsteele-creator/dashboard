import Data from "./Components/Data";
const INITIAL_STATE = Data;

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      console.log(action.payload.state);
  }

  return state;
};

export default rootReducer;
