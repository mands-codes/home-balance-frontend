// features/transactions/api.js
import { api } from "../../lib/api";

export const getTransactions = (params) =>
  api.get("/transactions", { params }).then((r) => r.data);

export const createTransaction = (data) =>
  api.post("/transactions", data).then((r) => r.data);

export const deleteTransaction = (id) => api.delete(`/transactions/${id}`);
