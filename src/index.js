import React from "react";
import App from "./App";
import { render, } from "react-snapshot";

render(<App />, document.getElementById("root"));

navigator.serviceWorker.getRegistrations().then((registrations) => {
	for(let registration of registrations) {
		registration.unregister()
	}
})
