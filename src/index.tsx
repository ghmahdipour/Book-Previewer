import React from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n";
import './index.css';
import App from "@app/App";

// Themes
// For Default import Theme.scss
import "@assets/scss/Theme.scss";

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux";
import { store } from "@redux/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
