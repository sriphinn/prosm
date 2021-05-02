import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DailyPrompt from "./DailyPrompt";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <DailyPrompt />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
