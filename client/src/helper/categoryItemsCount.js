export const categoryItemsCount = (products, categories) => {
  let newItemsCount = {};

  products.forEach((p) =>
    categories.forEach((c) => {
      if (p.category === c.name) {
        if (!newItemsCount[p.category]) {
          newItemsCount[p.category] = 1;
        } else newItemsCount[p.category]++;
      }
    })
  );

  const result = categories.map((c) => {
    if (c.name === "All") {
      c.count = products.length;
      return c;
    } else if (newItemsCount.hasOwnProperty(c.name)) {
      c.count = newItemsCount[c.name];
      return c;
    } else {
      c.count = 0;
      return c;
    }
  });

  return result;
};
