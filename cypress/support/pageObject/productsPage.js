class ProductsPage {
  addAllVisibleProductToCart() {
    cy.get("div[class='product-image-wrapper']")
      .its("length")
      .then((count) => {
        const elementCount = count;
        for (let i = 0; i < elementCount; i++) {
          cy.addToCart(i);
        }
      });
  }
  areProductsVisible(selector) {
    cy.get(selector).then(($products) => {
      expect($products).to.be.visible;
    });
  }
  findProduct(productName) {
    cy.get("input[id='search_product']").as("searchBar");
    cy.get("@searchBar").type(productName);
    cy.get("button[id='submit_search']").as("searchButton");
    cy.get("@searchButton").click();
  }
  isProductDetailVisible(selctor, productDetail) {
    cy.log(productDetail);
    cy.get(selctor).should("be.visible");
  }
  isProductSearched(productName) {
    cy.get("div[class='product-image-wrapper']").as("productTile");
    cy.get("@productTile").each("contain", productName);
  }

  increaseQuantity(amountOfQuantity) {
    cy.get("input[id='quantity']").clear().type(amountOfQuantity);
  }
  selectProductFromList(numberOfProduct) {
    cy.get(`a[href="/product_details/${numberOfProduct}"]`).click();
  }
}

export default ProductsPage;
