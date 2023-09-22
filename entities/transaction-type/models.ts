export type TransactionTypeT =
  ProxyServerApiDefinitions.Components.Schemas.TransactionType;

export enum TransactionTypeEnum {
  all = 'all',
  orders = 'orders',
  returns = 'returns',
  services = 'services',
  compensation = 'compensation',
  transferDelivery = 'transferDelivery',
  other = 'other',
}
