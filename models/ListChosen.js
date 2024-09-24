export class ClothingItem {
	constructor(id, type, name, desc, imgSrc_jpg, imgSrc_png) {
		this.id = id;
		this.type = type;
		this.name = name;
		this.desc = desc;
		this.imgSrc_jpg = imgSrc_jpg;
		this.imgSrc_png = imgSrc_png;
	}

	dress() {
		let targetClass = "";
		switch (this.type) {
			case "topclothes":
				targetClass = ".bikinitop";
				break;
			case "botclothes":
				targetClass = ".bikinibottom";
				break;
			case "shoes":
				targetClass = ".feet";
				break;
			case "handbags":
				targetClass = ".handbag";
				break;
			case "necklaces":
				targetClass = ".necklace";
				break;
			case "hairstyle":
				targetClass = ".hairstyle";
				break;
			case "background":
				targetClass = ".background";
				break;
			default:
				break;
		}

		if (targetClass) {
			const element = document.querySelector(targetClass);
			if (targetClass === ".background") {
				element.style.backgroundImage = `url('${this.imgSrc_png}')`;
				element.style.zIndex = "1";
				element.innerHTML = "";
			} else if (
				targetClass === ".bikinitop" ||
				targetClass === ".bikinibottom"
			) {
				element.innerHTML = `<img src="${this.imgSrc_png}" alt="${this.name}" width="250" height="500">`;
				element.style.zIndex = "3";
			} else if (targetClass === ".feet") {
				element.innerHTML = `<img src="${this.imgSrc_png}" alt="${this.name}">`;
			} else {
				element.innerHTML = `<img src="${this.imgSrc_png}" alt="${this.name}">`;
				element.style.zIndex = "4";
			}
		}
	}
}
