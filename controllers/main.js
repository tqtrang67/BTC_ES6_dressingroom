import { ClothingItem } from "../models/ListChosen.js";
import { fetchDataAndRenderChosenItems } from "../utils/callData.js";

export let renderChosenItem = (data, type) => {
	let content = "";
	data.forEach((menu) => {
		if (menu.type === type) {
			let trString = `
                <div class="tab-item col-3 text-center id="${menu.type}">
                    <img src="${menu.imgSrc_jpg}" alt="">
                    <p>${menu.name}</p>
                    <button class="btn-try" data-id="${menu.id}"">thử đồ</button>
                </div>
            `;
			return (content += trString);
		}
	});
	document.getElementById("tab-item").innerHTML = content;

	document.querySelectorAll(".btn-try").forEach((btn) => {
		btn.addEventListener("click", function () {
			const itemId = this.getAttribute("data-id");
			const selectedItem = data.find((item) => item.id === itemId);
			const clothingItem = new ClothingItem(
				selectedItem.id,
				selectedItem.type,
				selectedItem.name,
				selectedItem.desc,
				selectedItem.imgSrc_jpg,
				selectedItem.imgSrc_png
			);
			clothingItem.dress();
		});
	});
};

export let renderListChosen = (data) => {
	let content = "";
	data.forEach((menu) => {
		let trString = `
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:void(0)" data-type="${menu.type}">${menu.showName}</a>
            </li>
        `;
		content += trString;
	});
	document.getElementById("menu").innerHTML = content;

	const navItems = document.querySelectorAll(".nav-item");
	navItems.forEach((item) => {
		item.addEventListener("click", function () {
			navItems.forEach((nav) => {
				nav.querySelector(".nav-link").classList.remove("active");
			});
			this.querySelector(".nav-link").classList.add("active");

			const selectedType =
				this.querySelector(".nav-link").getAttribute("data-type");
			fetchDataAndRenderChosenItems(selectedType);
		});
	});
};
