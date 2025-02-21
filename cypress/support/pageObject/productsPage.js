class ProductPage {
  findProduct(productName) {
    cy.get("input[id='search_product']").as("searchBar");
    cy.get("@searchBar").type(productName);
    cy.get("button[id='submit_search']").as("searchButton");
    cy.get("@searchButton").click();
  }
  isProductVisible(productName) {
    cy.get("div[class='product-image-wrapper']").as("productTile");
    cy.get("@productTile").should("contain", productName);
  }
}

export default ProductPage;
