import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import UserNav from "./UserNav";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <UserNav />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});