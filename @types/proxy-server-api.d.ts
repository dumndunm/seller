namespace ProxyServerApiDefinitions {
  /**
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * */
  type DateString = string;

  namespace Paths {
    namespace FinanceTransactionTotals {
      namespace Get {
        type QueryParameters = {
          date_from: DateString;
          date_to: DateString;
          posting_number: string;
          transaction_type: OzonSellerApiDefinitions.TransactionType;
        };

        namespace Responses {
          type $200 =
            OzonSellerApiDefinitions.Paths.FinanceTransactionTotals.Post.Responses.$200;
        }
      }
    }
  }
}
