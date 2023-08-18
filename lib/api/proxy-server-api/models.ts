export type NotAuthorizedErrorT = any;
// ProxyServerApi.Components.Responses.Unauthorized;

export type AnyErrorReponseT = any;
// ProxyServerApi.Components.Schemas.CommonErrorResponseDTO;

export enum NotAuthorizedErrorCodeEnum {
  notValidSession = 'NOT_VALID_SESSION',
  needUpdateSession = 'NEED_UPDATE_SESSION',
}

export type GetFinanceTransactionTotalsReportQueryT =
  ProxyServerApiDefinitions.Paths.FinanceTransactionTotals.Get.QueryParameters;
export type GetFinanceTransactionTotalsReportResultT =
  ProxyServerApiDefinitions.Paths.FinanceTransactionTotals.Get.Responses.$200;
