import { Provider as UIProvider } from "../src/components/ui/provider.jsx";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Provider as StateProvider } from 'react-redux';
import { store } from "./state/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <UIProvider>
         <StateProvider store={store}>
            <App />
         </StateProvider>
      </UIProvider>
  </StrictMode>
);


