import Data from "./Components/Data";
const INITIAL_STATE = Data;

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      const lowestOrders = state.Products.sort((a, b) => {
        return a.orders - b.orders;
      });
      console.log(lowestOrders)
      if (action.payload.state === "Orders (Lowest to Highest)") {
        return {
          ...state,
          Products: state.Products.sort((a, b) => {
            return a.orders - b.orders;
          }),
        };
      } else if (action.payload.state === "Orders (Highest to Lowest)") {
      } else if (action.payload.state === "Sales (Lowest to Highest)") {
      } else if (action.payload.state === "Sales (Highest to Lowest)") {
      }
  }

  return state;
};

export default rootReducer;
