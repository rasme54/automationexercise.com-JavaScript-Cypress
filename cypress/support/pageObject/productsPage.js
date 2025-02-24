class ProductsPage {
  addToCart(numberOfProduct) {
    cy.get(`a[data-product-id="${numberOfProduct}"]`).eq(1).click();
  }
  findProduct(productName) {
    cy.get("input[id='search_product']").as("searchBar");
    cy.get("@searchBar").type(productName);
    cy.get("button[id='submit_search']").as("searchButton");
    cy.get("@searchButton").click();
  }
  hoverOverProduct(numberOfProduct) {
    cy.get(".product-image-wrapper").eq(numberOfProduct).realHover();
  }
  isProductDetailVisible(selctor, productDetail) {
    cy.log(productDetail);
    cy.get(selctor).should("be.visible");
  }
  isProductSearched(productName) {
    cy.get("div[class='product-image-wrapper']").as("productTile");
    cy.get("@productTile").should("contain", productName);
  }
  selectProductFromList(numberOfProduct) {
    cy.get(`a[href="/product_details/${numberOfProduct}"]`);
  }
}

export default ProductsPage;
