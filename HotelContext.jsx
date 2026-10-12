import { createContext, useContext, useReducer } from "react";

const HotelContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
}

export function HotelProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    theme: "light",
  });

  return (
    <HotelContext.Provider value={{ state, dispatch }}>
      {children}
    </HotelContext.Provider>
  );
}

export function useHotel() {
  return useContext(HotelContext);
}