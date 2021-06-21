import React from "react";
import Data from "./data.json";
const biscuitsEtSables = React.lazy(() =>
  import("./views/pattisseriesSansGluten/biscuitesEtSables/mainPage.js")
);
const biscuitsEtSablesContent = React.lazy(() =>
  import("./views/pattisseriesSansGluten/biscuitesEtSables/content.js")
);
const Admin = React.lazy(() => import("./views/admin"));
const routes = [
  { path: "/", exact: true, name: "Home", component: biscuitsEtSables },
  {
    path: "/biscuitsEtSables",
    name: "biscuitsEtSables",
    component: biscuitsEtSables,
  },
  { path: "/admin", name: "Admin", component: Admin },
];
const data = Data.pattisseriesSansGluten;
for (let i = 0; i < data.length; i++) {
  routes.push({
    path: `/${data[i].url}`,
    name: data.name,
    component: biscuitsEtSablesContent,
  });
}
export default routes;
