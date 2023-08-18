export type NotAuthorizedErrorT = any;
// ProxyServerApi.Components.Responses.Unauthorized;

export type AnyErrorReponseT = any;
// ProxyServerApi.Components.Schemas.CommonErrorResponseDTO;

export enum NotAuthorizedErrorCodeEnum {
  notValidSession = 'NOT_VALID_SESSION',
  needUpdateSession = 'NEED_UPDATE_SESSION',
}

export type GetFinanceTransactionTotalsReportDataT =
  OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.RequestBody;
export type GetFinanceTransactionTotalsReportResultT =
  OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.Responses.$200;
