import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import ExamplePage from "../ExamplePage/ExamplePage";
import TestPage from "../TestPage/TestPage";
import HomePage from "../HomePage";

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="demo" element={<ExamplePage />} />
      {/* <Route path="test" element={<TestPage />} /> */}
    </Switch>
  );
}

export default Routes;
