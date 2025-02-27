class ProductsPage {
  hoverAndAddToCart(productNumber) {
    cy.get(".single-products").eq(productNumber).realHover().wait(500);
    cy.get("div.overlay-content > a.btn.btn-default.add-to-cart").eq(productNumber).click({ force: true });
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
    cy.get("@productTile").should("contain", productName);
  }
  increaseQuantity(amountOfQuantity) {
    cy.get("input[id='quantity']").clear().type(amountOfQuantity);
  }
  selectProductFromList(numberOfProduct) {
    cy.get(`a[href="/product_details/${numberOfProduct}"]`).click();
  }
}

export default ProductsPage;
