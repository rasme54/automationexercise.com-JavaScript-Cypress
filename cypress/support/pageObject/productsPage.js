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
  addReview(loginData) {
    cy.get("input[id='name']").type(loginData.userName);
    cy.get("input[id='email']").type(loginData.correctUserEmail);
    cy.get("textarea[id='review']").type("This is a test review");
    cy.get("button[id='button-review']").click();
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
    cy.get("@productTile").each(($product) => {
      cy.wrap($product).should("contain.text", productName);
    });
  }

  increaseQuantity(amountOfQuantity) {
    cy.get("input[id='quantity']").clear().type(amountOfQuantity);
  }
  selectProductFromList(numberOfProduct) {
    cy.get(`a[href="/product_details/${numberOfProduct}"]`).click();
  }
  viewProduct(productIndex) {
    //indexing products starts from "1" on the webside
    productIndex = +1;
    cy.get(`a[href='/product_details/${productIndex}']`).click();
  }
}

export default ProductsPage;
