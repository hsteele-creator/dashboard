import Data from "./Components/Data";
const INITIAL_STATE = Data;

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      const lowestOrders = state.Products.sort((a, b) => {
        return a.orders - b.orders;
      });

      const lowestSales = state.Products.sort((a, b) => {
        return +a.sales - +b.sales;
      });
      if (action.payload.state === "Orders (Lowest to Highest)") {
        return {
          ...state,
          Products: [...lowestOrders],
        };
      } else if (action.payload.state === "Orders (Highest to Lowest)") {
        console.log("highest");
        return {
          ...state,
          Products: [
            ...state.Products.sort((a, b) => {
              return b.orders - a.orders;
            }),
          ],
        };
      } else if (action.payload.state === "Sales (Lowest to Highest)") {
        return {
          ...state,
          Products: [...lowestSales],
        };
      } else if (action.payload.state === "Sales (Highest to Lowest)") {
        return {
          ...state,
          Products: [
            ...state.Products.sort((a, b) => {
              return b.sales - a.sales;
            }),
          ],
        };
      }
  }

  return state;
};

export default rootReducer;
