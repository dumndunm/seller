export type FinanceTransactionTotalsQueriesT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionTotals.Get.QueryParameters;

export enum FinanceTransactionTotalsQueriesEnum {
  startDate = 'startDate',
  endDate = 'endDate',
  postingNumber = 'postingNumber',
  transactionType = 'transactionType',
}

export type FinanceTransactionTotalsT =
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionTotals.Get.Responses.$200>;
