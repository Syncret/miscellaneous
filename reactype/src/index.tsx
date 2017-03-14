import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { store, test } from "./store/store";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example2")
);
test();