const search = (products, query) => {
  return products.filter(
    (e) => e.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );
};

const filterCategory = (products, currentCategory) => {
  return products.filter((e) => e.category === currentCategory);
};

export const searchAndFilter = (products, query, currentCategory) => {
  if (search) {
    if (currentCategory === "All") {
      return search(products, query);
    } else return filterCategory(search(products, query), currentCategory);
  } else if (currentCategory === "All") return products;
  else return filterCategory(products, currentCategory);
};
