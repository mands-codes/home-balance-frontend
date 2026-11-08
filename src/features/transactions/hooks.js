// features/transactions/hooks.js
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "./api";
import { transactionKeys } from "./keys";

export function useTransactions(filters) {
  return useQuery({
    queryKey: transactionKeys.list(filters),
    queryFn: () => api.getTransactions(filters),
  });
}

export function useCreateTransaction() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: api.createTransaction,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: transactionKeys.lists() });
    },
  });
}

export function useDeleteTransaction() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: api.deleteTransaction,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: transactionKeys.lists() });
    },
  });
}
