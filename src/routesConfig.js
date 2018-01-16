import Data from "./components/toolbox/Data";
import NotFound from "./components/pages/404";

import Home from "./components/pages/Home";

import Generic from "./components/pages/Generic";

import data from "src/data";
import rawdata from "src/rawdata";

// --------------------------------------------------

const routesConfig = [
	{
		path: "/",
		title: "Home",
		component: Home,
		exact: true,
		show: false,
	},
	{
		path: "/data",
		title: "Data",
		component: Data(data),
		show: false,
	},
	{
		path: "/rawdata",
		title: "Raw Data",
		component: Data(rawdata),
		show: false,
	},
];

data.sections.forEach(section => {
	routesConfig.push({
		component: Generic,
		show: true,
		...section,
	})
})

data.pages.forEach(page => {
	routesConfig.push({
		component: Generic,
		show: true,
		...page,
	})
})

data.projects.forEach(project => {
	routesConfig.push({
		path: "/projects/" + project.slug,
		component: Generic,
		show: false,
		...project,
	})
})

routesConfig.push({
	component: NotFound,
});

export default routesConfig;
