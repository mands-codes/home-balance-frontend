import { queryOptions } from "@tanstack/react-query";
import * as api from "./api";

export const transactionQueries = {
  all: () => ["transactions"],
  lists: () => [...transactionQueries.all(), "list"],

  list: (filters) =>
    queryOptions({
      queryKey: [...transactionQueries.lists(), filters],
      queryFn: () => api.getTransactions(filters),
    }),
};
