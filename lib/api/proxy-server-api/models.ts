export type NotAuthorizedErrorT = any;
// ProxyServerApi.Components.Responses.Unauthorized;

export type AnyErrorReponseT = any;
// ProxyServerApi.Components.Schemas.CommonErrorResponseDTO;

export enum NotAuthorizedErrorCodeEnum {
  notValidSession = 'NOT_VALID_SESSION',
  needUpdateSession = 'NEED_UPDATE_SESSION',
}

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

export type GetFinanceTransactionTotalsReportQueryT =
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionTotals.Get.QueryParameters>;
export type GetFinanceTransactionTotalsReportRequestT = {
  query: GetFinanceTransactionTotalsReportQueryT;
};
export type GetFinanceTransactionTotalsReportResponseT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceTransactionTotals.Get.Responses.$200;

export type GetFinanceOverviewReportQueryT =
  InterfaceToType<ProxyServerApiDefinitions.Paths.ReportsFinanceOverview.Get.QueryParameters>;
export type GetFinanceOverviewReportRequestT = {
  query: GetFinanceTransactionTotalsReportQueryT;
};
export type GetFinanceOverviewReportResponseT =
  ProxyServerApiDefinitions.Paths.ReportsFinanceOverview.Get.Responses.$200;
