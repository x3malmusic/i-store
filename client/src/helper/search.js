const search = (products, query) => {
  if (query) {
    return products.filter(
      (e) => e.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
    );
  } else return products;
};

const filterCategory = (products, currentCategory) => {
  if (currentCategory === "All") {
    return products;
  } else return products.filter((e) => e.category === currentCategory);
};

export const searchAndFilter = (products, query, currentCategory) => {
  return filterCategory(search(products, query), currentCategory);
};
