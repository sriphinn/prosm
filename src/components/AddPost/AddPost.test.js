import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import AddPost from "./AddPost";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <AddPost/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
