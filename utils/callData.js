import { renderChosenItem, renderListChosen } from "../controllers/main.js";

const BASE_URL = "../data/Data.json";

export let fetchDataAndRenderChosenItems = async (type) => {
	try {
		let response = await axios.get(BASE_URL);
		let { tabPanes } = response.data;
		renderChosenItem(tabPanes, type);
		dress(tabPanes);
	} catch (error) {
		console.log("Error fetching data:", error);
	}
};

export let fetchData = async () => {
	try {
		let response = await axios.get(BASE_URL);
		let { navPills, tabPanes } = response.data;
		renderListChosen(navPills);
		renderChosenItem(tabPanes, navPills[0].type);
	} catch (error) {
		console.log("Error fetching data:", error);
	}
};

fetchData();
