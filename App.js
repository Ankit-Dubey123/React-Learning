// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );

// // Nested elements
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//-- React.createElement() - > object (when we render this element onto DOM it becomes html element)
import React from "react";
import ReactDOM from "react-dom/client";
// JSX (code transpiled before it reaches the JS Engine) - PARCEL - Babel(transpile to react code)
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>; // Js engine doesn't understand / To create class write className

//root.render(jsxHeading); // render method also doesn't understand JSX

// React Component
// Class based - Old way
// Functional based components - New way

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste react using jsx
  </h1>
);
// - functional component ( a function which return JSX)
// --------------component composition
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Namaste react functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// const fn = () => true; is same as fn = () =>{return true;}
// Component will be render like root.render(<HeadingComponent/>);
root.render(<HeadingComponent />);
