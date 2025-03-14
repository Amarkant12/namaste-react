/**
 * <div id = "parent">
 *     <div id ="child">
 *      <h1> i, am H1 tag<h1>
 *     </div>
 * </div>
 *
 *
 *
 */


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Hi I am H1 tag"),
      React.createElement("h2", {}, "Hi I am H2 tag"),
    ]) ,
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hi I am H1 tag"),
        React.createElement("h2", {}, "Hi I am H2 tag"),
      ])
  );

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi I am H1 tag"),
//     React.createElement("h2", {}, "Hi I am H2 tag"),
//   ])
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world by React"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
