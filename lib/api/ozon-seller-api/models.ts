export type NotAuthorizedErrorT = any;
// ProxyServerApi.Components.Responses.Unauthorized;

export type AnyErrorReponseT = any;
// ProxyServerApi.Components.Schemas.CommonErrorResponseDTO;

export enum NotAuthorizedErrorCodeEnum {
  notValidSession = 'NOT_VALID_SESSION',
  needUpdateSession = 'NEED_UPDATE_SESSION',
}

export type GetFinanceTransactionTotalsReportDataT =
  OzonSellerApiDefinitions.Paths.FinanceAPIFinanceTransactionTotalV3.RequestBody;
export type GetFinanceTransactionTotalsReportResultT =
  OzonSellerApiDefinitions.Paths.FinanceAPIFinanceTransactionTotalV3.Responses.$200;

export type GetFinanceTransactionListReportDataT =
  OzonSellerApiDefinitions.Paths.FinanceAPIFinanceTransactionListV3.RequestBody;
export type GetFinanceTransactionListReportResultT =
  OzonSellerApiDefinitions.Paths.FinanceAPIFinanceTransactionListV3.Responses.$200;

export type GetFinanceRealizationReportDataT =
  OzonSellerApiDefinitions.Paths.FinanceAPIGetRealizationReport.RequestBody;
/** OzonSellerApiDefinitions.Paths.FinanceAPIGetRealizationReport.Responses.$200; */
export type GetFinanceRealizationReportResultT = {
  result: OzonSellerApiDefinitions.Components.Schemas.FinanceRealizationReportResult;
};
