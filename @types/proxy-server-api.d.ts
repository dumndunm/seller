namespace ProxyServerApiDefinitions {
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * */
  type DateString = DateISOStringT;

  /**
   * ```
   * all — все,
   * orders — заказы,
   * returns — возвраты и отмены,
   * services — сервисные сборы,
   * compensation — компенсация,
   * transferDelivery — стоимость доставки,
   * other — прочее.
   * ```
   */
  type TransactionType =
    | 'all'
    | 'orders'
    | 'returns'
    | 'services'
    | 'compensation'
    | 'transferDelivery'
    | 'other';

  namespace Paths {
    namespace FinanceTransactionTotals {
      namespace Get {
        type QueryParameters = {
          dateFrom: DateString;
          dateTo: DateString;
          postingNumber: string;
          transactionType: TransactionType;
        };

        namespace Responses {
          type $200 = OzonSellerApiDefinitions.TransactionTotals;
        }
      }
    }
  }
}
