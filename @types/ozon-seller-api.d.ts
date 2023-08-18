namespace OzonSellerApiDefinitions {
  type DateRange = {
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * */
    from: string;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * */
    to: string;
  };

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

  type TransactionTotalsFilters = {
    /**
     * Фильтр по дате.
     */
    date: DateRange;
    /**
     * Номер отправления.
     */
    posting_number: string;
    /**
     * Тип операции:
     */
    transaction_type: TransactionType;
  };

  /**
   * Итоговые суммы по транзакциям за указанный период.
   */
  type TransactionTotals = {
    /**
     * Общая стоимость товаров и возвратов в заданный период.
     */
    accruals_for_sale: number;
    /**
     * Сумма комиссии, которая была удержана при продаже товара и возвращена при его возврате.
     */
    sale_commission: number;
    /**
     * Стоимость услуг обработки отправлений, сборки заказов, магистрали и последней мили, а также доставки до введения новых комиссий и тарифов с 1 февраля 2021 года.
     * Магистраль — доставка товаров между кластерами.
     * Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.
     */
    processing_and_delivery: number;
    /**
     * Стоимость обратной магистрали, обработки возвратов, отмен и невыкупа товара, а также возвратов до введения новых комиссий и тарифов с 1 февраля 2021 года.
     * Магистраль — доставка товаров между кластерами.
     * Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.
     */
    refunds_and_cancellations: number;
    /**
     * Стоимость дополнительных услуг, не связанных напрямую с доставками и возвратами товаров. Например, продвижения или размещения товаров.
     */
    services_amount: number;
    /**
     * Компенсации.
     */
    compensation_amount: number;
    /**
     * Начисления за доставку и возвраты при работе по схеме «Доставка по выбору продавца».
     */
    money_transfer: number;
    /**
     * Прочие начисления.
     */
    others_amount: number;
  };

  namespace Paths {
    namespace FinanceTransactionTotals {
      namespace Post {
        type RequestBody = TransactionTotalsFilters;

        namespace Responses {
          type $200 = {
            result: TransactionTotals;
          };
        }
      }
    }
  }
}
