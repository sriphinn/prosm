import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DeletePost from "./DeletePost";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <DeletePost />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});