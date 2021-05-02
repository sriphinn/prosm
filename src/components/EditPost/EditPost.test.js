import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import EditPost from "./EditPost";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <EditPost />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});