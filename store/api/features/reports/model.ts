export type GetFinanceRealizationReportQueryT =
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceRealization.Get.QueryParameters>;
export type GetFinanceRealizationReportRequestT = {
  query: GetFinanceRealizationReportQueryT;
};
export type GetFinanceRealizationReportResponseT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceRealization.Get.Responses.$200;

export type GetFinanceTransactionListReportQueryT =
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionList.Get.QueryParameters>;
export type GetFinanceTransactionListReportRequestT = {
  query: GetFinanceTransactionListReportQueryT;
};
export type GetFinanceTransactionListReportResponseT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionList.Get.Responses.$200;

export type GetFinanceTransactionListAllReportQueryT =
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionListAll.Get.QueryParameters>;
export type GetFinanceTransactionListAllReportRequestT = {
  query: GetFinanceTransactionListReportQueryT;
};
export type GetFinanceTransactionListAllReportResponseT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionListAll.Get.Responses.$200;

export type GetFinanceTransactionTotalsReportQueryT = Partial<
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionTotals.Get.QueryParameters>
>;
export type GetFinanceTransactionTotalsReportRequestT = {
  query: GetFinanceTransactionTotalsReportQueryT;
};
export type GetFinanceTransactionTotalsReportResponseT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionTotals.Get.Responses.$200;

export type GetFinanceOverviewReportQueryT = Partial<
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceOverview.Get.QueryParameters>
>;
export type GetFinanceOverviewReportRequestT = {
  query: GetFinanceOverviewReportQueryT;
};
export type GetFinanceOverviewReportResponseT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceOverview.Get.Responses.$200;
