const React = require("react");
const { json, useLoaderData } = require("react-router-dom");
const { default: About } = require("../container/about");
const { default: Index } = require("../container");

const routes = [
  {
    path: "/",
    loader() {
      return json({ message: "Welcome to React Router Index!" });
    },
    Component() {
      return <Index title="chaojisaiyaren"/>;
    },
  },
  {
    path: "/about",
    loader() {
      return json({ message: "Welcome to React Router About!" });
    },
    Component() {
      return <About />;
    },
  },
];

module.exports = routes;