import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);

