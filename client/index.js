import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import routes from "../src/router/router";

let router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={router} />
);