import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <div style={{ width: "100vw",height: "100vh", backgroundColor: "gray" }}>
      <App />
    </div>
  </Provider>
);
