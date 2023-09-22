declare namespace ProxyServerApiDefinitions {
  declare namespace Components {
    namespace Schemas {
      export interface Error {
        /**
         * Код ошибки.
         */
        code?: number; // int32
        /**
         * Дополнительная информация об ошибке.
         */
        details?: ProtobufAny[];
        /**
         * Описание ошибки.
         */
        message?: string;
      }
      export interface FinanceOverviewReport {}
      export interface FinanceRealizationReport {
        /**
         * Титульный лист отчёта.
         */
        header?: FinanceRealizationReportHeader;
        /**
         * Таблица отчёта.
         */
        rows?: FinanceRealizationReportRow[];
      }
      export interface FinanceRealizationReportHeader {
        /**
         * Номер отчёта о реализации.
         */
        num?: string;
        /**
         * Дата формирования отчёта.
         */
        doc_date?: string;
        /**
         * Дата заключения договора оферты.
         */
        contract_date?: string;
        /**
         * Номер договора оферты.
         */
        contract_num?: string;
        /**
         * Валюта ваших цен.
         */
        currency_code?: string;
        /**
         * Сумма к начислению.
         */
        doc_amount?: number; // double
        /**
         * Сумма к начислению с НДС.
         */
        vat_amount?: number; // double
        /**
         * ИНН плательщика.
         */
        payer_inn?: string;
        /**
         * КПП плательщика.
         */
        payer_kpp?: string;
        /**
         * Название плательщика.
         */
        payer_name?: string;
        /**
         * ИНН получателя.
         */
        rcv_inn?: string;
        /**
         * КПП получателя.
         */
        rcv_kpp?: string;
        /**
         * Название получателя.
         */
        rcv_name?: string;
        /**
         * Начало периода в отчёте.
         */
        start_date?: string;
        /**
         * Конец периода в отчёте.
         */
        stop_date?: string;
      }
      export interface FinanceRealizationReportRow {
        /**
         * Номер строки в отчёте.
         */
        row_number?: number; // int32
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Наименование товара.
         */
        product_name?: string;
        /**
         * Штрихкод товара.
         */
        barcode?: string;
        /**
         * Код товара продавца — артикул.
         */
        offer_id?: string;
        /**
         * Комиссия за продажу по категории.
         */
        commission_percent?: number; // double
        /**
         * Цена продавца с учётом его скидки.
         */
        price?: number; // double
        /**
         * Цена реализации — цена, по которой покупатель приобрёл товар.
         *
         * Для реализованных товаров.
         *
         */
        price_sale?: number; // double
        /**
         * Реализовано на сумму.
         *
         * Стоимость реализованного товара с учётом количества и региональных коэффициентов. Расчёт осуществляется по цене `sale_amount`.
         *
         */
        sale_amount?: number; // double
        /**
         * Комиссия за реализованный товар с учётом скидок и наценки.
         */
        sale_commission?: number; // double
        /**
         * Доплата за счёт Ozon.
         *
         * Сумма, которую Ozon компенсирует продавцу, если скидка Ozon больше или равна комиссии за продажу.
         *
         */
        sale_discount?: number; // double
        /**
         * Итого к начислению за реализованный товар.
         *
         * Сумма после вычета комиссии за продажу, применения скидок и установленных наценок.
         *
         */
        sale_price_seller?: number; // double
        /**
         * Количество товара, реализованного по цене `price_sale`.
         */
        sale_qty?: number; // int32
        /**
         * Цена реализации — цена, по которой покупатель приобрёл товар.
         *
         * Для возвращённых товаров.
         *
         */
        return_sale?: number; // double
        /**
         * Возвращено на сумму.
         *
         * Стоимость возвращённого товара с учётом количества и региональных коэффициентов. Расчёт осуществляется по цене `return_sale`.
         *
         */
        return_amount?: number; // double
        /**
         * Комиссия с учётом количества товара, предоставленных скидок и установленных наценок. Ozon компенсирует её в случае возврата товара.
         */
        return_commission?: number; // double
        /**
         * Доплата за счёт Ozon.
         *
         * Сумма скидки за счёт Ozon по возвращённому товару, которую Ozon компенсирует продавцу, если скидка Ozon больше или равна комиссии за продажу.
         *
         */
        return_discount?: number; // double
        /**
         * Итого возвращено.
         *
         * Сумма, начисляемая продавцу за возвращённый товар после вычета комиссии за продажу, применения скидок и установленных наценок.
         *
         */
        return_price_seller?: number; // double
        /**
         * Количество возвращённого товара.
         */
        return_qty?: number; // int32
      }
      /**
       * Результаты запроса.
       */
      export interface FinanceTransactionListAllReport {
        /**
         * Информация об операциях.
         */
        operations?: FinanceTransactionListOperation[];
      }
      export interface FinanceTransactionListOperation {
        /**
         * Стоимость товаров с учётом скидок продавца.
         */
        accruals_for_sale?: number; // double
        /**
         * Итоговая сумма операции.
         */
        amount?: number; // double
        /**
         * Стоимость доставки для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров.
         */
        delivery_charge?: number; // double
        /**
         * Информация о товаре.
         */
        items?: OperationItem[];
        /**
         * Дата операции.
         */
        operation_date?: string;
        /**
         * Идентификатор операции.
         */
        operation_id?: number; // int64
        /**
         * Тип операции.
         */
        operation_type?: string;
        /**
         * Название типа операции.
         */
        operation_type_name?: string;
        posting?: /* Информация об отправлении. */ OperationPosting;
        /**
         * Плата за возвраты и отмены для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров.
         */
        return_delivery_charge?: number; // double
        /**
         * Комиссия за продажу или возврат комиссии за продажу.
         */
        sale_commission?: number; // double
        /**
         * Дополнительные услуги.
         */
        services?: OperationService[];
        /**
         * Тип начисления:
         * - `all` — все,
         * - `orders` — заказы,
         * - `returns` — возвраты и отмены,
         * - `services` — сервисные сборы,
         * - `compensation` — компенсация,
         * - `transferDelivery` — стоимость доставки,
         * - `other` — прочее.
         *
         */
        type?: string;
      }
      /**
       * Результаты запроса.
       */
      export interface FinanceTransactionListReport {
        /**
         * Информация об операциях.
         */
        operations?: FinanceTransactionListOperation[];
        /**
         * Количество страниц.
         */
        page_count?: number; // int64
        /**
         * Количество товаров.
         */
        row_count?: number; // int64
      }
      /**
       * Результаты запроса.
       */
      export interface FinanceTransactionTotalsReport {
        /**
         * Общая стоимость товаров и возвратов в заданный период.
         */
        accruals_for_sale?: number; // double
        /**
         * Компенсации.
         */
        compensation_amount?: number; // double
        /**
         * Начисления за доставку и возвраты при работе по схеме «Доставка по выбору продавца».
         */
        money_transfer?: number; // double
        /**
         * Прочие начисления.
         */
        others_amount?: number; // double
        /**
         * Стоимость услуг обработки отправлений, сборки заказов, магистрали и последней мили, а также доставки до введения новых комиссий и тарифов с 1 февраля 2021 года.
         *
         * Магистраль — доставка товаров между кластерами.
         *
         * Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.
         *
         */
        processing_and_delivery?: number; // double
        /**
         * Стоимость обратной магистрали, обработки возвратов, отмен и невыкупа товара, а также возвратов до введения новых комиссий и тарифов с 1 февраля 2021 года.
         *
         * Магистраль — доставка товаров между кластерами.
         *
         * Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.
         *
         */
        refunds_and_cancellations?: number; // double
        /**
         * Сумма комиссии, которая была удержана при продаже товара и возвращена при его возврате.
         */
        sale_commission?: number; // double
        /**
         * Стоимость дополнительных услуг, не связанных напрямую с доставками и возвратами товаров. Например, продвижения или размещения товаров.
         */
        services_amount?: number; // double
      }
      export type GetFinanceOverviewReportResponse = FinanceOverviewReport;
      export type GetFinanceRealizationReportResponse =
        FinanceRealizationReport;
      export type GetFinanceTransactionListAllReportResponse =
        /* Результаты запроса. */ FinanceTransactionListAllReport;
      export type GetFinanceTransactionListReportResponse =
        /* Результаты запроса. */ FinanceTransactionListReport;
      export type GetFinanceTransactionTotalsReportResponse =
        /* Результаты запроса. */ FinanceTransactionTotalsReport;
      export interface OperationItem {
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Идентификатор товара в системе Ozon.
         */
        sku?: number; // int64
      }
      /**
       * Информация об отправлении.
       */
      export interface OperationPosting {
        /**
         * Схема доставки:
         *   - `FBO` — доставка со склада Ozon,
         *   - `FBS` — доставка со своего склада,
         *   - `RFBS` — доставка по выбору продавца,
         *   - `Crossborder` — доставка из-за рубежа.
         *
         */
        delivery_schema?: string;
        /**
         * Дата принятия отправления в обработку.
         */
        order_date?: string;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      export interface OperationService {
        /**
         * Название услуги:
         *   - `MarketplaceNotDeliveredCostItem` — возврат невостребованного товара от покупателя на склад.
         *   - `MarketplaceReturnAfterDeliveryCostItem` — возврат от покупателя на склад после доставки.
         *   - `MarketplaceDeliveryCostItem` — доставка товара до покупателя.
         *   - `MarketplaceSaleReviewsItem` — приобретение отзывов на платформе.
         *   - `ItemAdvertisementForSupplierLogistic` — доставка товаров на склад Ozon — кросс-докинг.
         *   - `MarketplaceServiceStorageItem` — размещения товаров.
         *   - `MarketplaceMarketingActionCostItem` — продвижение товаров.
         *   - `MarketplaceServiceItemInstallment` — продвижениe и продажа в рассрочку.
         *   - `MarketplaceServiceItemMarkingItems` — обязательная маркировка товаров.
         *   - `MarketplaceServiceItemFlexiblePaymentSchedule` — гибкий график выплат.
         *   - `MarketplaceServiceItemReturnFromStock` — комплектация товаров для вывоза продавцом.
         *   - `ItemAdvertisementForSupplierLogisticSeller` — транспортно-экспедиционные услуги.
         *   - `MarketplaceServiceItemDelivToCustomer` — последняя миля.
         *   - `MarketplaceServiceItemDirectFlowTrans` — магистраль.
         *   - `MarketplaceServiceItemDropoffFF` — обработка отправления.
         *   - `MarketplaceServiceItemDropoffPVZ` — обработка отправления.
         *   - `MarketplaceServiceItemDropoffSC` — обработка отправления.
         *   - `MarketplaceServiceItemFulfillment` — сборка заказа.
         *   - `MarketplaceServiceItemPickup` — выезд транспортного средства по адресу продавца для забора отправлений — Pick-up.
         *   - `MarketplaceServiceItemReturnAfterDelivToCustomer` — обработка возврата.
         *   - `MarketplaceServiceItemReturnFlowTrans` — обратная магистраль.
         *   - `MarketplaceServiceItemReturnNotDelivToCustomer` — обработка отмен.
         *   - `MarketplaceServiceItemReturnPartGoodsCustomer` — обработка невыкупа.
         *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга.
         *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS.
         *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS.
         *   - `MarketplaceServiceItemDeliveryKGT` — доставка крупногабаритного товара (КГТ).
         *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика.
         *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика.
         *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца».
         *   - `MarketplaceServicePremiumPromotion` — услуга продвижение Premium, фиксированная комиссия.
         *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
         *
         */
        name?: string;
        /**
         * Цена.
         */
        price?: number; // double
      }
      /**
       * Тип операции:
       *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
       *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
       *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
       *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
       *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
       *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
       *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
       *   - `OperationClaim` — начисление по претензии;
       *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
       *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
       *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
       *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
       *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
       *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
       *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
       *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
       *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
       *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
       *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
       *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
       *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
       *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
       *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
       *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
       *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
       *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
       *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
       *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
       *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
       *
       */
      export type OperationType =
        | "ClientReturnAgentOperation"
        | "MarketplaceMarketingActionCostOperation"
        | "MarketplaceSaleReviewsOperation"
        | "MarketplaceSellerCompensationOperation"
        | "OperationAgentDeliveredToCustomer"
        | "OperationAgentDeliveredToCustomerCanceled"
        | "OperationAgentStornoDeliveredToCustomer"
        | "OperationClaim"
        | "OperationCorrectionSeller"
        | "OperationDefectiveWriteOff"
        | "OperationItemReturn"
        | "OperationLackWriteOff"
        | "OperationMarketplaceCrossDockServiceWriteOff"
        | "OperationMarketplaceServiceStorage"
        | "OperationSetOff"
        | "MarketplaceSellerReexposureDeliveryReturnOperation"
        | "OperationReturnGoodsFBSofRMS"
        | "ReturnAgentOperationRFBS"
        | "MarketplaceSellerShippingCompensationReturnOperation"
        | "OperationMarketplaceServicePremiumCashback"
        | "MarketplaceServicePremiumPromotion"
        | "MarketplaceRedistributionOfAcquiringOperation"
        | "MarketplaceReturnStorageServiceAtThePickupPointFbsItem"
        | "MarketplaceReturnStorageServiceInTheWarehouseFbsItem"
        | "MarketplaceServiceItemDeliveryKGT"
        | "MarketplaceServiceItemDirectFlowLogistic"
        | "MarketplaceServiceItemReturnFlowLogistic"
        | "MarketplaceServicePremiumCashbackIndividualPoints"
        | "OperationMarketplaceWithHoldingForUndeliverableGoods";
      export interface ProtobufAny {
        /**
         * Тип протокола передачи данных.
         */
        typeUrl?: string;
        /**
         * Значение ошибки.
         */
        value?: string; // byte
      }
      /**
       * Тип начисления:
       *   - `all` — все,
       *   - `orders` — заказы,
       *   - `returns` — возвраты и отмены,
       *   - `services` — сервисные сборы,
       *   - `compensation` — компенсация,
       *   - `transferDelivery` — стоимость доставки,
       *   - `other` — прочее.
       *
       * Некоторые операции могут быть разделены во времени. Например, при приёме возврата от покупателя списывается стоимость товара и возвращается комиссия, а когда товар возвращается на склад, взимается стоимость услуга по обработке возврата.
       *
       */
      export type TransactionType =
        | "all"
        | "orders"
        | "returns"
        | "services"
        | "compensation"
        | "transferDelivery"
        | "other";
    }
  }
  declare namespace Paths {
    namespace ReportsFinanceOverview {
      namespace Get {
        namespace Parameters {
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type EndDate = string; // date-time
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type StartDate = string; // date-time
        }
        export interface QueryParameters {
          startDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.StartDate /* date-time */;
          endDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.EndDate /* date-time */;
        }
        namespace Responses {
          export type $200 =
            Components.Schemas.GetFinanceOverviewReportResponse;
          export type $400 = Components.Schemas.Error;
          export type $403 = Components.Schemas.Error;
          export type $404 = Components.Schemas.Error;
          export type $409 = Components.Schemas.Error;
          export type $500 = Components.Schemas.Error;
        }
      }
    }
    namespace ReportsFinanceRealization {
      namespace Get {
        namespace Parameters {
          /**
           * Отчётный период в формате `YYYY-MM`.
           */
          export type Date = string;
        }
        export interface QueryParameters {
          date: /* Отчётный период в формате `YYYY-MM`. */ Parameters.Date;
        }
        namespace Responses {
          export type $200 =
            Components.Schemas.GetFinanceRealizationReportResponse;
          export type $400 = Components.Schemas.Error;
          export type $403 = Components.Schemas.Error;
          export type $404 = Components.Schemas.Error;
          export type $409 = Components.Schemas.Error;
          export type $500 = Components.Schemas.Error;
        }
      }
    }
    namespace ReportsFinanceTransactionList {
      namespace Get {
        namespace Parameters {
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type EndDate = string; // date-time
          /**
           * Тип операции:
           *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
           *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
           *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
           *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
           *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
           *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
           *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
           *   - `OperationClaim` — начисление по претензии;
           *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
           *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
           *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
           *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
           *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
           *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
           *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
           *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
           *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
           *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
           *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
           *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
           *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
           *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
           *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
           *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
           *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
           *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
           *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
           *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
           *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
           *
           */
          export type OperationType =
            /**
             * Тип операции:
             *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
             *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
             *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
             *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
             *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
             *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
             *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
             *   - `OperationClaim` — начисление по претензии;
             *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
             *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
             *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
             *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
             *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
             *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
             *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
             *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
             *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
             *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
             *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
             *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
             *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
             *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
             *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
             *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
             *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
             *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
             *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
             *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
             *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
             *
             */
            Components.Schemas.OperationType[];
          /**
           * Номер отправления.
           */
          export type PostingNumber = string;
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type StartDate = string; // date-time
          export type TransactionType =
            /**
             * Тип начисления:
             *   - `all` — все,
             *   - `orders` — заказы,
             *   - `returns` — возвраты и отмены,
             *   - `services` — сервисные сборы,
             *   - `compensation` — компенсация,
             *   - `transferDelivery` — стоимость доставки,
             *   - `other` — прочее.
             *
             * Некоторые операции могут быть разделены во времени. Например, при приёме возврата от покупателя списывается стоимость товара и возвращается комиссия, а когда товар возвращается на склад, взимается стоимость услуга по обработке возврата.
             *
             */
            Components.Schemas.TransactionType;
        }
        export interface QueryParameters {
          startDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.StartDate /* date-time */;
          endDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.EndDate /* date-time */;
          postingNumber?: /* Номер отправления. */ Parameters.PostingNumber;
          transactionType?: Parameters.TransactionType;
          operationType?: /**
           * Тип операции:
           *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
           *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
           *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
           *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
           *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
           *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
           *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
           *   - `OperationClaim` — начисление по претензии;
           *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
           *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
           *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
           *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
           *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
           *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
           *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
           *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
           *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
           *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
           *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
           *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
           *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
           *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
           *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
           *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
           *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
           *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
           *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
           *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
           *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
           *
           */
          Parameters.OperationType;
        }
        namespace Responses {
          export type $200 =
            Components.Schemas.GetFinanceTransactionListReportResponse;
          export type $400 = Components.Schemas.Error;
          export type $403 = Components.Schemas.Error;
          export type $404 = Components.Schemas.Error;
          export type $409 = Components.Schemas.Error;
          export type $500 = Components.Schemas.Error;
        }
      }
    }
    namespace ReportsFinanceTransactionListAll {
      namespace Get {
        namespace Parameters {
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type EndDate = string; // date-time
          /**
           * Тип операции:
           *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
           *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
           *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
           *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
           *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
           *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
           *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
           *   - `OperationClaim` — начисление по претензии;
           *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
           *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
           *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
           *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
           *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
           *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
           *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
           *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
           *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
           *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
           *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
           *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
           *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
           *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
           *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
           *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
           *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
           *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
           *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
           *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
           *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
           *
           */
          export type OperationType =
            /**
             * Тип операции:
             *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
             *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
             *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
             *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
             *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
             *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
             *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
             *   - `OperationClaim` — начисление по претензии;
             *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
             *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
             *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
             *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
             *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
             *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
             *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
             *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
             *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
             *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
             *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
             *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
             *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
             *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
             *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
             *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
             *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
             *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
             *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
             *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
             *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
             *
             */
            Components.Schemas.OperationType[];
          /**
           * Номер отправления.
           */
          export type PostingNumber = string;
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type StartDate = string; // date-time
          export type TransactionType =
            /**
             * Тип начисления:
             *   - `all` — все,
             *   - `orders` — заказы,
             *   - `returns` — возвраты и отмены,
             *   - `services` — сервисные сборы,
             *   - `compensation` — компенсация,
             *   - `transferDelivery` — стоимость доставки,
             *   - `other` — прочее.
             *
             * Некоторые операции могут быть разделены во времени. Например, при приёме возврата от покупателя списывается стоимость товара и возвращается комиссия, а когда товар возвращается на склад, взимается стоимость услуга по обработке возврата.
             *
             */
            Components.Schemas.TransactionType;
        }
        export interface QueryParameters {
          startDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.StartDate /* date-time */;
          endDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.EndDate /* date-time */;
          postingNumber?: /* Номер отправления. */ Parameters.PostingNumber;
          transactionType?: Parameters.TransactionType;
          operationType?: /**
           * Тип операции:
           *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
           *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
           *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
           *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
           *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
           *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
           *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
           *   - `OperationClaim` — начисление по претензии;
           *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
           *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
           *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
           *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
           *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
           *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
           *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
           *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
           *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
           *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
           *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
           *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
           *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
           *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
           *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
           *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
           *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
           *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
           *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
           *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
           *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
           *
           */
          Parameters.OperationType;
        }
        namespace Responses {
          export type $200 =
            Components.Schemas.GetFinanceTransactionListAllReportResponse;
          export type $400 = Components.Schemas.Error;
          export type $403 = Components.Schemas.Error;
          export type $404 = Components.Schemas.Error;
          export type $409 = Components.Schemas.Error;
          export type $500 = Components.Schemas.Error;
        }
      }
    }
    namespace ReportsFinanceTransactionTotals {
      namespace Get {
        namespace Parameters {
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type EndDate = string; // date-time
          /**
           * Номер отправления.
           */
          export type PostingNumber = string;
          /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          export type StartDate = string; // date-time
          export type TransactionType =
            /**
             * Тип начисления:
             *   - `all` — все,
             *   - `orders` — заказы,
             *   - `returns` — возвраты и отмены,
             *   - `services` — сервисные сборы,
             *   - `compensation` — компенсация,
             *   - `transferDelivery` — стоимость доставки,
             *   - `other` — прочее.
             *
             * Некоторые операции могут быть разделены во времени. Например, при приёме возврата от покупателя списывается стоимость товара и возвращается комиссия, а когда товар возвращается на склад, взимается стоимость услуга по обработке возврата.
             *
             */
            Components.Schemas.TransactionType;
        }
        export interface QueryParameters {
          startDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.StartDate /* date-time */;
          endDate: /**
           * Начало периода.
           *
           * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
           * Пример: `2019-11-25T10:43:06.51`.
           *
           */
          Parameters.EndDate /* date-time */;
          postingNumber?: /* Номер отправления. */ Parameters.PostingNumber;
          transactionType?: Parameters.TransactionType;
        }
        namespace Responses {
          export type $200 =
            Components.Schemas.GetFinanceTransactionTotalsReportResponse;
          export type $400 = Components.Schemas.Error;
          export type $403 = Components.Schemas.Error;
          export type $404 = Components.Schemas.Error;
          export type $409 = Components.Schemas.Error;
          export type $500 = Components.Schemas.Error;
        }
      }
    }
  }
}
