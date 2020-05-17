import http from "../../../services/http";

export default {
  async makeAnOrder(ctx, items) {
    await http.post("/api/buy", { order: items });
  },
};
