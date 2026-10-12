import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { HotelProvider } from "./context/HotelContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HotelProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HotelProvider>
    </Provider>
  </React.StrictMode>
);