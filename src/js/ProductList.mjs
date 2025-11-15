import { renderListWithTemplate } from "./utils.mjs";

function productListTemplate(product) {
    return `
    <li class="product-card">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.NameWithoutBrand}</h3>
        <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
        <p>Price: ${product.FinalPrice.toFixed(2)}</p>
        <p>Color: ${product.Colors[0].ColorName}</p>
        <a href="product_pages/?products=${product.Id}">View Details</a>
    </li>
    `;
}

export default class ProductList{
    constructor(category, datasource, listElement) {
        this.category = category;
        this.datasource = datasource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.datasource.getData();
        this.renderListWithTemplate(productListTemplate, this.listElement, list);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}