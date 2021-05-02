import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import DailyPrompt from "./DailyPrompt";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <DailyPrompt />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
