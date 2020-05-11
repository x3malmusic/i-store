import http from "../../../services/http";

export default {
  async getProducts({ commit }) {
    await http.get("/api/products").then(({ data }) => {
      commit("setProducts", data);
    });

    await http.get("/api/categories").then(({ data }) => {
      commit("setCategories", data);
    });
  },
};
