declare namespace OzonSellerApiDefinitions {
  declare namespace Components {
    export interface HeaderParameters {
      "Client-Id": Parameters.ClientId;
      "Api-Key": Parameters.ApiKey;
    }
    namespace Parameters {
      export type ApiKey = string;
      export type ClientId = string;
    }
    namespace RequestBodies {
      export type V1ItemIDsRequest = Schemas.V1ItemIDsRequest;
      export type V1StrategyRequest = Schemas.V1StrategyRequest;
    }
    namespace Schemas {
      export interface AddStrategyItemsResponseError {
        /**
         * Код ошибки.
         */
        code?: string;
        /**
         * Текст ошибки.
         */
        error?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface AnalyticsAnalyticsGetDataRequest {
        /**
         * Дата, с которой будут данные в отчёте.
         */
        date_from?: string;
        /**
         * Дата, по которую будут данные в отчёте.
         */
        date_to?: string;
        /**
         * Группировка данных в отчёте:
         *   - `unknownDimension` — неизвестное измерение,
         *   - `sku` — идентификатор товара,
         *   - `spu` — идентификатор товара,
         *   - `day` — день,
         *   - `week` — неделя,
         *   - `month` — месяц,
         *   - `year` — год,
         *   - `category1` — категория первого уровня,
         *   - `category2` — категория второго уровня,
         *   - `category3` — категория третьего уровня,
         *   - `category4` — категория четвертого уровня,
         *   - `brand` — бренд,
         *   - `modelID` — модель.
         *
         */
        dimension?: SellerServiceanalyticsDimension[];
        /**
         * Фильтры.
         */
        filters?: AnalyticsFilter[];
        /**
         * Количество значений в ответе:
         *   - максимум — 1000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
        /**
         * Укажите до 14 метрик. Если их будет больше, вы получите ошибку с кодом `InvalidArgument`.
         *
         * Список метриĸ, по ĸоторым будет сформирован отчёт:
         *   - `unknown_metric` — неизвестная метрика,
         *   - `hits_view_search` — показы в поиске и в категории,
         *   - `hits_view_pdp` — показы на карточке товара,
         *   - `hits_view` — всего показов,
         *   - `hits_tocart_search` — в корзину из поиска или категории,
         *   - `hits_tocart_pdp` — в корзину из карточки товара,
         *   - `hits_tocart` — всего добавлено в корзину,
         *   - `session_view_search` — сессии с показом в поиске или в категории,
         *   - `session_view_pdp` — сессии с показом на карточке товара,
         *   - `session_view` — всего сессий,
         *   - `conv_tocart_search` — конверсия в корзину из поиска или категории,
         *   - `conv_tocart_pdp` — конверсия в корзину из карточки товара,
         *   - `conv_tocart` — общая конверсия в корзину,
         *   - `revenue` — заказано на сумму,
         *   - `returns` — возвращено товаров,
         *   - `cancellations` — отменено товаров,
         *   - `ordered_units` — заказано товаров,
         *   - `delivered_units` — доставлено товаров,
         *   - `position_category` — позиция в поиске и категории.
         *
         */
        metrics?: AnalyticsMetric[];
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
        /**
         * Настройки сортировки отчёта.
         */
        sort?: AnalyticsSorting[];
      }
      export interface AnalyticsAnalyticsGetDataResponse {
        result?: /* Результаты запроса. */ AnalyticsGetDataResponseResult;
        /**
         * Время создания отчёта.
         */
        timestamp?: string;
      }
      export interface AnalyticsAnalyticsGetStockOnWarehousesRequest {
        /**
         * Количество ответов на странице. По умолчанию — 100.
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
      }
      export interface AnalyticsAnalyticsGetStockOnWarehousesResponse {
        /**
         * Время создания отчёта.
         */
        timestamp?: string;
        /**
         * Данные по остаткам на всех складах.
         */
        total_items?: AnalyticsGetStockOnWarehousesResponseTotalItem[];
        /**
         * Данные остатков по определённым складам.
         */
        wh_items?: AnalyticsGetStockOnWarehousesResponseWHItem[];
      }
      export interface AnalyticsDataRow {
        /**
         * Группировка данных в отчёте.
         */
        dimensions?: AnalyticsDataRowDimension[];
        /**
         * Список значений метрики.
         */
        metrics?: number /* double */[];
      }
      export interface AnalyticsDataRowDimension {
        /**
         * Идентификатор.
         */
        id?: string;
        /**
         * Наименование.
         */
        name?: string;
      }
      export interface AnalyticsFilter {
        /**
         * Параметр сортировки. Можно передать любой атрибут из параметров `dimension` и `metric`, кроме атрибута `brand`.
         */
        key?: string;
        op?: /**
         * <br>
         *
         * Операция сравнения:
         *   - `EQ` — равно,
         *   - `GT` — больше,
         *   - `GTE` — больше или равно,
         *   - `LT` — меньше,
         *   - `LTE` — меньше или равно.
         *
         */
        FilterOp;
        /**
         * Значение для сравнения.
         */
        value?: string;
      }
      /**
       * Результаты запроса.
       */
      export interface AnalyticsGetDataResponseResult {
        /**
         * Массив данных.
         */
        data?: AnalyticsDataRow[];
        /**
         * Итоговые и средние значения метрик.
         */
        totals?: number /* double */[];
      }
      /**
       * Фильтр по типу склада:
       *   - `EXPRESS_DARK_STORE` — склады Ozon с доставкой Fresh.
       *   - `NOT_EXPRESS_DARK_STORE` — склады Ozon без доставки Fresh.
       *   - `ALL` — все склады Ozon.
       *
       */
      export type AnalyticsGetStockOnWarehousesRequestWarehouseType =
        | "ALL"
        | "EXPRESS_DARK_STORE"
        | "NOT_EXPRESS_DARK_STORE";
      export interface AnalyticsGetStockOnWarehousesResponseItem {
        /**
         * Штрихкод.
         */
        barcode?: string;
        /**
         * Категория.
         */
        category?: string;
        /**
         * Уценённый товар (Да/Нет).
         */
        discounted?: string;
        /**
         * Высота упаковки.
         */
        height?: number; // float
        /**
         * Длина товара.
         */
        length?: number; // float
        /**
         * Идентификатор товара в системе продавца.
         */
        offer_id?: string;
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: string; // uint64
        stock?: /* Информация о товарах на складе. */ AnalyticsGetStockOnWarehousesResponseItemStock;
        /**
         * Название категории.
         */
        title?: string;
        /**
         * Объём товара.
         */
        volume?: number; // float
        /**
         * Вес товара в упаковке.
         */
        weight?: number; // float
        /**
         * Ширина упаковки.
         */
        width?: number; // float
      }
      /**
       * Информация о товарах на складе.
       */
      export interface AnalyticsGetStockOnWarehousesResponseItemStock {
        /**
         * Количество доступных для продажи товаров.
         */
        for_sale?: number; // int64
        /**
         * Количество не найденных при подборе товаров.
         */
        loss?: number; // int64
        /**
         * Количество не подлежащих реализации товаров.
         */
        not_for_sale?: number; // int64
      }
      export interface AnalyticsGetStockOnWarehousesResponseTotalItem {
        /**
         * Штрихкод.
         */
        barcode?: string;
        /**
         * Категория.
         */
        category?: string;
        /**
         * Уценённый товар (Да/Нет).
         */
        discounted?: string;
        /**
         * Высота упаковки.
         */
        height?: number; // float
        /**
         * Длина товара.
         */
        length?: number; // float
        /**
         * Идентификатор товара в системе продавца.
         */
        offer_id?: string;
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: string; // uint64
        stock?: /* Информация об остатках товаров. */ AnalyticsGetStockOnWarehousesResponseTotalStock;
        /**
         * Название товара.
         */
        title?: string;
        /**
         * Объём товара.
         */
        volume?: number; // float
        /**
         * Вес товара в упаковке.
         */
        weight?: number; // float
        /**
         * Ширина упаковки.
         */
        width?: number; // float
      }
      /**
       * Информация об остатках товаров.
       */
      export interface AnalyticsGetStockOnWarehousesResponseTotalStock {
        /**
         * Количество товаров, которое перемещается между фулфилмент-центрами.
         */
        between_warehouses?: number; // int64
        /**
         * Количество доступных для продажи товаров.
         */
        for_sale?: number; // int64
        /**
         * Количество не найденных при подборе товаров.
         */
        loss?: number; // int64
        /**
         * Количество не подлежащих реализации товаров.
         */
        not_for_sale?: number; // int64
        /**
         * Количество товаров в доставке.
         */
        shipped?: number; // int64
      }
      export interface AnalyticsGetStockOnWarehousesResponseWHItem {
        /**
         * Идентификатор склада.
         */
        id?: string;
        /**
         * Информация о товарах на складе.
         */
        items?: AnalyticsGetStockOnWarehousesResponseItem[];
        /**
         * Название склада.
         */
        name?: string;
      }
      export interface AnalyticsItemTurnoverDataV3ResponseCategory {
        /**
         * Среднесуточные продажи за определённый период. Измеряется в литрах.
         */
        avg_sold_litres?: number; // double
        /**
         * Среднесуточный остаток на складах Ozon в литрах.
         */
        avg_stock_litres?: number; // double
        /**
         * Количество прошедших дней с платным размещением.
         */
        billed_days?: number; // int32
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
        /**
         * Стоимость размещения одного литра товара в рублях.
         */
        commission?: number; // double
        /**
         * Тариф за размещение в рублях. Зависит от объёма и количества дней размещения.
         */
        fee?: number; // double
        /**
         * Пороговая оборачиваемость для бесплатного размещения. Измеряется в днях.
         */
        threshold_free?: number; // int64
        /**
         * Превышенный порог оборачиваемости, по которому определили тариф. Измеряется в днях.
         */
        threshold_used?: number; // int64
        /**
         * Фактическая оборачиваемость в днях.
         */
        turnover?: string;
        /**
         * Данные по товарам категории.
         */
        turnover_items?: AnalyticsItemTurnoverDataV3ResponseItemTurnover[];
      }
      export interface AnalyticsItemTurnoverDataV3ResponseItemTurnover {
        /**
         * Среднесуточные продажи за определённый период. Указывается в штуках.
         */
        avg_sold_items?: number; // double
        /**
         * Среднесуточные продажи за определённый период. Измеряется в литрах.
         */
        avg_sold_litres?: number; // double
        /**
         * Среднесуточный объём товара на складе в литрах.
         */
        avg_stock_items?: number; // double
        /**
         * Сколько единиц товара можно размещать на складе бесплатно.
         * Рассчитывается по формуле: Среднесуточные продажи товара (л/дн) × Пороговая оборачиваемость (дн) ÷ Объём (л).
         *
         */
        avg_stock_items_free?: number; // double
        /**
         * Среднесуточный остаток на складах Ozon в литрах.
         */
        avg_stock_litres?: number; // double
        /**
         * Уценённый товар.
         */
        discounted?: boolean;
        /**
         * Высота товара.
         */
        height?: number; // double
        /**
         * Часть от стоимости размещения категории в рублях.
         */
        item_commission_part?: number; // double
        /**
         * Длина товара.
         */
        length?: number; // double
        /**
         * Сколько нужно продавать в день, чтобы размещение товара было бесплатным.
         * Рассчитывается по формуле: Среднесуточный остаток товара (л) ÷ Пороговая оборачиваемость (дн) ÷ Объем (л).
         *
         */
        min_daily_sales?: number; // double
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Артикул.
         */
        offer_id?: string;
        /**
         * Рекомендация, что нужно сделать с товаром по данным об оборачиваемости этого товара.
         */
        recommendation?: string;
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Доступно к продаже всего в штуках.
         */
        stock_items_total?: number; // int64
        /**
         * Пороговая оборачиваемость в днях.
         */
        threshold_free?: number; // int64
        /**
         * Фактическая оборачиваемость в днях.
         */
        turnover?: string;
        /**
         * Объём товара.
         */
        volume?: number; // double
        /**
         * Ширина товара.
         */
        width?: number; // double
      }
      export type AnalyticsMetric = string;
      export interface AnalyticsSorting {
        /**
         * Метрика, по которой будет отсортирован результат запроса.
         */
        key?: string;
        order?: /**
         * Вид сортировки:
         *   - `ASC` — по возрастанию,
         *   - `DESC` — по убыванию.
         *
         */
        SortingOrder;
      }
      export interface AnalyticsStockOnWarehouseRequest {
        /**
         * Количество ответов на странице. По умолчанию — 100.
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
        warehouse_type?: /**
         * Фильтр по типу склада:
         *   - `EXPRESS_DARK_STORE` — склады Ozon с доставкой Fresh.
         *   - `NOT_EXPRESS_DARK_STORE` — склады Ozon без доставки Fresh.
         *   - `ALL` — все склады Ozon.
         *
         */
        AnalyticsGetStockOnWarehousesRequestWarehouseType;
      }
      export interface AnalyticsStockOnWarehouseResponse {
        result?: /* Результат запроса. */ AnalyticsStockOnWarehouseResponseResult;
      }
      /**
       * Результат запроса.
       */
      export interface AnalyticsStockOnWarehouseResponseResult {
        /**
         * Информация о товарах и остатках.
         */
        rows?: AnalyticsStockOnWarehouseResultRows[];
      }
      export interface AnalyticsStockOnWarehouseResultRows {
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Идентификатор товара в системе продавца.
         */
        item_code?: string;
        /**
         * Название товара в системе Ozon.
         */
        item_name?: string;
        /**
         * Количество товара, доступное к продаже на Ozon.
         */
        free_to_sell_amount?: number; // int64
        /**
         * Количество товара, указанное в подтверждённых будущих поставках.
         */
        promised_amount?: number; // int64
        /**
         * Количество товара, зарезервированное для покупки, возврата и перевозки между складами.
         */
        reserved_amount?: number; // int64
        /**
         * Название склада, где находится товар.
         */
        warehouse_name?: string;
      }
      export interface ApproveDeclineDiscountTasksResponseFailDetail {
        /**
         * Идентификатор заявки.
         */
        task_id?: number; // uint64
        /**
         * Текст ошибки.
         */
        error_for_user?: string;
      }
      export interface BrandBrandCompanyCertificationListRequest {
        /**
         * Номер страницы, возвращаемой в запросе.
         */
        page?: number; // int32
        /**
         * Количество элементов на странице.
         */
        page_size?: number; // int32
      }
      export interface BrandBrandCompanyCertificationListResponse {
        result?: /* Результат запроса. */ BrandCompanyCertificationListResponseBrandCertificationResult;
      }
      export interface BrandCompanyCertificationListResponseBrandCertification {
        /**
         * Название бренда.
         */
        brand_name?: string;
        /**
         * Признак, что требуется сертификат:
         * - `true` — требуется сертификат;
         * - `false` — сертификат не нужен.
         *
         */
        has_certificate?: boolean;
      }
      /**
       * Результат запроса.
       */
      export interface BrandCompanyCertificationListResponseBrandCertificationResult {
        /**
         * Информация о сертифицируемых брендах.
         */
        brand_certification?: BrandCompanyCertificationListResponseBrandCertification[];
        /**
         * Общее количество брендов.
         */
        total?: number; // int64
      }
      /**
       * Фильтр по характеристикам:
       *   - `ALL` — все характеристики,
       *   - `REQUIRED` — обязательные,
       *   - `OPTIONAL` — дополнительные.
       *
       */
      export type CategoryAttributesRequestAttributeType =
        | "ALL"
        | "REQUIRED"
        | "OPTIONAL";
      export interface CategoryAttributesResponseAttribute {
        /**
         * Признак, что значения словарного атрибута зависят от категории:
         * - `true` — у атрибута разные значения для каждой категории.
         * - `false` — у атрибута одинаковые значения для всех категорий.
         *
         */
        category_dependent?: boolean;
        /**
         * Описание характеристики.
         */
        description?: string;
        /**
         * Идентификатор справочника.
         */
        dictionary_id?: number; // int64
        /**
         * Идентификатор группы характеристик.
         */
        group_id?: number; // int64
        /**
         * Название группы характеристик.
         */
        group_name?: string;
        /**
         * Номер задания на формирование документов.
         */
        id?: number; // int64
        /**
         * Признак аспектного атрибута. Аспектный атрибут — характеристика, по которой отличаются товары одной модели.
         *
         * Например, у одежды и обуви одной модели могут быть разные расцветки и размеры. То есть цвет и размер — это аспектные атрибуты.
         *
         * Значения поля:
         *   - `true` — атрибут аспектный и его нельзя изменить после поставки товара на склад или продажи со своего склада.
         *   - `false` — атрибут не аспектный, можно изменить в любое время.
         *
         */
        is_aspect?: boolean;
        /**
         * Признак, что характеристика — набор значений:
         *   - `true` — характеристика — набор значений,
         *   - `false` — характеристика состоит из одного значения.
         *
         */
        is_collection?: boolean;
        /**
         * Признак обязательной характеристики:
         *   - `true` — обязательная характеристика,
         *   - `false` — характеристику можно не указывать.
         *
         */
        is_required?: boolean;
        /**
         * Название.
         */
        name?: string;
        /**
         * Тип характеристики.
         */
        type?: string;
      }
      export interface CategoryAttributesResponseCategoryAttributes {
        /**
         * Массив характеристик товара.
         */
        attributes?: CategoryAttributesResponseAttribute[];
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
      }
      /**
       * GetCategoryTree
       */
      export interface CategoryGetCategoryTreeRequest {
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
        language?: /**
         * Language
         * <br>Язык в ответе:
         *   - `EN` — английский,
         *   - `RU` — русский,
         *   - `TR` — турецкий,
         *   - `ZH_HANS` — китайский.
         *
         * По умолчанию используется русский язык.
         *
         */
        CategoryLanguage;
      }
      export interface CategoryGetCategoryTreeResponse {
        /**
         * Список категорий.
         */
        result?: GetCategoryTreeResponseItem[];
      }
      /**
       * Language
       * <br>Язык в ответе:
       *   - `EN` — английский,
       *   - `RU` — русский,
       *   - `TR` — турецкий,
       *   - `ZH_HANS` — китайский.
       *
       * По умолчанию используется русский язык.
       *
       */
      export type CategoryLanguage = "DEFAULT" | "RU" | "EN" | "TR" | "ZH_HANS";
      export interface Categoryv2DictionaryValueBatchRequest {
        /**
         * Идентификатор характеристики.
         */
        attribute_id?: number; // int64
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
        /**
         * Язык в ответе:
         *   - `EN` — английский,
         *   - `RU` — русский.
         * По умолчанию используется русский язык.
         *
         */
        language?: /**
         * Language
         * <br>Язык в ответе:
         *   - `EN` — английский,
         *   - `RU` — русский.
         *
         * По умолчанию используется русский язык.
         *
         */
        Categoryv2Language;
        /**
         * Идентификатор справочника, с которого нужно начать ответ. Если `last_value_id` — 10, то в ответе будут справочники, начиная с одиннадцатого.
         */
        last_value_id?: number; // int64
        /**
         * Количество значений в ответе:
         *   - максимум — 5000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
      }
      export interface Categoryv2DictionaryValueBatchResponse {
        has_next?: boolean;
        result?: Categoryv2DictionaryValueBatchResponseDictionaryValue[];
      }
      export interface Categoryv2DictionaryValueBatchResponseDictionaryValue {
        id?: number; // int64
        info?: string;
        picture?: string;
        /**
         * Значение характеристики товара.
         */
        value?: string;
      }
      /**
       * Language
       * <br>Язык в ответе:
       *   - `EN` — английский,
       *   - `RU` — русский.
       *
       * По умолчанию используется русский язык.
       *
       */
      export type Categoryv2Language = "DEFAULT" | "RU" | "EN";
      export interface Categoryv3CategoryAttributesRequest {
        /**
         * Фильтр по характеристикам:
         *   - `REQUIRED` — обязательная,
         *   - `OPTIONAL` — дополнительная.
         *
         */
        attribute_type?: /**
         * Фильтр по характеристикам:
         *   - `ALL` — все характеристики,
         *   - `REQUIRED` — обязательные,
         *   - `OPTIONAL` — дополнительные.
         *
         */
        CategoryAttributesRequestAttributeType;
        /**
         * Идентификатор категории.
         */
        category_id?: number /* int64 */[];
        language?: /**
         * Language
         * Язык в ответе:
         *   - `EN` — английский,
         *   - `RU` — русский,
         *   - `TR` — турецкий.
         *
         * По умолчанию используется русский язык.
         *
         */
        Categoryv3Language;
      }
      export interface Categoryv3CategoryAttributesResponse {
        /**
         * Результат запроса.
         */
        result?: CategoryAttributesResponseCategoryAttributes[];
      }
      /**
       * Language
       * Язык в ответе:
       *   - `EN` — английский,
       *   - `RU` — русский,
       *   - `TR` — турецкий.
       *
       * По умолчанию используется русский язык.
       *
       */
      export type Categoryv3Language = "DEFAULT" | "RU" | "EN" | "TR";
      /**
       * Chat models
       */
      export interface ChatChat {
        /**
         * Идентификатор первого непрочитанного сообщения в чате.
         */
        first_unread_message_id?: number; // uint64
        /**
         * Идентификатор чата.
         */
        id?: string;
        /**
         * Идентификатор последнего сообщения в чате.
         */
        last_message_id?: number; // uint64
        /**
         * Количество непрочитанных сообщений в чате.
         */
        unread_count?: number; // int64
        /**
         * Cписок участников чата.
         */
        users?: /* Информация об участнике чата. */ ChatExternalUser[];
      }
      /**
       * ChatHistory
       */
      export interface ChatChatHistoryRequest {
        /**
         * Идентификатор чата.
         */
        chat_id?: string;
        /**
         * Идентификатор сообщения, с которого начать вывод истории чата.
         */
        from_message_id?: string; // uint64
        /**
         * Количество сообщений в ответе.
         */
        limit?: number; // int64
      }
      /**
       * Результат.
       */
      export interface ChatChatHistoryResponse {
        /**
         * Результат работы метода.
         */
        result?: ChatMessage[];
      }
      /**
       * ChatList
       */
      export interface ChatChatListRequest {
        /**
         * Массив с идентификаторами чатов, для которых нужно вывести информацию.
         */
        chat_id_list?: string[];
        /**
         * Количество страниц в ответе.
         */
        page?: number; // int32
        /**
         * Количество чатов на странице. Значение по умолчанию — 100. Максимальное значение — 1000.
         */
        page_size?: number; // int32
        with?: /* Дополнительные поля, которые нужно добавить в ответ. */ ChatListRequestWith;
      }
      export interface ChatChatListResponse {
        result?: /* Chat models */ ChatChat[];
        /**
         * Общее количество непрочитанных сообщений.
         */
        total_unread_count?: number; // int64
      }
      /**
       * ChatSendFile
       */
      export interface ChatChatSendFileRequest {
        /**
         * Файл в виде строки base64.
         */
        base64_content?: string;
        /**
         * Идентификатор чата.
         */
        chat_id?: string;
        /**
         * Название файла с расширением.
         */
        name?: string;
      }
      export interface ChatChatSendFileResponse {
        /**
         * Результат обработки запроса.
         */
        result?: string;
      }
      /**
       * ChatSendMessage
       */
      export interface ChatChatSendMessageRequest {
        /**
         * Идентификатор чата.
         */
        chat_id?: string;
        /**
         * Текст сообщения в формате plain text.
         */
        text?: string;
      }
      export interface ChatChatSendMessageResponse {
        /**
         * Результат обработки запроса.
         */
        result?: string;
      }
      /**
       * ChatStart
       */
      export interface ChatChatStartRequest {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
      }
      export interface ChatChatStartResponse {
        result?: /* Результат работы метода. */ ChatStartResponseResult;
      }
      /**
       * ChatUpdates
       */
      export interface ChatChatUpdatesRequest {
        /**
         * Идентификатор чата.
         */
        chat_id?: string;
        /**
         * Идентификатор сообщения.
         */
        from_message_id?: string; // uint64
        /**
         * Количество сообщений в ответе.
         */
        limit?: number; // int64
      }
      export interface ChatChatUpdatesResponse {
        /**
         * Результат работы метода.
         */
        result?: ChatMessage[];
      }
      /**
       * Информация об участнике чата.
       */
      export interface ChatExternalUser {
        /**
         * Идентификатор участника чата.
         */
        id?: string;
        /**
         * Тип участника чата:
         *   - `customer` — покупатель,
         *   - `seller` — продавец,
         *   - `crm` — системные сообщения,
         *   - `courier` — курьер.
         *
         */
        type?: string;
      }
      /**
       * Информация о файле в чате. Отображается только для сообщений с параметром `type = file`.
       */
      export interface ChatFile {
        /**
         * Тип файла.
         */
        mime?: string;
        /**
         * Название файла.
         */
        name?: string;
        /**
         * Размер файла в байтах.
         */
        size?: number; // int64
        /**
         * URL файла.
         */
        url?: string;
      }
      export interface ChatHistory {
        /**
         * Идентификатор чата.
         */
        chat_id: string;
        /**
         * Направление сортировки сообщений:
         * - `Forward` — от старых к новым.
         * - `Backward` — от новых к старым.
         *
         * Значение по умолчанию — `Backward`. Количество сообщений можно установить в параметре `limit`.
         *
         */
        direction?: string;
        /**
         * Идентификатор сообщения, с которого начать вывод истории чата. По умолчанию — последнее видимое сообщение.
         */
        from_message_id?: number; // uint64
        /**
         * Количество сообщений в ответе. По умолчанию — 50.
         */
        limit?: number; // int64
      }
      /**
       * Данные чата.
       */
      export interface ChatInfo {
        /**
         * Идентификатор чата.
         */
        chat_id?: string;
        /**
         * Статус чата:
         * - `All` — все чаты.
         * - `Opened` — открытые чаты.
         * - `Closed` — закрытые чаты.
         *
         */
        chat_status?: string;
        /**
         * Тип чата:
         * - `Seller_Support` — чат с поддержкой.
         * - `Buyer_Seller` — чат с покупателем.
         *
         */
        chat_type?: string;
        /**
         * Дата создания чата.
         */
        created_at?: string; // date-time
        /**
         * Идентификатор первого непрочитанного сообщения в чате.
         */
        first_unread_message_id?: number; // uint64
        /**
         * Идентификатор последнего сообщения в чате.
         */
        last_message_id?: number; // uint64
        /**
         * Количество непрочитанных сообщений в чате.
         */
        unread_count?: number; // int64
      }
      export interface ChatList {
        filter?: /* Фильтр по чатам. */ ChatListRequestFilter;
        /**
         * Количество значений в ответе. Значение по умолчанию — `30`.
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset=10`, ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
      }
      /**
       * Фильтр по чатам.
       */
      export interface ChatListRequestFilter {
        /**
         * Фильтр по статусу чата:
         * - `All` — все чаты.
         * - `Opened` — открытые чаты.
         * - `Closed` — закрытые чаты.
         *
         * Значение по умолчанию: `All`.
         *
         */
        chat_status?: string;
        /**
         * Фильтр по чатам с непрочитанными сообщениями.
         */
        unread_only?: boolean;
      }
      /**
       * Дополнительные поля, которые нужно добавить в ответ.
       */
      export interface ChatListRequestWith {
        /**
         * Атрибут выдачи параметра `first_unread_message_id` в ответе. Если `true`, в ответе вы получите идентификатор первого непрочитанного сообщения в чате.
         *
         */
        first_unread_message_id?: boolean;
        /**
         * Атрибут выдачи параметра `unread_count` в ответе. Если `true`, в ответе вы получите количество непрочитанных сообщений в чате.
         *
         */
        unread_count?: boolean;
      }
      export interface ChatMessage {
        context?: /* Заказ или отдельный товар, о котором пользователь написал в чат. */ MessageContext;
        /**
         * Дата и время создания.
         */
        created_at?: string; // date-time
        file?: /* Информация о файле в чате. Отображается только для сообщений с параметром `type = file`. */ ChatFile;
        /**
         * Идентификатор файла.
         */
        id?: string; // uint64
        /**
         * Сообщение, только для `type = text`.
         */
        text?: string;
        /**
         * Тип сообщения:
         *   - `text` — текст,
         *   - `file` — файл.
         *
         */
        type?: string;
        user?: /* Информация об участнике чата. */ ChatExternalUser;
      }
      export interface ChatRead {
        /**
         * Идентификатор чата.
         */
        chat_id: string;
        /**
         * Идентификатор сообщения.
         */
        from_message_id: number; // uint64
      }
      /**
       * Результат работы метода.
       */
      export interface ChatStartResponseResult {
        /**
         * Идентификатор чата.
         */
        chat_id?: string;
      }
      /**
       * Ценовые индексы товара.
       *
       * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
       *
       */
      export interface CommonPriceIndexes {
        external_index_data?: /* Цена товара у конкурентов на других площадках. */ PriceIndexesIndexDataExternal;
        ozon_index_data?: /* Цена товара у конкурентов на Ozon. */ PriceIndexesIndexDataOzon;
        /**
         * Итоговый ценовой индекс товара:
         * - `WITHOUT_INDEX` — без индекса,
         * - `PROFIT` — выгодный,
         * - `AVG_PROFIT` — умеренный,
         * - `NON_PROFIT` — невыгодный.
         *
         */
        price_index?: "WITHOUT_INDEX" | "PROFIT" | "AVG_PROFIT" | "NON_PROFIT";
        self_marketplaces_index_data?: /* Цена вашего товара на других площадках. */ PriceIndexesIndexDataSelf;
      }
      export interface CommonReturnsCompanyItemFbo {
        /**
         * Время приёма возврата от поĸупателя.
         */
        accepted_from_customer_moment?: string; // date-time
        /**
         * Идентификатор продавца.
         */
        company_id?: number; // int64
        /**
         * Текущее местонахождение возврата.
         */
        current_place_name?: string;
        /**
         * Место назначения возврата.
         */
        dst_place_name?: string;
        /**
         * Идентификатор возврата.
         */
        id?: number; // int64
        /**
         * Признак вскрытия упаковки. `true`, если упаковка вскрыта.
         */
        is_opened?: boolean;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Причина возврата.
         */
        return_reason_name?: string;
        /**
         * Время доставки возврата на склад Ozon.
         */
        returned_to_ozon_moment?: string; // date-time
        /**
         * Идентификатор товара на Ozon.
         */
        sku?: number; // int64
        /**
         * Статус возврата:
         * - `Возврат отменен`,
         * - `Принят от покупателя`,
         * - `Получен в Ozon`.
         *
         */
        status_name?: string;
      }
      export interface CommonReturnsCompanyItemFbs {
        /**
         * Время приёма возврата от покупателя.
         */
        accepted_from_customer_moment?: string;
        /**
         * Штрихкод изначального отправления.
         */
        clearing_id?: number; // int64
        /**
         * Комиссия.
         */
        commission?: number; // double
        /**
         * Процент комиссии.
         */
        commission_percent?: number; // double
        /**
         * Идентификатор экземпляра в логистической системе Ozon.
         */
        exemplar_id?: number; // int64
        /**
         * Идентификатор возврата в учётной системе Ozon.
         */
        id?: number; // int64
        /**
         * Если товар в пути — `true`.
         */
        is_moving?: boolean;
        /**
         * Признак вскрытия упаковки. `true`, если упаковка вскрыта.
         */
        is_opened?: boolean;
        /**
         * Последний день бесплатного хранения.
         */
        last_free_waiting_day?: string;
        /**
         * Идентификатор склада, в который везут товар.
         */
        place_id?: number; // int64
        /**
         * Название склада, в который везут товар.
         */
        moving_to_place_name?: string;
        /**
         * Стоимость доставки.
         */
        picking_amount?: number; // double
        /**
         * Номер отправления.
         */
        posting_number?: string;
        picking_tag?: string;
        /**
         * Текущая цена товара без скидки.
         */
        price?: number; // double
        /**
         * Стоимость товара без учёта комиссии.
         */
        price_without_commission?: number; // double
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Наименование товара.
         */
        product_name?: string;
        /**
         * Количество товара.
         */
        quantity?: number; // int64
        /**
         * Штрихкод на этикетке возвратного отправления. Используйте значение этого параметра для работы с этикеткой возвратов.
         */
        return_barcode?: string;
        /**
         * Идентификатор грузоместа в логистической системе Ozon.
         */
        return_clearing_id?: number; // int64
        /**
         * Дата возврата товара.
         */
        return_date?: string;
        /**
         * Причина возврата.
         */
        return_reason_name?: string;
        /**
         * Дата готовности выдачи товара продавцу.
         */
        waiting_for_seller_date_time?: string;
        /**
         * Дата выдачи товара продавцу.
         */
        returned_to_seller_date_time?: string;
        /**
         * Срок хранения возврата в днях.
         */
        waiting_for_seller_days?: number; // int64
        /**
         * Стоимость хранения возврата.
         */
        returns_keeping_cost?: number; // double
        /**
         * Идентификатор товара на Ozon.
         */
        sku?: number; // int64
        /**
         * Статус возврата.
         */
        status?: string;
      }
      /**
       * Время приёма возврата от поĸупателя.
       */
      export interface CommonTimeRangeCustomerMoment {
        /**
         * Начало периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        time_from?: string; // date-time
        /**
         * Окончание периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        time_to?: string; // date-time
      }
      /**
       * Последний день бесплатного хранения.
       */
      export interface CommonTimeRangeLastDay {
        /**
         * Дата и время начала последнего дня хранения.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        time_from?: string; // date-time
        /**
         * Дата и время окончания последнего дня хранения.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        time_to?: string; // date-time
      }
      /**
       * Причина отмены.
       */
      export interface ConditionalCancellationCancellationReason {
        /**
         * Идентификатор причины отмены.
         */
        id?: number; // int64
        /**
         * Название причины отмены.
         */
        name?: string;
      }
      /**
       * Статус заявки на отмену.
       */
      export interface ConditionalCancellationState {
        /**
         * Идентификатор статуса.
         */
        id?: number; // int64
        /**
         * Название статуса.
         */
        name?: string;
        /**
         * Статус заявки:
         * - `ON_APPROVAL` — ожидает решения.
         * - `APPROVED` — подтверждённая.
         * - `REJECTED` — отклонённая.
         *
         */
        state?: "ON_APPROVAL" | "APPROVED" | "REJECTED";
      }
      /**
       * Информация о товаре.
       */
      export interface ContextItem {
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
      }
      /**
       * Информация о заказе.
       */
      export interface ContextOrder {
        /**
         * Номер заказа.
         */
        order_number?: string;
        /**
         * Информация об отправлении.
         */
        postings?: OrderPosting[];
      }
      /**
       * Фильтр по типу транзакции:
       *   - `ALL` — все,
       *   - `ORDERS` — заказы,
       *   - `RETURNS` — возвраты,
       *   - `SERVICES` — сервисные сборы,
       *   - `DEPOSIT` — депозит,
       *   - `OTHER` — другие.
       *
       */
      export type CreateCompanyTransactionsReportRequestTransactionType =
        string;
      /**
       * Результаты запроса.
       */
      export interface CreateReportResponseCode {
        /**
         * Уникальный идентификатор отчёта.
         */
        code?: string;
      }
      export interface DeleteProductsRequestProduct {
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
      }
      export interface DeleteProductsResponseDeleteStatus {
        /**
         * Причина ошибки, которая возникла при обработке запроса.
         */
        error?: string;
        /**
         * Если запрос выполнен без ошибок и товары удалены — `true`.
         */
        is_deleted?: boolean;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
      }
      /**
       * Фильтр для поиска методов доставки.
       */
      export interface DeliveryMethodListRequestFilter {
        /**
         * Идентификатор службы доставки.
         */
        provider_id?: number; // int64
        /**
         * Статус метода доставки:
         *   - `NEW` — создан,
         *   - `EDITED` — редактируется,
         *   - `ACTIVE` — активный,
         *   - `DISABLED` — неактивный.
         *
         */
        status?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      export interface DeliveryMethodListResponseDeliveryMethod {
        /**
         * Идентификатор продавца.
         */
        company_id?: number; // int64
        /**
         * Дата и время создания метода доставки.
         */
        created_at?: string; // date-time
        /**
         * Время до которого продавцу нужно собрать заказ.
         */
        cutoff?: string;
        /**
         * Идентификатор метода доставки.
         */
        id?: number; // int64
        /**
         * Название метода доставки.
         */
        name?: string;
        /**
         * Идентификатор службы доставки.
         */
        provider_id?: number; // int64
        /**
         * Статус метода доставки:
         *   - `NEW` — создан,
         *   - `EDITED` — редактируется,
         *   - `ACTIVE` — активный,
         *   - `DISABLED` — неактивный.
         *
         */
        status?: string;
        /**
         * Идентификатор услуги по доставке заказа.
         */
        template_id?: number; // int64
        /**
         * Дата и время последнего обновления метода метода доставки.
         */
        updated_at?: string; // date-time
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      /**
       * Заказы.
       */
      export interface DetailsDeliveryDetails {
        /**
         * Общая сумма.
         */
        total?: number; // double
        /**
         * Сумма, на которую выкуплено товаров с учётом комиссий.
         */
        amount?: number; // double
        /**
         * Плата за обработку и доставку.
         */
        delivery_services?: /* Плата за обработку и доставку. */ DetailsServices;
      }
      /**
       * Компенсация и прочие начисления.
       */
      export interface DetailsOthers {
        /**
         * Общая сумма.
         */
        total?: number; // double
        /**
         * Детализация.
         */
        items?: /* Детализация. */ FinanceCashFlowStatementListResponseDetailsOthers;
      }
      /**
       * Выплачено за период.
       */
      export interface DetailsPayment {
        /**
         * Валюта.
         */
        currency_code?: string;
        /**
         * Сумма выплаты.
         */
        payment?: number; // double
      }
      /**
       * Возвраты и отмены.
       */
      export interface DetailsReturnDetails {
        /**
         * Общая сумма.
         */
        total?: number; // double
        /**
         * Сумма, на которую получено возвратов с учётом комиссий.
         */
        amount?: number; // double
        /**
         * Плата за возвраты и отмены.
         */
        return_services?: /* Плата за возвраты и отмены. */ DetailsReturns;
      }
      /**
       * Плата за возвраты и отмены.
       */
      export interface DetailsReturns {
        /**
         * Общая сумма.
         */
        total?: number; // double
        /**
         * Детализация.
         */
        items?: /* Детализация. */ FinanceCashFlowStatementListResponseReturnService;
      }
      /**
       * Перечисления по схеме rFBS.
       */
      export interface DetailsRfbsDetails {
        /**
         * Общая сумма.
         */
        total?: number; // double
        /**
         * Перечисления от покупателей.
         */
        transfer_delivery?: number; // double
        /**
         * Возврат перечислений покупателям.
         */
        transfer_delivery_return?: number; // double
        /**
         * Компенсация перечислений за доставку.
         */
        compensation_delivery_return?: number; // double
        /**
         * Перечисления частичных компенсаций покупателям.
         */
        partial_compensation?: number; // double
        /**
         * Возврат частичных компенсаций.
         */
        partial_compensation_return?: number; // double
      }
      /**
       * Услуги.
       */
      export interface DetailsService {
        /**
         * Общая сумма.
         */
        total?: number; // double
        /**
         * Детализация.
         */
        items?: /* Детализация. */ FinanceCashFlowStatementListResponseService;
      }
      /**
       * Плата за обработку и доставку.
       */
      export interface DetailsServices {
        /**
         * Общая сумма.
         */
        total?: number; // double
        /**
         * Детализация.
         */
        items?: /* Детализация. */ FinanceCashFlowStatementListResponseDeliveryService;
      }
      /**
       * Данные аналитики.
       */
      export interface FboPostingFboPostingAnalyticsData {
        /**
         * Город доставки.
         */
        city?: string;
        /**
         * Способ доставки.
         */
        delivery_type?: string;
        /**
         * Получатель юридическое лицо:
         *   - `true` — юридическое лицо,
         *   - `false` — физическое лицо.
         *
         */
        is_legal?: boolean;
        /**
         * Наличие подписки Premium.
         */
        is_premium?: boolean;
        /**
         * Способ оплаты.
         */
        payment_type_group_name?: string;
        /**
         * Регион доставки.
         */
        region?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
        /**
         * Название склада отправки заказа.
         */
        warehouse_name?: string;
      }
      /**
       * Штрихкоды отправления.
       */
      export interface FbsPostingBarcodes {
        /**
         * Нижний штрихкод на маркировке отправления.
         */
        lower_barcode?: string;
        /**
         * Верхний штрихкод на маркировке отправления.
         */
        upper_barcode?: string;
      }
      /**
       * Данные о курьере.
       */
      export interface FbsPostingDetailCourier {
        /**
         * Модель автомобиля.
         */
        car_model?: string;
        /**
         * Номер автомобиля.
         */
        car_number?: string;
        /**
         * Полное имя курьера.
         */
        name?: string;
        /**
         * Телефон курьера.
         */
        phone?: string;
      }
      /**
       * Информация об услуге погрузочно-разгрузочных работ. Актуально для КГТ-отправлений с доставкой силами продавца или интегрированной службой.
       */
      export interface FbsPostingDetailPrrOption {
        /**
         * Код услуги погрузочно-разгрузочных работ:
         * - `lift` — подъём на лифте.
         * - `stairs` — подъём по лестнице.
         * - `none` — покупатель отказался от услуги, поднимать товары не нужно.
         * - `delivery_default` — доставка включена в стоимость, по условиям оферты нужно доставить товар на этаж.
         *
         */
        code?: string;
        /**
         * Стоимость услуги, которую Ozon компенсирует продавцу.
         */
        price?: string;
        /**
         * Валюта.
         */
        currency_code?: string;
        /**
         * Этаж, на который нужно поднять товар.
         */
        floor?: string;
      }
      /**
       * Аналитические данные.
       */
      export interface FbsPostingFbsPostingAnalyticsData {
        /**
         * Город доставки.
         */
        city?: string;
        /**
         * Способ доставки.
         */
        delivery_type?: string;
        /**
         * Признак, что получатель юридическое лицо:
         *   - `true` — юридическое лицо,
         *   - `false` — физическое лицо.
         *
         */
        is_legal?: boolean;
        /**
         * Наличие подписки Premium.
         */
        is_premium?: boolean;
        /**
         * Способ оплаты.
         */
        payment_type_group_name?: string;
        /**
         * Регион доставки.
         */
        region?: string;
      }
      export interface FbsPostingMoveStatusResponseMoveStatus {
        /**
         * Ошибка при обработке запроса.
         */
        error?: string;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Если запрос выполнен без ошибок — `true`.
         */
        result?: boolean;
      }
      /**
       * Результат работы метода.
       */
      export interface FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResult {
        /**
         * Список товаров.
         */
        products?: any;
      }
      export interface FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResultProduct {
        /**
         * Код ошибки.
         */
        error?: string;
        /**
         * Информация об экземплярах.
         */
        exemplars?: any;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Результат прохождения проверки. `true`, если коды всех экземпляров соответствуют требованиям.
         */
        valid?: boolean;
      }
      export interface FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResultProductExemplar {
        /**
         * Ошибки валидации экземпляра.
         */
        errors?: any;
        /**
         * Номер грузовой таможенной декларации (ГТД).
         */
        gtd?: string;
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: string;
        /**
         * Уникальный идентификационный номер (УИН) ювелирного изделия.
         */
        jw_uin?: string[];
        /**
         * Результат прохождения проверки. `true`, если код экземпляра соответствует требованиям.
         */
        valid?: boolean;
        /**
         * Регистрационный номер партии товара (РНПТ).
         */
        rnpt?: string;
      }
      export interface FbsPostingShipRequestPackage {
        /**
         * Список товаров в отправлении.
         */
        products?: V3FbsPackageProduct[];
      }
      /**
       * Параметр для выдачи дополнительных полей в ответе.
       */
      export interface FbsPostingShipRequestWith {
        /**
         * Выдать дополнительные поля в ответе. Передайте `true`, чтобы получить дополнительную информацию об отправлении.
         */
        additional_data?: boolean;
      }
      export interface FbsPostingShipV3ResponseShipAdditionalData {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров в отправлении.
         */
        products?: any;
      }
      export interface FbsPostingShipV4RequestPackage {
        /**
         * Список товаров в отправлении.
         */
        products?: FbsPostingShipV4RequestPackageProduct[];
      }
      export interface FbsPostingShipV4RequestPackageProduct {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Количество экземпляров.
         */
        quantity?: number; // int32
      }
      /**
       * Дополнительная информация.
       */
      export interface FbsPostingShipV4RequestWith {
        /**
         * Чтобы получить дополнительную информацию, передайте `true`.
         */
        additional_data?: boolean;
      }
      export interface FbsPostingShipV4ResponseShipAdditionalData {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров в отправлении.
         */
        products?: any;
      }
      export interface FbsPostingTrackingNumberSetRequestTrackingNumber {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
        /**
         * Трек-номер отправления.
         */
        tracking_number?: string;
      }
      export interface Fbsv3PostingProductDetailWithoutDimensions {
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: any;
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена.
         */
        price?: string;
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int32
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
      }
      export interface Fbsv4FbsPostingShipV4Request {
        /**
         * Список упаковок. Каждая упаковка содержит список отправлений, на которые делится заказ.
         */
        packages?: any;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        with?: /* Дополнительная информация. */ FbsPostingShipV4RequestWith;
      }
      export interface Fbsv4FbsPostingShipV4Response {
        /**
         * Дополнительная информация об отправлениях.
         */
        additional_data?: any;
        /**
         * Результат сборки отправлений.
         */
        result?: any;
      }
      export interface Fbsv4GetProductExemplarStatusRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
      }
      export interface Fbsv4GetProductExemplarStatusResponse {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров.
         */
        products?: any;
        /**
         * Статус проверки всех экземпляров и доступности сборки:
         * - `ship_available` — сборка доступна,
         * - `ship_not_available` — сборка недоступна,
         * - `validation_in_process` — экземпляры на проверке.
         *
         */
        status?: string;
      }
      export interface Fbsv4GetProductExemplarStatusResponseProduct {
        /**
         * Информация об экземплярах.
         */
        exemplars?: any;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface Fbsv4GetProductExemplarStatusResponseProductExemplar {
        /**
         * Номер грузовой таможенной декларации (ГТД).
         */
        gtd?: string;
        /**
         * Статус проверки грузовой таможенной декларации.
         */
        gtd_check_status?: string;
        /**
         * Коды ошибок при проверке грузовой таможенной декларации.
         */
        gtd_error_codes?: any;
        /**
         * Признак того, что не указан номер таможенной декларации.
         */
        is_gtd_absent?: boolean;
        /**
         * Уникальный идентификационный номер (УИН) ювелирного изделия.
         */
        jw_uin?: string[];
        /**
         * Статус проверки уникального идентификационного номера (УИН) ювелирного изделия.
         */
        jw_uin_check_status?: string;
        /**
         * Коды ошибок при проверке уникального идентификационного номера (УИН) ювелирного изделия.
         */
        jw_uin_error_codes?: string[];
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: string;
        /**
         * Статус проверки маркировки «Честный ЗНАК»:
         * - `processing` — маркировка обрабатывается.
         * - `passed` — проверка пройдена.
         * - `failed` — проверка не пройдена.
         *
         */
        mandatory_mark_check_status?: string;
        /**
         * Коды ошибок при проверке маркировки «Честный ЗНАК».
         */
        mandatory_mark_error_codes?: any;
        /**
         * Регистрационный номер партии товара (РНПТ).
         */
        rnpt?: string;
        /**
         * Статус проверки регистрационного номера партии товара.
         */
        rnpt_check_status?: string;
        /**
         * Коды ошибок при проверке регистрационного номера партии товара.
         */
        rnpt_error_codes?: any;
        /**
         * Признак того, что не указан регистрационный номер партии товара (РНПТ).
         */
        is_rnpt_absent?: boolean;
      }
      export interface Fbsv4PostingProductDetailWithoutDimensions {
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: any;
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена.
         */
        price?: string;
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int32
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
      }
      export interface Fbsv4SetProductExemplarRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров.
         */
        products?: any;
      }
      export interface Fbsv4SetProductExemplarRequestProduct {
        /**
         * Информация об экземплярах.
         */
        exemplars?: any;
        /**
         * Идентификатор FBS товара в системе Ozon — SKU.
         */
        product_id?: number; // int64
      }
      export interface Fbsv4SetProductExemplarRequestProductExemplar {
        /**
         * Номер грузовой таможенной декларации (ГТД).
         */
        gtd?: string;
        /**
         * Признак того, что не указан номер таможенной декларации.
         */
        is_gtd_absent?: boolean;
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: string;
        /**
         * Уникальный идентификационный номер (УИН) ювелирного изделия.
         */
        jw_uin?: string[];
        /**
         * Регистрационный номер партии товара (РНПТ).
         */
        rnpt?: string;
        /**
         * Признак того, что не указан регистрационный номер партии товара (РНПТ).
         */
        is_rnpt_absent?: boolean;
      }
      export interface Fbsv4SetProductExemplarResponse {
        /**
         * Результат обработки запроса. `true`, если запрос обработан успешно.
         */
        result?: boolean;
      }
      /**
       * <br>
       *
       * Операция сравнения:
       *   - `EQ` — равно,
       *   - `GT` — больше,
       *   - `GTE` — больше или равно,
       *   - `LT` — меньше,
       *   - `LTE` — меньше или равно.
       *
       */
      export type FilterOp = string;
      /**
       * Фильтр по дате.
       */
      export interface FilterPeriod {
        /**
         * Начало периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        from?: string; // date-time
        /**
         * Конец периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        to?: string; // date-time
      }
      export interface FilterTimeRange {
        /**
         * Начало периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        time_from?: string; // date-time
        /**
         * Окончание периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        time_to?: string; // date-time
      }
      export interface FinanceCashFlowStatementListResponseCashFlow {
        period?: /* Период. */ V3FinanceCashFlowStatementListResponsePeriod;
        /**
         * Сумма цен реализованных товаров.
         */
        orders_amount?: number; // double
        /**
         * Сумма цен возвращённых товаров.
         */
        returns_amount?: number; // double
        /**
         * Комиссия Ozon за реализацию товаров.
         */
        commission_amount?: number; // double
        /**
         * Сумма дополнительных услуг.
         */
        services_amount?: number; // double
        /**
         * Сумма услуг логистики.
         */
        item_delivery_and_return_amount?: number; // double
        /**
         * Код валюты, в которой рассчитываются комиссии.
         */
        currency_code?: string;
      }
      /**
       * Детализация.
       */
      export interface FinanceCashFlowStatementListResponseDeliveryService {
        /**
         * Название операции. Возможные значения:
         *  - `MarketplaceServiceItemDirectFlowLogisticSum` — логистика,
         *  - `MarketplaceServiceItemDropoff` — обработка отправления Drop-off,
         *  - `MarketplaceServiceItemDelivToCustomer` — последняя миля.
         *
         */
        name?: string;
        /**
         * Сумма по операции.
         */
        price?: number; // double
      }
      /**
       * Детализированная информация.
       */
      export interface FinanceCashFlowStatementListResponseDetails {
        /**
         * Баланс на начало периода.
         */
        begin_balance_amount?: number; // double
        /**
         * Результат работы метода.
         */
        delivery?: /* Заказы. */ DetailsDeliveryDetails;
        /**
         * Сумма к выплате за период.
         */
        invoice_transfer?: number; // double
        /**
         * Перевод по договорам займа.
         */
        loan?: number; // double
        /**
         * Выплачено в периоде.
         */
        payments?: /* Выплачено за период. */ DetailsPayment;
        /**
         * Период.
         */
        period?: /* Период. */ V3FinanceCashFlowStatementListResponsePeriod;
        return?: /* Возвраты и отмены. */ DetailsReturnDetails;
        /**
         * Перечисления по схеме rFBS.
         */
        rfbs?: /* Перечисления по схеме rFBS. */ DetailsRfbsDetails;
        /**
         * Услуги.
         */
        services?: /* Услуги. */ DetailsService;
        /**
         * Компенсация и прочие начисления.
         */
        others?: /* Компенсация и прочие начисления. */ DetailsOthers;
        /**
         * Баланс на конец периода.
         */
        end_balance_amount?: number; // double
      }
      /**
       * Детализация.
       */
      export interface FinanceCashFlowStatementListResponseDetailsOthers {
        /**
         * Название операции. Возможные значения:
         *  - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга,
         *  - `MarketplaceSellerCompensationLossOfGoodsOperation` — компенсация за уничтоженный товар,
         *  - `MarketplaceSellerCorrectionOperation` — корректировка стоимости услуг,
         *  - `OperationCorrectionSeller` — инвентаризация взаиморасчётов,
         *  - `OperationMarketplaceWithHoldingForUndeliverableGoods` — компенсация за недовложение товаров,
         *  - `OperationClaim` — начисления по претензиям.
         *
         */
        name?: string;
        /**
         * Сумма по операции.
         */
        price?: number; // double
      }
      /**
       * Детализация.
       */
      export interface FinanceCashFlowStatementListResponseReturnService {
        /**
         * Название операции. Возможные значения:
         *  - `MarketplaceServiceItemReturnAfterDelivToCustomer` — обработка возвратов,
         *  - `MarketplaceServiceItemReturnPartGoodsCustomer` — обработка частичного невыкупа,
         *  - `MarketplaceServiceItemReturnNotDelivToCustomer` — обработка отменённых и невостребованных товаров,
         *  - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика.
         *
         */
        name?: string;
        /**
         * Сумма по операции.
         */
        price?: number; // double
      }
      /**
       * Детализация.
       */
      export interface FinanceCashFlowStatementListResponseService {
        /**
         * Название операции. Возможные значения:
         *  - `MarketplaceServiceItemOtherMarketAndTechService` — иные маркетинговые и технические услуги,
         *  - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS,
         *  - `MarketplaceSaleReviewsItem` — приобретение отзывов на платформе,
         *  - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»,
         *  - `MarketplaceServiceStorageItem` — услуга размещения товаров,
         *  - `MarketplaceServiceStockDisposal` — утилизация со стока,
         *  - `MarketplaceReturnDisposalServiceFbsItem` — утилизация FBS,
         *  - `MarketplaceServiceItemFlexiblePaymentSchedule` — услуга «Гибкий график выплат»,
         *  - `MarketplaceServiceProcessingSpoilage` — обработка брака,
         *  - `MarketplaceServiceProcessingIdentifiedSurplus` — обработка опознанных излишков,
         *  - `MarketplaceServiceProcessingIdentifiedDiscrepancies` — бронирование места для размещения на складе,
         *  - `MarketplaceServiceItemInternetSiteAdvertising` — реклама на сайте Ozon,
         *  - `MarketplaceServiceItemPremiumSubscribtion` — премиум-подписка,
         *  - `MarketplaceAgencyFeeAggregator3PLGlobalItem` — агентское вознаграждение Ozon.
         *
         */
        name?: string;
        /**
         * Сумма по операции.
         */
        price?: number; // double
      }
      export interface FinanceGetRealizationReportRequest {
        /**
         * Отчётный период в формате `YYYY-MM`.
         */
        date?: string;
      }
      export interface FinanceGetRealizationReportResponse {
        /**
         * Результат запроса.
         */
        result?: any;
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
      export interface FinanceRealizationReportResult {
        /**
         * Титульный лист отчёта.
         */
        header?: FinanceRealizationReportHeader[];
        /**
         * Таблица отчёта.
         */
        rows?: FinanceRealizationReportRows[];
      }
      export interface FinanceRealizationReportRows {
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
       * Фильтр.
       */
      export interface FinanceTransactionListV3RequestFilter {
        date?: /* Фильтр по дате. */ FilterPeriod;
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
        operation_type?: string[];
        /**
         * Номер отправления.
         */
        posting_number?: string;
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
        transaction_type?: string;
      }
      export interface FinanceTransactionListV3ResponseOperation {
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
       * Фильтр по дате.
       */
      export interface FinanceTransactionTotalsV3RequestDate {
        /**
         * Начало периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        from?: string; // date-time
        /**
         * Конец периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
         * Пример: `2019-11-25T10:43:06.51`.
         *
         */
        to?: string; // date-time
      }
      export interface Financev3FinanceTransactionListV3Request {
        filter?: /* Фильтр. */ FinanceTransactionListV3RequestFilter;
        /**
         * Номер страницы, возвращаемой в запросе.
         */
        page?: number; // int64
        /**
         * Количество элементов на странице.
         */
        page_size?: number; // int64
      }
      export interface Financev3FinanceTransactionListV3Response {
        result?: /* Результаты запроса. */ Financev3FinanceTransactionListV3ResponseResult;
      }
      /**
       * Результаты запроса.
       */
      export interface Financev3FinanceTransactionListV3ResponseResult {
        /**
         * Информация об операциях.
         */
        operations?: FinanceTransactionListV3ResponseOperation[];
        /**
         * Количество страниц.
         */
        page_count?: number; // int64
        /**
         * Количество товаров.
         */
        row_count?: number; // int64
      }
      export interface Financev3FinanceTransactionTotalsV3Request {
        date?: /* Фильтр по дате. */ FinanceTransactionTotalsV3RequestDate;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Тип операции:
         *  - `all` — все,
         *  - `orders` — заказы,
         *  - `returns` — возвраты и отмены,
         *  - `services` — сервисные сборы,
         *  - `compensation` — компенсация,
         *  - `transferDelivery` — стоимость доставки,
         *  - `other` — прочее.
         *
         */
        transaction_type?: string;
      }
      export interface Financev3FinanceTransactionTotalsV3Response {
        result?: /* Результаты запроса. */ Financev3FinanceTransactionTotalsV3ResponseResult;
      }
      /**
       * Результаты запроса.
       */
      export interface Financev3FinanceTransactionTotalsV3ResponseResult {
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
      /**
       * Период формирования отчёта.
       */
      export interface Financev3Period {
        /**
         * Дата, с ĸоторой рассчитывается отчёт.
         */
        from: string; // date-time
        /**
         * Дата, по ĸоторую рассчитывается отчёт.
         */
        to: string; // date-time
      }
      export interface GetCarriageAvailableListResponseResult {
        /**
         * Идентификатор перевозки (также номер задания на формирование документов).
         */
        carriage_id?: number; // int64
        /**
         * Количество отправлений в перевозке.
         */
        carriage_postings_count?: number; // int32
        /**
         * Статус перевозки для запрашиваемого метода доставки и даты отгрузки.
         */
        carriage_status?: string;
        /**
         * Дата и время, до которых нужно собрать отправление.
         */
        cutoff_at?: string; // date-time
        /**
         * Идентификатор метода доставки.
         */
        delivery_method_id?: number; // int64
        /**
         * Название метода доставки.
         */
        delivery_method_name?: string;
        /**
         * Список ошибок.
         */
        errors?: any;
        /**
         * Тип первой мили.
         */
        first_mile_type?: string;
        /**
         * Признак доверительной приёмки. `true`, если доверительная приёмка включена на складе.
         */
        has_entrusted_acceptance?: boolean;
        /**
         * Количество отправлений, которые нужно собрать.
         */
        mandatory_postings_count?: number; // int32
        /**
         * Количество собранных отправлений.
         */
        mandatory_packaged_count?: number; // int32
        /**
         * Ссылка на иконку службы доставки.
         */
        tpl_provider_icon_url?: string;
        /**
         * Название службы доставки.
         */
        tpl_provider_name?: string;
        /**
         * Город склада.
         */
        warehouse_city?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
        /**
         * Название склада.
         */
        warehouse_name?: string;
        /**
         * Часовой пояс, в котором находится склад.
         */
        warehouse_timezone?: string;
      }
      export interface GetCategoryTreeResponseItem {
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
        /**
         * Дерево подкатегорий.
         */
        children?: GetCategoryTreeResponseItem[];
        /**
         * Название категории.
         */
        title?: string;
      }
      export interface GetCompetitorsResponseCompetitorInfo {
        /**
         * Название конкурента.
         */
        name?: string;
        /**
         * Идентификатор конкурента.
         */
        id?: number; // int64
      }
      /**
       * Фильтры.
       */
      export interface GetConditionalCancellationListRequestFilters {
        /**
         * Фильтр по инициатору отмены:
         * - `OZON` — Ozon,
         * - `SELLER` — продавец,
         * - `CLIENT` — покупатель,
         * - `SYSTEM` — система,
         * - `DELIVERY` — служба доставки.
         *
         * Необязательный параметр. Можно передавать несколько значений.
         *
         */
        cancellation_initiator?: any;
        /**
         * Фильтр по номеру отправления.
         *
         * Необязательный параметр. Можно передавать несколько значений.
         *
         */
        posting_number?: string;
        /**
         * Фильтр по статусу заявки на отмену:
         * - `ALL` — заявки в любом статусе,
         * - `ON_APPROVAL` — заявки на рассмотрении,
         * - `APPROVED` — подтверждённые заявки,
         * - `REJECTED` — отклонённые заявки.
         *
         */
        state?: "ALL" | "ON_APPROVAL" | "APPROVED" | "REJECTED";
      }
      /**
       * Дополнительная информация.
       */
      export interface GetConditionalCancellationListRequestWith {
        /**
         * Признак, что в ответе нужно вывести счётчик заявок в разных статусах.
         */
        counters?: boolean;
      }
      /**
       * Cчётчик заявок в разных статусах.
       */
      export interface GetConditionalCancellationListResponseCounters {
        /**
         * Количество заявок на рассмотрении.
         */
        on_approval?: number; // int64
        /**
         * Количество подтверждённых заявок.
         */
        approved?: number; // int64
        /**
         * Количество отклонённых заявок.
         */
        rejected?: number; // int64
      }
      /**
       * Фильтр по периоду создания деклараций.
       */
      export interface GetEtgbRequestDate {
        /**
         * Дата начала.
         */
        from?: string; // date-time
        /**
         * Дата окончания.
         */
        to?: string; // date-time
      }
      export interface GetEtgbResponseResult {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        etgb?: /* Информация о декларации. */ GetEtgbResponseResultEtgb;
      }
      /**
       * Информация о декларации.
       */
      export interface GetEtgbResponseResultEtgb {
        /**
         * Номер.
         */
        number?: string;
        /**
         * Дата создания.
         */
        date?: string;
        /**
         * Ссылка на файл.
         *
         * Если поле пустое и вам нужен файл, обратитесь в поддержку Ozon.
         *
         */
        url?: string;
      }
      /**
       * Список геоограничений.
       */
      export interface GetGeoRestrictionsByFilterResponseGeoRestriction {
        /**
         * Идентификатор геоограничения.
         */
        id?: string;
        /**
         * Видимость элемента.
         */
        is_visible?: boolean;
        /**
         * Название города.
         */
        name?: string;
        /**
         * Порядковый номер геоограничения.
         *
         * Если на вход в параметре `last_order_number` указать `23`, то у первого элемента списка `restrictions` будет `order_number = 24`.
         *
         */
        order_number?: number; // int64
      }
      export interface GetHotSalesListResponseHotSale {
        /**
         * Дата окончания акции.
         */
        date_end?: string;
        /**
         * Дата начала акции.
         */
        date_start?: string;
        /**
         * Описание акции.
         */
        description?: string;
        /**
         * Дата приостановки акции.
         *
         * Если поле заполнено, продавец не может повышать цены, изменять список товаров и уменьшать количество единиц товаров в акции.
         *
         * Продавец может понижать цены и увеличивать количество единиц товара в акции.
         *
         */
        freeze_date?: string;
        /**
         * Идентификатор акции Hot Sale.
         */
        hotsale_id?: number; // double
        /**
         * Признак, что вы участвуете в этой акции.
         */
        is_participating?: boolean;
        /**
         * Название акции.
         */
        title?: string;
      }
      export interface GetImportProductsInfoResponseResultItem {
        /**
         * Идентификатор товара в системе продавца — артикул.
         *
         * Максимальная длина строки в значении поля — 50 символов.
         *
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Статус создания товара. Информация о товаре обрабатывается очередями.
         * Возможные значения параметра:
         * - `pending` — товар в очереди на обработку;
         * - `imported` — товар успешно загружен;
         * - `failed` — товар загружен с ошибками.
         *
         */
        status?: string;
        /**
         * Массив ошибок.
         */
        errors?: V1ItemError[];
      }
      export interface GetProductAttributesResponseImage {
        default?: boolean;
        file_name?: string;
        index?: number; // int64
      }
      export interface GetProductAttributesResponseImage360 {
        file_name?: string;
        index?: number; // int64
      }
      export interface GetProductAttributesResponsePdf {
        /**
         * Путь к PDF-файлу.
         */
        file_name?: string;
        /**
         * Индекс документа в хранилище, который задаёт порядок.
         */
        index?: number; // int64
        /**
         * Название файла.
         */
        name?: string;
      }
      export interface GetProductAttributesV3ResponseAttribute {
        /**
         * Идентификатор характеристики.
         */
        attribute_id?: number; // int64
        /**
         * Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель» и «L2 Cache». У каждой из вложенных характеристик может быть несколько вариантов значений.
         */
        complex_id?: number; // int64
        /**
         * Массив значений характеристик.
         */
        values?: GetProductAttributesV3ResponseDictionaryValue[];
      }
      export interface GetProductAttributesV3ResponseDictionaryValue {
        /**
         * Идентификатор характеристики в словаре.
         */
        dictionaryValueId?: number; // int64
        /**
         * Значение характеристики товара.
         */
        value?: string;
      }
      /**
       * Суточные лимиты.
       */
      export interface GetProductInfoLimitResponseDailyQuota {
        /**
         * Общий суточный лимит на создание и обновление товаров.
         */
        all_quota_value?: number; // int64
        /**
         * Сколько осталось от общего суточного лимита на создание и обновление товаров до конца суток.
         */
        all_remaining_value?: number; // int64
        /**
         * Суточный лимит на создание товаров.
         */
        create_quota_value?: number; // int64
        /**
         * Сколько осталось от суточного лимита на создание товаров до конца суток.
         */
        create_remaining_value?: number; // int64
        /**
         * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
         */
        reset_at?: string; // date-time
      }
      /**
       * Лимиты на ассортимент.
       */
      export interface GetProductInfoLimitResponseTotalQuota {
        /**
         * Сколько всего товаров можно создать. Если значение `-1`, ограничений нет.
         */
        item_quota_value?: number; // int64
        /**
         * Сколько ещё товаров можно создать. Если значение `-1`, ограничений нет.
         */
        remaining_value?: number; // int64
      }
      export interface GetProductInfoListResponseReason {
        /**
         * Описание причины.
         */
        description?: string;
        /**
         * Идентификатор причины.
         */
        id?: number; // int64
      }
      export interface GetProductInfoListResponseReasons {
        /**
         * Причины скрытия товара.
         */
        reasons?: GetProductInfoListResponseReason[];
      }
      /**
       * Остатки.
       */
      export interface GetProductInfoStocksV3ResponseStock {
        /**
         * Сейчас на складе.
         */
        present?: number; // int32
        /**
         * Зарезервировано.
         */
        reserved?: number; // int32
        /**
         * Тип склада.
         */
        type?: string;
      }
      export interface GetProductRatingBySkuResponseProductRating {
        /**
         * Идентификатор товара на Ozon.
         */
        sku?: number; // int64
        /**
         * Контент-рейтинг товара: от 0 до 100.
         *
         */
        rating?: number; // float
        /**
         * Группы характеристик, из которых складывается контент-рейтинг.
         */
        groups?: any;
      }
      export interface GetProductRatingBySkuResponseRatingCondition {
        /**
         * Количество баллов контент-рейтинга, которое даёт выполнение условия.
         */
        cost?: number; // float
        /**
         * Описание условия.
         */
        description?: string;
        /**
         * Признак, что условие выполнено.
         */
        fulfilled?: boolean;
        /**
         * Идентификатор условия.
         */
        key?: string;
      }
      export interface GetProductRatingBySkuResponseRatingGroup {
        /**
         * Список условий, увеличивающих контент-рейтинг товара.
         */
        conditions?: any;
        /**
         * Количество атрибутов, которые нужно заполнить для получения максимального балла в этой группе характеристик.
         */
        improve_at_least?: number;
        /**
         * Cписок атрибутов, заполнение которых может увеличить контент-рейтинг товара.
         */
        improve_attributes?: any;
        /**
         * Идентификатор группы.
         */
        key?: string;
        /**
         * Название группы.
         */
        name?: string;
        /**
         * Рейтинг в группе.
         */
        rating?: number; // float
        /**
         * Процент влияния характеристик группы на контент-рейтинг.
         */
        weight?: number; // float
      }
      export interface GetProductRatingBySkuResponseRatingImproveAttribute {
        /**
         * Идентификатор атрибута.
         */
        id?: number; // int64
        /**
         * Название атрибута.
         */
        name?: string;
      }
      /**
       * Результат работы метода.
       */
      export interface GetReturnsCompanyFBSResponseResult {
        /**
         * Счётчик элементов в ответе.
         */
        count?: number; // int64
        /**
         * Информация о возврате.
         */
        returns?: ResultGetReturnsCompanyFBSItem[];
      }
      /**
       * Информация о возврате.
       */
      export interface GetReturnsCompanyFboResponseGetReturnsCompanyItemFbo {
        /**
         * Время приёма возврата от покупателя.
         */
        accepted_from_customer_moment?: string; // date-time
        /**
         * Идентификатор продавца.
         */
        company_id?: number; // int64
        /**
         * Текущее местонахождение возврата.
         */
        current_place_name?: string;
        /**
         * Место назначения возврата.
         */
        dst_place_name?: string;
        /**
         * Идентификатор возврата.
         */
        id?: number; // int64
        /**
         * Признак вскрытия упаковки. `true`, если упаковка вскрыта.
         */
        is_opened?: boolean;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Причина возврата.
         */
        return_reason_name?: string;
        /**
         * Время доставки возврата на склад Ozon.
         */
        returned_to_ozon_moment?: string; // date-time
        /**
         * Идентификатор товара на Ozon.
         */
        sku?: number; // int64
        /**
         * Статус возврата.
         */
        status_name?: string;
      }
      export interface GetSellerActionsV1ResponseAction {
        /**
         * Идентификатор акции.
         */
        id?: number; // double
        /**
         * Название акции.
         */
        title?: string;
        /**
         * Тип акции.
         */
        action_type?: string;
        /**
         * Описание акции.
         */
        description?: string;
        /**
         * Дата начала акции.
         */
        date_start?: string;
        /**
         * Дата окончания акции.
         */
        date_end?: string;
        /**
         * Дата приостановки акции.
         *
         * Если поле заполнено, продавец не может повышать цены, изменять список товаров и уменьшать количество единиц товаров в акции.
         *
         * Продавец может понижать цены и увеличивать количество единиц товара в акции.
         *
         */
        freeze_date?: string;
        /**
         * Количество товаров, доступных для акции.
         */
        potential_products_count?: number; // double
        /**
         * Количество товаров, которые участвуют в акции.
         */
        participating_products_count?: number; // double
        /**
         * Участвуете вы в этой акции или нет.
         */
        is_participating?: boolean;
        /**
         * Признак, что для участия в акции покупателям нужен промокод.
         */
        is_voucher_action?: boolean;
        /**
         * Количество заблокированных товаров.
         */
        banned_products_count?: number; // double
        /**
         * Признак, что акция с целевой аудиторией.
         */
        with_targeting?: boolean;
        /**
         * Сумма заказа.
         */
        order_amount?: number; // double
        /**
         * Тип скидки.
         */
        discount_type?: string;
        /**
         * Размер скидки.
         */
        discount_value?: number; // double
      }
      export interface GetStrategyIDsByItemIDsResponseProductInfo {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Идентификатор стратегии, в которую добавлен товар.
         */
        strategy_id?: string;
      }
      export interface GetStrategyListResponseStrategy {
        /**
         * Идентификатор стратегии.
         */
        id?: string;
        /**
         * Название стратегии.
         */
        name?: string;
        /**
         * Тип стратегии:
         * - `MIN_EXT_PRICE` — системная,
         * - `COMP_PRICE` — пользовательская.
         *
         */
        type?: string;
        /**
         * Тип последнего изменения стратегии:
         * - `strategyEnabled` — возобновлена,
         * - `strategyDisabled` — остановлена,
         * - `strategyChanged` — обновлена,
         * - `strategyCreated` — создана,
         * - `strategyItemsListChanged` — изменён набор товаров в стратегии.
         *
         */
        update_type?: string;
        /**
         * Дата последнего изменения.
         */
        updated_at?: string;
        /**
         * Количество товаров в стратегии.
         */
        products_count?: number; // int64
        /**
         * Количество выбранных конкурентов.
         */
        competitors_count?: number; // int64
        /**
         * Статус стратегии:
         * - `true` — включена,
         * - `false` — отключена.
         *
         */
        enabled?: boolean;
      }
      export interface GetSupplyOrderItemsResponseItem {
        /**
         * Ссылка на изображение товара.
         */
        icon_path?: string;
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Артикул товара.
         */
        offer_id?: string;
        /**
         * Количество товара.
         */
        quantity?: number; // int64
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
      }
      export interface GetSupplyOrdersListResponseSupplyOrder {
        /**
         * Дата создания заявки на поставку.
         */
        created_at?: string;
        local_timeslot?: /* Интервал поставки по местному времени. */ V1Timeslot;
        /**
         * Дата, с которой вы хотите привезти поставку на склад. Только для заявок с вРЦ.
         */
        preferred_supply_date_from?: string;
        /**
         * Дата, до которой вы хотите привезти поставку на склад. Только для заявок с вРЦ.
         */
        preferred_supply_date_to?: string;
        /**
         * Статус поставки по заявке:
         * - `DRAFT` — черновик заявки. Только для заявок с вРЦ.
         * - `SUPPLY_VARIANTS_ARRANGING` — подбор вариантов отгрузки. Только для заявок с вРЦ.
         * - `HAS_NO_SUPPLY_VARIANTS_ARCHIVE` — нет вариантов отгрузки. Заявка в архиве.
         * - `HAS_NO_SUPPLY_VARIANTS_NEW` — нет вариантов отгрузки.
         * - `SUPPLY_VARIANT_CONFIRMATION` — согласование отгрузки. Только для заявок с вРЦ.
         * - `TIMESLOT_BOOKING` — бронирование времени.
         * - `DATA_FILLING` — заполнение данных.
         * - `READY_TO_SUPPLY` — готова к отгрузке.
         * - `ACCEPTED_AT_SUPPLY_WAREHOUSE` — принята на точке отгрузки.
         * - `IN_TRANSIT` — в пути.
         * - `ACCEPTANCE_AT_STORAGE_WAREHOUSE` — приёмка на складе.
         * - `REPORTS_CONFIRMATION_AWAITING` — согласование актов.
         * - `REPORT_REJECTED` — спор.
         * - `COMPLETED` — завершена.
         * - `REJECTED_AT_SUPPLY_WAREHOUSE` — отказано в приёмке.
         * - `CANCELLED` — отменена.
         * - `OVERDUE` — просрочена.
         *
         */
        state?: string;
        /**
         * Идентификатор заявки на поставку.
         */
        supply_order_id?: number; // int64
        /**
         * Номер заявки.
         */
        supply_order_number?: string;
        supply_warehouse?: /* Склад поставки. */ V1Warehouse;
        /**
         * Время в секундах, оставшееся на заполнение данных по поставке. Только для заявок с вРЦ.
         */
        time_left_to_prepare_supply?: number; // int64
        /**
         * Время в секундах, оставшееся на выбор варианта отгрузки. Только для заявок с вРЦ.
         */
        time_left_to_select_supply_variant?: number; // int64
        /**
         * Общее количество товаров в заявке.
         */
        total_items_count?: number; // int32
        /**
         * Общее количество единиц товара в заявке.
         */
        total_quantity?: number; // int32
      }
      /**
       * Суточный лимит на создание товаров.
       */
      export interface GetUploadQuotaResponseDailyCreate {
        /**
         * Сколько всего товаров можно создать в сутки.
         */
        limit?: number; // int64
        /**
         * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
         */
        reset_at?: string; // date-time
        /**
         * Сколько товаров создано за текущие сутки.
         */
        usage?: number; // int64
      }
      /**
       * Суточный лимит на обновление товаров.
       */
      export interface GetUploadQuotaResponseDailyUpdate {
        /**
         * Сколько всего товаров можно обновить в сутки.
         */
        limit?: number; // int64
        /**
         * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
         */
        reset_at?: string; // date-time
        /**
         * Сколько товаров обновлено за текущие сутки.
         */
        usage?: number; // int64
      }
      /**
       * Лимит на ассортимент.
       */
      export interface GetUploadQuotaResponseTotal {
        /**
         * Сколько всего товаров можно создать в личном кабинете.
         */
        limit?: number; // int64
        /**
         * Сколько товаров уже создано.
         */
        usage?: number; // int64
      }
      export interface GooglerpcStatus {
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
      export interface ImportProductsRequestPdfList {
        /**
         * Индекс документа в хранилище, который задаёт порядок.
         */
        index?: number; // int64
        /**
         * Название файла.
         */
        name?: string;
        /**
         * Адрес файла.
         */
        src_url?: string;
      }
      /**
       * Результат работы метода.
       */
      export interface InvoiceGetResponseResult {
        /**
         * Ссылка на счёт-фактуру.
         */
        file_url?: string;
      }
      /**
       * Информация о комиссиях.
       */
      export interface ItemCommissions {
        /**
         * Последняя миля (FBO).
         */
        fbo_deliv_to_customer_amount?: number; // double
        /**
         * Магистраль до (FBO).
         */
        fbo_direct_flow_trans_max_amount?: number; // double
        /**
         * Магистраль от (FBO).
         */
        fbo_direct_flow_trans_min_amount?: number; // double
        /**
         * Комиссия за сборку заказа (FBO).
         */
        fbo_fulfillment_amount?: number; // double
        /**
         * Комиссия за возврат и отмену (FBO).
         */
        fbo_return_flow_amount?: number; // double
        /**
         * Комиссия за обратную логистику от (FBO).
         */
        fbo_return_flow_trans_min_amount?: number; // double
        /**
         * Комиссия за обратную логистику до (FBO).
         */
        fbo_return_flow_trans_max_amount?: number; // double
        /**
         * Последняя миля (FBS).
         */
        fbs_deliv_to_customer_amount?: number; // double
        /**
         * Магистраль до (FBS).
         */
        fbs_direct_flow_trans_max_amount?: number; // double
        /**
         * Магистраль от (FBS).
         */
        fbs_direct_flow_trans_min_amount?: number; // double
        /**
         * Минимальная комиссия за обработку отправления (FBS) — 0 рублей.
         *
         * [Подробнее о тарифах в Базе знаний продавца](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/rashody-na-dop-uslugi#выезд-транспортного-средства-по-адресу-продавца-для-забора-отправлении-(pick-up))
         *
         */
        fbs_first_mile_min_amount?: number; // double
        /**
         * Максимальная комиссия за обработку отправления (FBS) — 25 рублей.
         *
         * [Подробнее о тарифах в Базе знаний продавца](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/rashody-na-dop-uslugi#выезд-транспортного-средства-по-адресу-продавца-для-забора-отправлении-(pick-up))
         *
         */
        fbs_first_mile_max_amount?: number; // double
        /**
         * Комиссия за возврат и отмену, обработка отправления (FBS).
         */
        fbs_return_flow_amount?: number; // double
        /**
         * Комиссия за возврат и отмену, магистраль до (FBS).
         */
        fbs_return_flow_trans_max_amount?: number; // double
        /**
         * Комиссия за возврат и отмену, магистраль от (FBS).
         */
        fbs_return_flow_trans_min_amount?: number; // double
        /**
         * Процент комиссии за продажу (FBO).
         */
        sales_percent_fbo?: number; // double
        /**
         * Процент комиссии за продажу (FBS).
         */
        sales_percent_fbs?: number; // double
        /**
         * Наибольший процент комиссии за продажу среди FBO и FBS.
         */
        sales_percent?: number; // double
      }
      export interface ItemMarketingActions {
        /**
         * Маркетинговые акции продавца. Параметры `date_from`, `date_to`, `discount_value` и `title` указываются для каждой акции продавца.
         */
        actions?: MarketingActionsMarketingAction[];
        /**
         * Дата и время начала текущего периода по всем действующим акциям.
         */
        current_period_from?: string; // date-time
        /**
         * Дата и время окончания текущего периода по всем действующим акциям.
         */
        current_period_to?: string; // date-time
        /**
         * Если к товару может быть применена акция за счёт Ozon — `true`.
         */
        ozon_actions_exist?: boolean;
      }
      /**
       * Цена товара.
       */
      export interface ItemPrice {
        /**
         * Если автоприменение акций у товара включено — `true`.
         */
        auto_action_enabled?: boolean;
        /**
         * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Цена на товар с учетом всех акций. Это значение будет указано на витрине Ozon.
         */
        marketing_price?: string;
        /**
         * Цена на товар с учетом акций продавца.
         */
        marketing_seller_price?: string;
        /**
         * Минимальная цена на аналогичный товар на Ozon.
         */
        min_ozon_price?: string;
        /**
         * Минимальная цена товара после применения всех скидок.
         */
        min_price?: string;
        /**
         * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
         */
        old_price?: string;
        /**
         * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
         */
        premium_price?: string;
        /**
         * Цена товара с учётом скидок — это значение показывается на карточке товара.
         */
        price?: string;
        /**
         * Цена на товар, рекомендованная системой на основании схожих предложений.
         */
        recommended_price?: string;
        /**
         * Цена поставщика.
         */
        retail_price?: string;
        /**
         * Ставка НДС для товара.
         */
        vat?: string;
      }
      export interface MarketingActionsMarketingAction {
        /**
         * Дата и время начала акции продавца.
         */
        date_from?: string; // date-time
        /**
         * Дата и время окончания акции продавца.
         */
        date_to?: string; // date-time
        /**
         * Скидка по акции продавца.
         */
        discount_value?: string;
        /**
         * Название акции продавца.
         */
        title?: string;
      }
      /**
       * Заказ или отдельный товар, о котором пользователь написал в чат.
       */
      export interface MessageContext {
        item?: /* Информация о товаре. */ ContextItem;
        order?: /* Информация о заказе. */ ContextOrder;
      }
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
      export interface OrderPosting {
        /**
         * Схема доставки:
         *   - `FBO`,
         *   - `FBS`,
         *   - `RFBS`,
         *   - `Crossborder`.
         *
         */
        delivery_schema?: string;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список идентификаторов товаров в отправлении.
         */
        sku_list?: number /* int64 */[];
      }
      export interface PolygonBindRequestpolygon {
        /**
         * Идентификатор полигона.
         */
        polygon_id?: number; // int64
        /**
         * Время в минутах, за которое доставят товар в этом полигоне.
         */
        time?: number; // int64
      }
      /**
       * Расположение склада.
       */
      export interface PolygonBindRequestwhLocation {
        /**
         * Географическая широта расположения склада.
         */
        lat?: string;
        /**
         * Географическая долгота расположения склада.
         */
        lon?: string;
      }
      export interface Polygonv1Empty {}
      export interface Polygonv1PolygonBindRequest {
        /**
         * Идентификатор метода доставки.
         */
        delivery_method_id?: number; // int32
        /**
         * Список полигонов.
         */
        polygons?: PolygonBindRequestpolygon[];
        warehouse_location?: /* Расположение склада. */ PolygonBindRequestwhLocation;
      }
      export interface Polygonv1PolygonCreateRequest {
        /**
         * Координаты полигона доставки в формате `[[[lat long]]]`.
         *
         */
        coordinates?: string;
      }
      export interface Polygonv1PolygonCreateResponse {
        /**
         * Идентификатор полигона.
         */
        polygon_id?: number; // int64
      }
      export interface Polygonv1PolygonDeleteRequest {
        /**
         * Список идентификаторов полигонов.
         */
        polygon_ids?: string /* int64 */[];
      }
      export interface PostingBooleanResponse {
        /**
         * Результат обработки запроса. `true`, если запрос выполнился без ошибок.
         */
        result?: boolean;
      }
      export interface PostingCancelFbsPostingRequest {
        /**
         * Идентификатор причины отмены отправления.
         */
        cancel_reason_id?: number; // int64
        /**
         * Дополнительная информация по отмене. Если `cancel_reason_id = 402`, параметр обязательный.
         */
        cancel_reason_message?: string;
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
      }
      export interface PostingCancelReason {
        /**
         * Идентификатор причины отмены:
         *
         * - `352` — товар закончился на складе продавца.
         * - `400` — остался только бракованный товар.
         * - `401` — продавец отклонил арбитраж.
         * - `402` — другое (вина продавца).
         * - `665` — покупатель не забрал заказ.
         * - `666` — возврат из службы доставки: нет доставки в указанный регион.
         * - `667` — заказ утерян службой доставки.
         *
         */
        id?: number; // int64
        /**
         * Результат отмены отправления. `true`, если запрос доступен для отмены.
         */
        is_available_for_cancellation?: boolean;
        /**
         * Название категории.
         */
        title?: string;
        /**
         * Инициатор отмены отправления:
         * - `buyer` — покупатель,
         * - `seller` — продавец.
         *
         */
        type_id?: string;
      }
      export interface PostingCancelReasonListResponse {
        /**
         * Результат работы метода.
         */
        result?: PostingCancelReason[];
      }
      export interface PostingCancelReasonRequest {
        /**
         * Номера отправлений.
         */
        related_posting_numbers?: string[];
      }
      export interface PostingCancelReasonResponse {
        /**
         * Результат запроса.
         */
        result?: RelatedPostingCancelReason[];
      }
      /**
       * Результат работы метода.
       */
      export interface PostingFBSActCheckStatusResponseStatus {
        /**
         * Тип акта приёма передачи и транспортной накладной.
         *
         * Если значение `ozon_digital`, используйте методы [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus)
         *     и [/v2/posting/fbs/digital/act/get-pdf](#operation/PostingAPI_PostingFBSGetDigitalAct) для получения электронных акта приёма-передачи и транспортной накладной.
         *
         */
        act_type?: string;
        /**
         * Массив c номерами отправлений, которые добавлены в акт приёма-передачи. Эти отправления нужно передать сегодня.
         */
        added_to_act?: string[];
        /**
         * Массив с номерами отправлений, которые не попали в акт приёма-передачи. Такие отправления нужно передавать со следующей отгрузкой.
         */
        removed_from_act?: string[];
        /**
         * Статус запроса:
         *  - `in_process` — документы формируются, нужно подождать.
         *  - `ready` — документы сформированы и готовы для скачивания.
         *  - `error` — произошла ошибка при формировании документов, запросите документы повторно.
         *  - `cancelled` — создание документов отменено, запросите их повторно.
         *  - `The next postings aren't ready` — произошла ошибка, отправления не включены в отгрузку. Подождите некоторое время и проверьте результат запроса. Если ошибка повторяется, обратитесь в службу поддержки.
         *
         */
        status?: string;
        /**
         * Признак частичной перевозки. `true`, если перевозка частичная.
         *
         * Частичная перевозка значит, что отгрузка была разделена на несколько частей и по каждой из частей формируются отдельные акты.
         *
         */
        is_partial?: boolean;
        /**
         * Признак наличия подлежащих отгрузке отправлений, которые не попали в текущую перевозку. `true`, если такие отправления есть.
         *
         * Если такие отправления есть, создайте новый акт через метод [/v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate) и проверьте его статус. Создавайте акты, пока в этом поле не вернётся `false`.
         *
         */
        has_postings_for_next_carriage?: boolean;
        /**
         * Порядковый номер частичной перевозки.
         */
        partial_num?: number; // int64
      }
      /**
       * Результат работы метода.
       */
      export interface PostingFBSActCreateResponseAct {
        /**
         * Номер задания на формирование документов.
         */
        id?: number; // int64
      }
      /**
       * Дополнительные поля, которые нужно добавить в ответ.
       */
      export interface PostingFboPostingWithParams {
        /**
         * Передайте `true`, чтобы добавить в ответ данные аналитики.
         */
        analytics_data?: boolean;
        /**
         * Передайте `true`, чтобы добавить в ответ финансовые данные.
         */
        financial_data?: boolean;
      }
      export interface PostingFbsPostingDeliveredRequest {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string[];
      }
      export interface PostingFbsPostingDeliveringRequest {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string[];
      }
      export interface PostingFbsPostingLastMileRequest {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string[];
      }
      export interface PostingFbsPostingMoveStatusResponse {
        /**
         * Результат работы метода.
         */
        result?: FbsPostingMoveStatusResponseMoveStatus[];
      }
      export interface PostingFbsPostingSentbysellerRequest {
        /**
         * Список идентификаторов отправлений.
         */
        posting_number?: string[];
      }
      export interface PostingFbsPostingSentbysellerResponse {
        /**
         * Результат работы метода.
         */
        result?: PostingFbsPostingSentbysellerResponseItem[];
      }
      export interface PostingFbsPostingSentbysellerResponseItem {
        /**
         * Ошибка.
         */
        error?: string;
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
        result?: boolean;
      }
      export interface PostingFbsPostingTrackingNumberSetRequest {
        /**
         * Массив с парами идентификатор отправления — трек-номер.
         */
        tracking_numbers?: FbsPostingTrackingNumberSetRequestTrackingNumber[];
      }
      export interface PostingFinancialDataProduct {
        /**
         * Действия.
         */
        actions?: string[];
        /**
         * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Цена для клиента.
         */
        client_price?: string;
        /**
         * Размер комиссии за товар.
         */
        commission_amount?: number; // double
        /**
         * Процент комиссии.
         */
        commission_percent?: number; // int64
        /**
         * Код валюты, в которой рассчитывались комиссии.
         */
        commissions_currency_code?: string;
        item_services?: /* Услуги. */ PostingFinancialDataServices;
        /**
         * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
         */
        old_price?: number; // double
        /**
         * Выплата продавцу.
         */
        payout?: number; // double
        picking?: /**
         * Информация о доставке.
         *
         * Всегда возвращает `null`.
         *
         */
        ProductPicking;
        /**
         * Цена товара с учётом скидок — это значение показывается на карточке товара.
         */
        price?: number; // double
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int64
        /**
         * Процент скидки.
         */
        total_discount_percent?: number; // double
        /**
         * Сумма скидки.
         */
        total_discount_value?: number; // double
      }
      /**
       * Услуги.
       */
      export interface PostingFinancialDataServices {
        /**
         * Последняя миля.
         */
        marketplace_service_item_deliv_to_customer?: number; // double
        /**
         * Магистраль.
         */
        marketplace_service_item_direct_flow_trans?: number; // double
        /**
         * Обработка отправления на фулфилмент складе (ФФ).
         */
        marketplace_service_item_dropoff_ff?: number; // double
        /**
         * Обработка отправления в ПВЗ.
         */
        marketplace_service_item_dropoff_pvz?: number; // double
        /**
         * Обработка отправления в сортировочном центре.
         */
        marketplace_service_item_dropoff_sc?: number; // double
        /**
         * Сборка заказа.
         */
        marketplace_service_item_fulfillment?: number; // double
        /**
         * Выезд транспортного средства по адресу продавца для забора отправлений (Pick-up).
         */
        marketplace_service_item_pickup?: number; // double
        /**
         * Обработка возврата.
         */
        marketplace_service_item_return_after_deliv_to_customer?: number; // double
        /**
         * Обратная магистраль.
         */
        marketplace_service_item_return_flow_trans?: number; // double
        /**
         * Обработка отмен.
         */
        marketplace_service_item_return_not_deliv_to_customer?: number; // double
        /**
         * Обработка невыкупа.
         */
        marketplace_service_item_return_part_goods_customer?: number; // double
      }
      export interface PostingGetFboPostingListRequest {
        /**
         * Направление сортировки:
         *   - `asc` — по возрастанию,
         *   - `desc` — по убыванию.
         *
         */
        dir?: string;
        filter?: /* Фильтр для поиска отправлений. */ PostingGetFboPostingListRequestFilter;
        /**
         * Количество значений в ответе:
         *   - максимум — 1000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
        /**
         * Если включена транслитерация адреса из кириллицы в латиницу — `true`.
         */
        translit?: boolean;
        with?: /* Дополнительные поля, которые нужно добавить в ответ. */ PostingFboPostingWithParams;
      }
      /**
       * Фильтр для поиска отправлений.
       */
      export interface PostingGetFboPostingListRequestFilter {
        /**
         * Начало периода в формате YYYY-MM-DD.
         */
        since?: string; // date-time
        /**
         * Статус отправления.
         * - `awaiting_packaging` — ожидает упаковки,
         * - `awaiting_deliver` — ожидает отгрузки,
         * - `delivering` — доставляется,
         * - `delivered` — доставлено,
         * - `cancelled` — отменено.
         *
         */
        status?: string;
        /**
         * Конец периода в формате YYYY-MM-DD.
         */
        to?: string; // date-time
      }
      export interface PostingGetFboPostingRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Если включена транслитерация адреса из кириллицы в латиницу — `true`.
         */
        translit?: boolean;
        with?: /* Дополнительные поля, которые нужно добавить в ответ. */ PostingFboPostingWithParams;
      }
      export interface PostingGetFbsPostingByBarcodeRequest {
        /**
         * Штрихкод отправления.
         */
        barcode?: string;
      }
      export interface PostingMovePostingRequest {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string[];
      }
      export interface PostingPostingFBSActCheckStatusRequest {
        /**
         * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
         */
        id?: number; // int64
      }
      export interface PostingPostingFBSActCheckStatusResponse {
        result?: /* Результат работы метода. */ PostingFBSActCheckStatusResponseStatus;
      }
      export interface PostingPostingFBSActCreateRequest {
        /**
         * Количество грузовых мест.
         *
         * Используйте параметр, если вы подключены к доверительной приёмке и отгружаете заказы грузовыми местами. Если вы не подключены к доверительной приёмке, пропустите его.
         *
         * [Подробнее в Базе знаний продавца](https://docs.ozon.ru/partners/prodayoa-so-svoego-sklada-fbs/doveritel-naya-priemka-gruzovogo-mesta)
         *
         */
        containers_count?: number; // int32
        /**
         * Идентификатор метода доставки.
         */
        delivery_method_id?: number; // int64
        /**
         * Дата отгрузки.
         *
         * Чтобы печать была доступна до дня отгрузки, в личном кабинете в настройках метода включите **Печать актов приёма-передачи заранее**.
         * Время на сборку отправлений — SLA на сборку — должно быть больше 13 часов. [Подробнее о печати акта приёма-передачи заранее](https://seller-edu.ozon.ru/docs/fbs/logistics-settings/pechat-aktov-zaranee.html).
         *
         * **Примеры**
         *
         * - Отгрузка на следующий день: сборка заканчивается завтра в 13:00. Если время на сборку — 15 часов, то отгрузка сформируется в 13:00 - 15 часов + 1 минута = 22:01 текущего дня. С этого времени можно печатать акт приёма-передачи.
         *
         * - Отгрузка после выходных: склад не работает в субботу и воскресенье. Сборка заканчивается в понедельник, 13:00. Если время на сборку — 15 часов, то отгрузка сформируется в 13:00 - 15 часов + 1 минута = 22:01 пятницы. С этого времени можно печатать акт приёма-передачи.<br>
         *
         * - Время на сборку отправлений менее 13 часов: сборка заканчивается завтра в 13:00. Если время на сборку — 10 часов, то отгрузка сформируется в 13:00 - 10 часов + 1 минута = 03:01 следующего дня. Отправления, полученные до 03:00, нужно передать в тот же день. Раньше 03:01 напечатать акт не получится, только в день отгрузки.
         *
         */
        departure_date?: string; // date-time
      }
      export interface PostingPostingFBSActCreateResponse {
        result?: /* Результат работы метода. */ PostingFBSActCreateResponseAct;
      }
      export interface PostingPostingFBSActGetContainerLabelsRequest {
        /**
         * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
         */
        id?: number; // int64
      }
      export interface PostingPostingFBSActGetContainerLabelsResponse {
        /**
         * Содержание файла в бинарном виде.
         */
        file_content?: string; // byte
        /**
         * Название файла.
         */
        file_name?: string;
        /**
         * Тип файла.
         */
        content_type?: string;
      }
      export interface PostingPostingFBSGetActRequest {
        /**
         * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
         */
        id?: number; // int64
      }
      export interface PostingPostingFBSGetActResponse {
        /**
         * Содержание файла в бинарном виде.
         */
        file_content?: string; // byte
        /**
         * Название файла.
         */
        file_name?: string;
        /**
         * Тип файла.
         */
        content_type?: string;
      }
      export interface PostingPostingFBSPackageLabelRequest {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string[];
      }
      export interface PostingPostingFBSPackageLabelResponse {
        /**
         * Содержание файла в бинарном виде.
         */
        file_content?: string; // byte
        /**
         * Название файла.
         */
        file_name?: string;
        /**
         * Тип файла.
         */
        content_type?: string;
      }
      export interface PostingPostingProductCancelRequest {
        /**
         * Идентификатор причины отмены отправления товара.
         */
        cancel_reason_id?: number; // int64
        /**
         * Обязательное поле. Дополнительная информация по отмене.
         */
        cancel_reason_message?: string;
        /**
         * Информация о товарах.
         */
        items?: PostingProductCancelRequestItem[];
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
      }
      export interface PostingPostingProductCancelResponse {
        /**
         * Номер отправления.
         */
        result?: string;
      }
      export interface PostingPostingProductChangeRequest {
        /**
         * Информация о товарах.
         */
        items?: PostingProductChangeRequestItem[];
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
      }
      export interface PostingPostingProductChangeResponse {
        /**
         * Идентификатор отправления.
         */
        result?: string;
      }
      export interface PostingProductCancelRequestItem {
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int32
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
      }
      export interface PostingProductChangeRequestItem {
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Вес единиц товара в отправлении.
         */
        weightReal?: number /* double */[];
      }
      export interface Postingv1GetCarriageAvailableListRequest {
        /**
         * Фильтр по методу доставки.
         */
        delivery_method_id?: number; // int64
        /**
         * Дата отгрузки. По умолчанию — текущая дата.
         */
        departure_date?: string; // date-time
      }
      export interface Postingv1GetCarriageAvailableListResponse {
        /**
         * Результат работы метода.
         */
        result?: any;
      }
      /**
       * Дополнительные поля, которые нужно добавить в ответ.
       */
      export interface Postingv3FbsPostingWithParams {
        /**
         * Добавить в ответ данные аналитики.
         */
        analytics_data?: boolean;
        /**
         * Добавить в ответ штрихкоды отправления.
         */
        barcodes?: boolean;
        /**
         * Добавить в ответ финансовые данные.
         */
        financial_data?: boolean;
        /**
         * Выполнить транслитерацию возвращаемых значений.
         */
        translit?: boolean;
      }
      /**
       * Дополнительные поля, которые нужно добавить в ответ.
       */
      export interface Postingv3FbsPostingWithParamsExamplars {
        /**
         * Добавить в ответ данные аналитики.
         */
        analytics_data?: boolean;
        /**
         * Добавить в ответ штрихкоды отправления.
         */
        barcodes?: boolean;
        /**
         * Добавить в ответ финансовые данные.
         */
        financial_data?: boolean;
        /**
         * Добавить в ответ данные о продуктах и их экземплярах.
         */
        product_exemplars?: boolean;
        /**
         * Добавить в ответ номера связанных отправлений. Связанные отправления — те, на которое было разделено родительское отправление при сборке.
         *
         */
        related_postings?: boolean;
        /**
         * Выполнить транслитерацию возвращаемых значений.
         */
        translit?: boolean;
      }
      export interface Postingv3GetFbsPostingListRequest {
        /**
         * Направление сортировки:
         *   - `asc` — по возрастанию,
         *   - `desc` — по убыванию.
         *
         */
        dir?: string;
        filter?: /* Фильтр. */ Postingv3GetFbsPostingListRequestFilter;
        /**
         * Количество значений в ответе:
         *   - максимум — 1000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
        with?: /* Дополнительные поля, которые нужно добавить в ответ. */ Postingv3FbsPostingWithParams;
      }
      /**
       * Фильтр.
       */
      export interface Postingv3GetFbsPostingListRequestFilter {
        /**
         * Идентификатор способа доставки.
         */
        delivery_method_id?: number /* int64 */[];
        /**
         * Идентификатор заказа.
         */
        order_id?: number; // int64
        /**
         * Идентификатор службы доставки.
         */
        provider_id?: number /* int64 */[];
        /**
         * Дата начала периода, за который нужно получить список отправлений.
         *
         * Формат UTC: ГГГГ-ММ-ДДTЧЧ:ММ:ССZ.
         *
         * Пример: 2019-08-24T14:15:22Z.
         *
         */
        since?: string; // date-time
        /**
         * Дата конца периода, за который нужно получить список отправлений.
         *
         * Формат UTC: ГГГГ-ММ-ДДTЧЧ:ММ:ССZ.
         *
         * Пример: 2019-08-24T14:15:22Z.
         *
         */
        to?: string; // date-time
        /**
         * Статус отправления:
         * - `awaiting_registration` — ожидает регистрации,
         * - `acceptance_in_progress` — идёт приёмка,
         * - `awaiting_approve` — ожидает подтверждения,
         * - `awaiting_packaging` — ожидает упаковки,
         * - `awaiting_deliver` — ожидает отгрузки,
         * - `arbitration` — арбитраж,
         * - `client_arbitration` — клиентский арбитраж доставки,
         * - `delivering` — доставляется,
         * - `driver_pickup` — у водителя,
         * - `delivered` — доставлено,
         * - `cancelled` — отменено,
         * - `not_accepted` — не принят на сортировочном центре,
         * - `sent_by_seller` – отправлено продавцом.
         *
         */
        status?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number /* int64 */[];
      }
      export interface Postingv3GetFbsPostingRequest {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
        with?: /* Дополнительные поля, которые нужно добавить в ответ. */ Postingv3FbsPostingWithParamsExamplars;
      }
      export interface Postingv3GetFbsPostingUnfulfilledListRequest {
        /**
         * Направление сортировки:
         *   - `asc` — по возрастанию,
         *   - `desc` — по убыванию.
         *
         */
        dir?: string;
        filter?: /**
         * Фильтр запроса.
         *
         * Используйте фильтр либо по времени сборки — `cutoff`, либо по дате передачи отправления в доставку — `delivering_date`.
         * Если использовать их вместе, в ответе вернётся ошибка.
         *
         * Чтобы использовать фильтр по времени сборки, заполните поля `cutoff_from` и `cutoff_to`.
         *
         * Чтобы использовать фильтр по дате передачи отправления в доставку, заполните поля `delivering_date_from` и `delivering_date_to`.
         *
         */
        Postingv3GetFbsPostingUnfulfilledListRequestFilter;
        /**
         * Количество значений в ответе:
         *   - максимум — 1000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
        with?: /* Дополнительные поля, которые нужно добавить в ответ. */ Postingv3FbsPostingWithParams;
      }
      /**
       * Фильтр запроса.
       *
       * Используйте фильтр либо по времени сборки — `cutoff`, либо по дате передачи отправления в доставку — `delivering_date`.
       * Если использовать их вместе, в ответе вернётся ошибка.
       *
       * Чтобы использовать фильтр по времени сборки, заполните поля `cutoff_from` и `cutoff_to`.
       *
       * Чтобы использовать фильтр по дате передачи отправления в доставку, заполните поля `delivering_date_from` и `delivering_date_to`.
       *
       */
      export interface Postingv3GetFbsPostingUnfulfilledListRequestFilter {
        /**
         * Фильтр по времени, до которого продавцу нужно собрать заказ. Начало периода.
         *
         * Формат: YYYY-MM-DDThh:mm:ss.mcsZ.
         * Пример: 2020-03-18T07:34:50.359Z.
         *
         */
        cutoff_from?: string; // date-time
        /**
         * Фильтр по времени, до которого продавцу нужно собрать заказ. Конец периода.
         *
         * Формат: YYYY-MM-DDThh:mm:ss.mcsZ.
         * Пример: 2020-03-18T07:34:50.359Z.
         *
         */
        cutoff_to?: string; // date-time
        /**
         * Минимальная дата передачи отправления в доставку.
         */
        delivering_date_from?: string; // date-time
        /**
         * Максимальная дата передачи отправления в доставку.
         */
        delivering_date_to?: string; // date-time
        /**
         * Идентификатор способа доставки.
         */
        delivery_method_id?: number /* int64 */[];
        /**
         * Идентификатор службы доставки.
         */
        provider_id?: number /* int64 */[];
        /**
         * Статус отправления:
         * - `acceptance_in_progress` — идёт приёмка,
         * - `awaiting_approve` — ожидает подтверждения,
         * - `awaiting_packaging` — ожидает упаковки,
         * - `awaiting_registration` — ожидает регистрации,
         * - `awaiting_deliver` — ожидает отгрузки,
         * - `arbitration` — арбитраж,
         * - `client_arbitration` — клиентский арбитраж доставки,
         * - `delivering` — доставляется,
         * - `driver_pickup` — у водителя,
         * - `not_accepted` — не принят на сортировочном центре.
         *
         */
        status?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number /* int64 */[];
      }
      export interface Postingv3GetFbsPostingUnfulfilledListResponse {
        result?: /* Результат запроса. */ Postingv3GetFbsPostingUnfulfilledListResponseResult;
      }
      /**
       * Результат запроса.
       */
      export interface Postingv3GetFbsPostingUnfulfilledListResponseResult {
        /**
         * Счётчик элементов в ответе.
         */
        count?: number; // int64
        /**
         * Список отправлений и подробная информация по каждому.
         */
        postings?: V3FbsPosting[];
      }
      export interface Postingv3PostingMultiBoxQtySetV3Request {
        /**
         * Идентификатор многокоробочного отправления.
         */
        posting_number?: string;
        /**
         * Количество коробок, в которые упакован товар.
         */
        multi_box_qty?: number; // int64
      }
      export interface Postingv3PostingMultiBoxQtySetV3Response {
        result?: /* Результат передачи количества коробок. */ Postingv3PostingMultiBoxQtySetV3ResponseResult;
      }
      /**
       * Результат передачи количества коробок.
       */
      export interface Postingv3PostingMultiBoxQtySetV3ResponseResult {
        /**
         * Возможные значения:
         * - `true` — значение передано успешно.
         * - `false` — при передаче произошла ошибка. Попробуйте снова.
         *
         */
        result?: boolean;
      }
      export interface Postingv4FbsPostingProductExemplarValidateRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров.
         */
        products?: any;
      }
      export interface Postingv4FbsPostingProductExemplarValidateRequestProduct {
        /**
         * Информация об экземплярах.
         */
        exemplars?: any;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface Postingv4FbsPostingProductExemplarValidateRequestProductExemplar {
        /**
         * Номер грузовой таможенной декларации (ГТД).
         */
        gtd?: string;
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: string;
        /**
         * Уникальный идентификационный номер (УИН) ювелирного изделия.
         */
        jw_uin?: string;
        /**
         * Регистрационный номер партии товара (РНПТ).
         */
        rnpt?: string;
      }
      export interface Postingv4FbsPostingProductExemplarValidateResponse {
        result?: /* Результат работы метода. */ FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResult;
      }
      export interface PremiumScoresScore {
        /**
         * Дата, когда были начислены штрафные баллы.
         */
        date?: string; // date-time
        /**
         * Значение рейтинга, за которое были начислены штрафные баллы.
         */
        rating_value?: number; // double
        /**
         * Количество начисленных штрафных баллов.
         */
        value?: number; // int32
      }
      /**
       * Цена товара у конкурентов на других площадках.
       */
      export interface PriceIndexesIndexDataExternal {
        /**
         * Минимальная цена товара у конкурентов на другой площадке.
         */
        minimal_price?: string;
        /**
         * Валюта цены.
         */
        minimal_price_currency?: string;
        /**
         * Значение индекса цены.
         */
        price_index_value?: number; // double
      }
      /**
       * Цена товара у конкурентов на Ozon.
       */
      export interface PriceIndexesIndexDataOzon {
        /**
         * Минимальная цена товара у конкурентов на Ozon.
         */
        minimal_price?: string;
        /**
         * Валюта цены.
         */
        minimal_price_currency?: string;
        /**
         * Значение индекса цены.
         */
        price_index_value?: number; // double
      }
      /**
       * Цена вашего товара на других площадках.
       */
      export interface PriceIndexesIndexDataSelf {
        /**
         * Минимальная цена вашего товара на других площадках.
         */
        minimal_price?: string;
        /**
         * Валюта цены.
         */
        minimal_price_currency?: string;
        /**
         * Значение индекса цены.
         */
        price_index_value?: number; // double
      }
      export interface ProductBooleanResponse {
        /**
         * Результат обработки запроса. `true`, если запрос выполнен без ошибок.
         */
        result?: boolean;
      }
      export interface ProductCertificateProductsListResponseProduct {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Статус обработки товара при привязке к сертификату.
         */
        product_status_code?: string;
      }
      export interface ProductCertificateUnbindResponseItem {
        /**
         * Сообщение об ошибке при отвязывании товара.
         */
        error?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Был ли отвязан товар от сертификата:
         * - `true` — отвязан,
         * - `false` — не отвязан.
         *
         */
        updated?: boolean;
      }
      export interface ProductCertificationListResponseCertification {
        /**
         * Название сертифицируемой категории.
         */
        category_name?: string;
        /**
         * Признак обязательной характеристики.
         */
        is_required?: boolean;
      }
      /**
       * Результат запроса.
       */
      export interface ProductCertificationListResponseCertificationResult {
        /**
         * Информация о сертифицируемых категориях.
         */
        certification?: ProductCertificationListResponseCertification[];
        /**
         * Всего категорий.
         */
        total?: number; // int64
      }
      export interface ProductGetImportProductsInfoRequest {
        /**
         * Код задачи на импорт товаров.
         */
        task_id?: number; // int64
      }
      export interface ProductGetImportProductsInfoResponse {
        result?: ProductGetImportProductsInfoResponseResult;
      }
      export interface ProductGetImportProductsInfoResponseResult {
        /**
         * Информация о товарах.
         */
        items?: GetImportProductsInfoResponseResultItem[];
        /**
         * Идентификатор товара в системе продавца.
         */
        total?: number; // int32
      }
      export interface ProductGetProductAttributesV3ResponseAttribute {
        /**
         * Идентификатор характеристики.
         */
        attribute_id?: number; // int64
        /**
         * Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель» и «L2 Cache». У каждой из вложенных характеристик может быть несколько вариантов значений.
         */
        complex_id?: number; // int64
        /**
         * Массив значений характеристик.
         */
        values?: ProductGetProductAttributesV3ResponseDictionaryValue[];
      }
      export interface ProductGetProductAttributesV3ResponseComplexAttribute {
        /**
         * Массив характеристик товара.
         */
        attributes?: GetProductAttributesV3ResponseAttribute[];
      }
      export interface ProductGetProductAttributesV3ResponseDictionaryValue {
        /**
         * Идентификатор характеристики в словаре.
         */
        dictionary_value_id?: number; // int64
        /**
         * Значение характеристики товара.
         */
        value?: string;
      }
      export interface ProductGetProductInfoDescriptionRequest {
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface ProductGetProductInfoDescriptionResponse {
        result?: ProductGetProductInfoDescriptionResponseProduct;
      }
      export interface ProductGetProductInfoDescriptionResponseProduct {
        /**
         * Описание.
         */
        description?: string;
        /**
         * Идентификатор.
         */
        id?: number; // int64
        /**
         * Название.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
      }
      export interface ProductGetProductInfoPricesV4ResponseItem {
        /**
         * Максимальная комиссия за эквайринг.
         *
         * [Подробнее в Базе знаний продавца](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/rashody-na-dop-uslugi#экваиринг)
         *
         */
        acquiring?: number; // int32
        commissions?: /* Информация о комиссиях. */ ItemCommissions;
        marketing_actions?: ItemMarketingActions;
        /**
         * Идентификатор товара в системе продавца.
         */
        offer_id?: string;
        price?: /* Цена товара. */ ItemPrice;
        /**
         * Параметр неактуален и будет удалён 1 мая 2023 года.
         *
         * Ценовой индекс.
         *
         */
        price_index?: string;
        price_indexes?: /**
         * Ценовые индексы товара.
         *
         * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
         *
         */
        CommonPriceIndexes;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Объёмный вес товара.
         */
        volume_weight?: number; // double
      }
      /**
       * Результаты запроса.
       */
      export interface ProductGetProductInfoPricesV4ResponseResult {
        /**
         * Список товаров.
         */
        items?: any;
        /**
         * Идентификатор последнего значения на странице.
         *
         * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `last_id`.
         *
         */
        last_id?: string;
        /**
         * Количество товаров в списке.
         */
        total?: number; // int32
      }
      export interface ProductImportProductsBySKURequest {
        /**
         * Информация о товарах.
         */
        items?: ProductImportProductsBySKURequestItem[];
      }
      export interface ProductImportProductsBySKURequestItem {
        /**
         * Название товара. До 500 символов.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         *
         * Максимальная длина строки — 50 символов.
         *
         */
        offer_id?: string;
        /**
         * Цена до скидок (будет зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки.
         */
        old_price?: string;
        /**
         * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
         */
        premium_price?: string;
        /**
         * Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите значение `old_price` в этом параметре.
         */
        price?: string;
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Ставка НДС для товара:
         *   - `0` — не облагается НДС,
         *   - `0.1` — 10%,
         *   - `0.2` — 20%.
         *
         */
        vat?: string;
        /**
         * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.
         *
         * Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
      }
      export interface ProductImportProductsBySKUResponse {
        result?: ProductImportProductsBySKUResponseResult;
      }
      export interface ProductImportProductsBySKUResponseResult {
        /**
         * Код задачи на импорт товаров.
         */
        task_id?: number; // int64
        /**
         * Список идентификаторов товаров.
         */
        unmatched_sku_list?: number /* int64 */[];
      }
      export interface ProductImportProductsPricesRequest {
        /**
         * Информация о ценах товаров.
         */
        prices?: ProductImportProductsPricesRequestPrice[];
      }
      export interface ProductImportProductsPricesRequestPrice {
        /**
         * Атрибут для включения и выключения автоприменения акций:
         * - `ENABLED` — включить;
         * - `DISABLED` — выключить;
         * - `UNKNOWN` — ничего не менять, передаётся по умолчанию.
         *
         * Например, если ранее вы включили автоприменение акций и не хотите выключать его, передавайте `UNKNOWN`.
         *
         * Если вы передаёте `ENABLED` в этом параметре, установите значение минимальной цены в параметре `min_price`.
         *
         */
        auto_action_enabled?: "UNKNOWN" | "ENABLED" | "DISABLED";
        /**
         * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.
         *
         * Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Минимальная цена товара после применения акций.
         */
        min_price?: string;
        /**
         * Идентификатор товара в системе продавца.
         */
        offer_id?: string;
        /**
         * Цена до скидок (зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки.
         *
         * Если на товар нет скидок, укажите значение `0` в этом поле, а текущую цену передайте в поле `price`.
         *
         */
        old_price?: string;
        /**
         * Цена товара с учётом скидок, отображается на карточке товара.
         *
         * Если текущая цена товара от 400 до 10 000 рублей включительно, разница между значениями `price` и `old_price` должна быть больше 5%, но не менее 20 рублей.
         *
         */
        price?: string;
        /**
         * Атрибут для автоприменения стратегий цены:
         * - `ENABLED` — включить;
         * - `DISABLED` — выключить;
         * - `UNKNOWN` — ничего не менять, передаётся по умолчанию.
         *
         * Если ранее вы включили автоприменение стратегий цены и не хотите выключать его, передавайте `UNKNOWN` в следующих запросах.
         *
         * Если вы передаёте `ENABLED` в этом параметре, установите значение минимальной цены в параметре `min_price`.
         *
         * Если вы передаёте `DISABLED` в этом параметре, товар удаляется из стратегии.
         *
         */
        price_strategy_enabled?: "UNKNOWN" | "ENABLED" | "DISABLED";
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface ProductImportProductsPricesResponse {
        /**
         * Результаты запроса.
         */
        result?: ProductImportProductsPricesResponseProcessResult[];
      }
      export interface ProductImportProductsPricesResponseError {
        /**
         * Код ошибки.
         */
        code?: string;
        /**
         * Причина ошибки.
         */
        message?: string;
      }
      export interface ProductImportProductsPricesResponseProcessResult {
        /**
         * Массив ошибок, которые возникли при обработке запроса.
         */
        errors?: ProductImportProductsPricesResponseError[];
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Если информации о товаре успешно обновлена — `true`.
         */
        updated?: boolean;
      }
      export interface ProductImportProductsStocksRequest {
        /**
         * Информация о товарах на складах.
         */
        stocks?: ProductImportProductsStocksRequestStock[];
      }
      export interface ProductImportProductsStocksRequestStock {
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Количество товара в наличии.
         */
        stock?: number; // int64
      }
      export interface ProductImportProductsStocksResponse {
        /**
         * Результаты запроса.
         */
        result?: ProductImportProductsStocksResponseProcessResult[];
      }
      export interface ProductImportProductsStocksResponseError {
        /**
         * Код ошибки:
         * - `OVER_MAX_OVH_KGT` — вес или габариты товара больше максимальных. Обновить количество не получится. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/logistics-settings/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков).
         * - `OVER_MAX_OVH_NON_KGT` — вы не можете продавать крупногабаритные товары с этого склада. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков).
         * - `NON_KGT_ON_KGT_WAREHOUSE` — все ваши товары продаются как крупногабаритные, а вы хотите продавать обычный. Он попадёт под условия продажи крупногабаритных. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков).
         * - `STOCK_TOO_BIG` — указано слишком большое количество, попробуйте уменьшить его.
         * - `INVALID_STATE` — товар не прошёл все этапы создания, проверьте его статус.
         * - `CANNOT_CREATE_FBS_SKU` — произошла внутренняя ошибка при обновлении наличия, попробуйте ещё раз.
         * - `NOT_FOUND` — не удалось найти указанный товар.
         * - `PRODUCT_HAS_NOT_BEEN_TAGGED_YET` — товар ещё не пометили тегами «КГТ» или «неКГТ», так как не указаны габариты товара или система для расстановки тегов ещё не обработала его.
         *
         */
        code?: string;
        /**
         * Причина ошибки.
         */
        message?: string;
      }
      export interface ProductImportProductsStocksResponseProcessResult {
        /**
         * Массив ошибок, которые возникли при обработке запроса.
         */
        errors?: ProductImportProductsStocksResponseError[];
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Если информации о товаре успешно обновлена — `true`.
         */
        updated?: boolean;
      }
      /**
       * Информация о доставке.
       *
       * Всегда возвращает `null`.
       *
       */
      export interface ProductPicking {
        /**
         * Стоимость доставки.
         */
        amount?: number; // double
        /**
         * Дата и время доставки.
         */
        moment?: string; // date-time
        /**
         * Крупногабаритный товар или нет.
         */
        tag?: string;
      }
      export interface ProductProductArchiveRequest {
        /**
         * Идентификаторы товаров. Вы можете передать до 100 идентификаторов за раз.
         */
        product_id?: number /* int64 */[];
      }
      export interface ProductProductCertificateAccordanceTypesResponse {
        /**
         * Список типов и названий сертификатов.
         */
        result?: ProductProductCertificateAccordanceTypesResponseType[];
      }
      export interface ProductProductCertificateAccordanceTypesResponseType {
        /**
         * Название документа.
         */
        name?: string;
        /**
         * Значение справочника.
         */
        value?: string;
      }
      export interface ProductProductCertificateBindRequest {
        /**
         * Идентификатор сертификата, который был присвоен при его загрузке.
         */
        certificate_id?: number; // int64
        /**
         * Массив идентификаторов товаров, к которым относится этот сертификат.
         */
        product_id?: number /* int64 */[];
      }
      export interface ProductProductCertificateTypesResponse {
        /**
         * Список типов и названий сертификатов.
         */
        result?: ProductProductCertificateTypesResponseType[];
      }
      export interface ProductProductCertificateTypesResponseType {
        /**
         * Название документа.
         */
        name?: string;
        /**
         * Значение справочника.
         */
        value?: string;
      }
      export interface ProductProductCertificationListRequest {
        /**
         * Номер страницы, возвращаемой в запросе.
         */
        page?: number; // int32
        /**
         * Количество элементов на странице.
         */
        page_size?: number; // int32
      }
      export interface ProductProductCertificationListResponse {
        result?: /* Результат запроса. */ ProductCertificationListResponseCertificationResult;
      }
      export interface ProductProductInfoPicturesResponsePicture {
        /**
         * Признак, что картинка — изображение 360.
         */
        is_360?: boolean;
        /**
         * Признак, что картинка — образец цвета.
         */
        is_color?: boolean;
        /**
         * Признак, что картинка — главное изображение.
         */
        is_primary?: boolean;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Статус загрузки изображения.
         *
         * Если вызывали метод [/v1/product/pictures/import](#operation/ProductAPI_ProductImportPictures), то в ответе метода всегда будет `imported` — картинка не обработана.
         * Чтобы посмотреть финальный статус, примерно через 10 секунд вызовите метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures).
         *
         * Если вызывали метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures), вы увидите один из статусов:
         * - `uploaded` — изображение загружено;
         * - `failed` — не получилось загрузить изображение.
         *
         */
        state?: string;
        /**
         * Адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.
         */
        url?: string;
      }
      export interface ProductProductUnarchiveRequest {
        /**
         * Идентификаторы товаров. Вы можете передать до 100 идентификаторов за раз.
         */
        product_id?: number /* int64 */[];
      }
      export interface ProductUpdateOfferIdRequestUpdateOfferId {
        /**
         * Новый артикул.
         *
         * Максимальная длина строки — 50 символов.
         *
         */
        new_offer_id?: string;
        /**
         * Старый артикул.
         */
        offer_id?: string;
      }
      export interface Productsv1GetProductInfoStocksByWarehouseFbsRequest {
        /**
         * SKU товара.
         */
        sku?: any;
        /**
         * Параметр будет отключён 15 августа 2023 года. Используйте параметр `sku`.
         *
         * SKU товара, который продаётся со склада продавца (схемы FBS и rFBS).
         *
         * Получите `fbs_sku` в ответе методов [/v2/product/info](#operation/ProductAPI_GetProductInfoV2) и [/v2/product/info/list](#operation/ProductAPI_GetProductInfoListV2).
         *
         * Максимальное количество SKU в одном запросе — 500.
         *
         */
        fbs_sku?: any;
      }
      export interface Productsv1GetProductInfoStocksByWarehouseFbsResponse {
        /**
         * Результат работы метода.
         */
        result?: any;
      }
      export interface Productsv1GetProductInfoStocksByWarehouseFbsResponseResult {
        /**
         * SKU товара.
         */
        sku?: number; // int64
        /**
         * Параметр будет отключён 15 августа 2023 года. Используйте данные из параметра `sku`.
         *
         * SKU товара, который продаётся со склада продавца (схемы FBS и rFBS).
         *
         */
        fbs_sku?: number; // int64
        /**
         * Общее количество товара на складе.
         */
        present?: number; // int64
        /**
         * Идентификатор товара в системе продавца.
         */
        product_id?: number; // int64
        /**
         * Количество зарезервированных товаров на складе.
         */
        reserved?: number; // int64
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
        /**
         * Название склада.
         */
        warehouse_name?: string;
      }
      export interface Productv1ProductImportPicturesRequest {
        /**
         * Маркетинговый цвет.
         */
        color_image?: string;
        /**
         * Массив ссылок на изображения.
         * Изображения в массиве расположены в порядке их расположения на сайте.
         * Первое изображение в массиве будет главным.
         *
         */
        images?: any;
        /**
         * Массив изображений 360. До 70 штук.
         *
         * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.
         *
         */
        images360?: any;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface Productv1ProductInfoPicturesRequest {
        /**
         * Список идентификаторов товаров.
         */
        product_id?: any;
      }
      export interface Productv1ProductInfoPicturesResponse {
        result?: /* Результат работы метода. */ Productv1ProductInfoPicturesResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface Productv1ProductInfoPicturesResponseResult {
        pictures?: any;
      }
      export interface Productv2DeleteProductsRequest {
        /**
         * Идентификатор товара.
         */
        products?: DeleteProductsRequestProduct[];
      }
      export interface Productv2DeleteProductsResponse {
        /**
         * Статус обработки запроса.
         */
        status?: DeleteProductsResponseDeleteStatus[];
      }
      export interface Productv2GetGeoRestrictionsByFilterRequest {
        filter?: /* Фильтр. Чтобы посмотреть все геоограничения, оставьте `names` пустым, а в `only_visible` передайте `true`. */ V2GetGeoRestrictionsByFilterRequestFilter;
        /**
         * Порядок геоограничения, с которого выводим данные в ответе.
         *
         * Если указать `23`, то на выходе у первого элемента списка `restrictions` будет `order_number = 24`. Если вы хотите получить все геоограничения, укажите `0` в этом параметре.
         *
         */
        last_order_number?: number; // int64
        /**
         * Количество результатов в ответе.
         */
        limit?: number; // int64
      }
      export interface Productv2GetGeoRestrictionsByFilterResponse {
        restrictions?: any;
      }
      /**
       * Остатки уценённого товара на складе Ozon.
       */
      export interface Productv2GetProductInfoDiscountedStocks {
        /**
         * Количество товара, ожидаемого при поставке.
         */
        coming?: number; // int32
        /**
         * Количество товара на складе.
         */
        present?: number; // int32
        /**
         * Количество зарезервированного товара.
         */
        reserved?: number; // int32
      }
      export interface Productv2GetProductInfoLimitV2Request {}
      export interface Productv2GetProductInfoLimitV2Response {
        result?: Productv2GetProductInfoLimitV2ResponseResult;
      }
      export interface Productv2GetProductInfoLimitV2ResponseResult {
        /**
         * Сколько изменений можно внести до сброса счётчика за текущие сутки.
         */
        remaining?: number; // int64
        /**
         * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
         */
        reset_at?: string; // date-time
        /**
         * Значение лимита на загрузку и обновление товаров.
         */
        value?: number; // int64
      }
      export interface Productv2GetProductInfoListRequest {
        /**
         * Идентификатор товара в системе продавца — артикул. Максимальное количество товаров — 1000.
         */
        offer_id?: string[];
        /**
         * Идентификатор товара.
         */
        product_id?: number /* int64 */[];
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number /* int64 */[];
      }
      export interface Productv2GetProductInfoListResponse {
        result?: /* Результаты запроса. */ Productv2GetProductInfoListResponseResult;
      }
      export interface Productv2GetProductInfoListResponseItem {
        /**
         * Штрихкод.
         */
        barcode?: string;
        /**
         * Все штрихкоды товара.
         */
        barcodes?: any;
        /**
         * Цена главного предложения на Ozon.
         */
        buybox_price?: string;
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
        /**
         * Маркетинговый цвет.
         */
        color_image?: string;
        /**
         * Дата и время создания товара.
         */
        created_at?: string; // date-time
        /**
         * SKU товара.
         *
         */
        sku?: number; // int64
        /**
         * SKU товара, который продаётся со склада Ozon (FBO).
         *
         * С 15 августа 2023 года у товаров будет единый SKU и этот параметр будет отключён.
         * Используйте значение этого параметра, если вы работаете по схеме FBO и в ответе нет параметра `sku`.
         *
         */
        fbo_sku?: number; // int64
        /**
         * SKU товара, который продаётся со склада продавца (FBS и rFBS).
         *
         * С 15 августа 2023 года у товаров будет единый SKU и этот параметр будет отключён.
         * Используйте значение этого параметра, если вы работаете по схеме FBS или rFBS и в ответе нет параметра `sku`.
         *
         */
        fbs_sku?: number; // int64
        /**
         * Номер задания на формирование документов.
         */
        id?: number; // int64
        /**
         * Массив ссылок на изображения. Изображения в массиве расположены в порядке их расположения на сайте. Если параметр
         * `primary_image` не указан, первое изображение в массиве главное для товара.
         *
         */
        images?: string[];
        /**
         * Главное изображение товара.
         */
        primary_image?: string;
        /**
         * Массив изображений 360.
         */
        images360?: string[];
        /**
         * Признак, что у товара есть уценённые аналоги на складе Ozon.
         */
        has_discounted_item?: boolean;
        /**
         * Признак, является ли товар уценённым:
         *   - Если товар создавался продавцом как уценённый — `true`.
         *   - Если товар не уценённый или был уценён Ozon — `false`.
         *
         */
        is_discounted?: boolean;
        discounted_stocks?: /* Остатки уценённого товара на складе Ozon. */ Productv2GetProductInfoDiscountedStocks;
        /**
         * Признак крупногабаритного товара.
         */
        is_kgt?: boolean;
        /**
         * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Цена на товар с учётом всех акций. Это значение будет указано на витрине Ozon.
         */
        marketing_price?: string;
        /**
         * Минимальная цена на аналогичный товар на Ozon.
         */
        min_ozon_price?: string;
        /**
         * Минимальная цена товара после применения акций.
         */
        min_price?: string;
        /**
         * Название.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
         */
        old_price?: string;
        /**
         * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
         */
        premium_price?: string;
        /**
         * Цена товара с учётом скидок — это значение показывается на карточке товара.
         */
        price?: string;
        /**
         * Параметр неактуален и будет удалён 1 мая 2023 года.
         *
         * Ценовой индекс.
         *
         */
        price_index?: string;
        price_indexes?: /**
         * Ценовые индексы товара.
         *
         * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
         *
         */
        CommonPriceIndexes;
        /**
         * Цена на товар, рекомендованная системой на основании схожих предложений.
         */
        recommended_price?: string;
        status?: /* Описание состояния товара. */ Productv2Status;
        /**
         * Информация об источниках схожих предложений.
         */
        sources?: Productv2GetProductInfoListResponseSource[];
        stocks?: /* Информация об остатках товара. */ Productv2GetProductInfoListResponseStock;
        /**
         * Дата последнего обновления товара.
         */
        updated_at?: string; // date-time
        /**
         * Ставка НДС для товара.
         */
        vat?: string;
        visibility_details?: /* Настройки видимости товара. */ Productv2GetProductInfoListResponseVisibilityDetails;
        /**
         * Если товар выставлен на продажу — `true`.
         */
        visible?: boolean;
      }
      /**
       * Результаты запроса.
       */
      export interface Productv2GetProductInfoListResponseResult {
        /**
         * Массив данных.
         */
        items?: Productv2GetProductInfoListResponseItem[];
      }
      export interface Productv2GetProductInfoListResponseSource {
        /**
         * Флаг, что источник учитывается при расчете рыночного значения.
         */
        is_enabled?: boolean;
        /**
         * Идентификатор товара на Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Ссылка на источник.
         */
        source?: string;
      }
      /**
       * Информация об остатках товара.
       */
      export interface Productv2GetProductInfoListResponseStock {
        /**
         * Ожидается поставка.
         */
        coming?: number; // int32
        /**
         * Сейчас на складе.
         */
        present?: number; // int32
        /**
         * Зарезервировано.
         */
        reserved?: number; // int32
      }
      /**
       * Настройки видимости товара.
       */
      export interface Productv2GetProductInfoListResponseVisibilityDetails {
        /**
         * Если активный товар — `true`.
         */
        active_product?: boolean;
        /**
         * Если установлена цена — `true`.
         */
        has_price?: boolean;
        /**
         * Если есть остаток на складах — `true`.
         */
        has_stock?: boolean;
        /**
         * Причина, почему товар скрыт.
         */
        reasons?: {
          [name: string]: GetProductInfoListResponseReasons;
        };
      }
      export interface Productv2GetProductInfoRequest {
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
      }
      export interface Productv2GetProductInfoResponse {
        result?: /* Результаты запроса. */ Productv2GetProductInfoResponseResult;
      }
      export interface Productv2GetProductInfoResponseCommissions {
        /**
         * Стоимость доставки.
         */
        deliveryAmount?: number; // double
        /**
         * Минимальная комиссия.
         */
        minValue?: number; // double
        /**
         * Процент комиссии.
         */
        percent?: number; // double
        /**
         * Стоимость возврата.
         */
        returnAmount?: number; // double
        /**
         * Схема продажи.
         */
        saleSchema?: string;
        /**
         * Сумма комиссии.
         */
        value?: number; // double
      }
      /**
       * Результаты запроса.
       */
      export interface Productv2GetProductInfoResponseResult {
        /**
         * Штрихкод.
         */
        barcode?: string;
        /**
         * Все штрихкоды товара.
         */
        barcodes?: any;
        /**
         * Цена главного предложения на Ozon.
         *
         * Устаревший параметр, больше не используется. Всегда возвращает пустую строку `""`.
         *
         */
        buybox_price?: string;
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
        /**
         * Маркетинговый цвет.
         */
        color_image?: string;
        /**
         * Информация о комиссиях.
         */
        commissions?: Productv2GetProductInfoResponseCommissions[];
        /**
         * Дата и время создания товара.
         */
        created_at?: string; // date-time
        /**
         * SKU товара.
         *
         */
        sku?: number; // int64
        /**
         * SKU товара, который продаётся со склада Ozon (FBO).
         *
         * С 15 августа 2023 года у товаров будет единый SKU и этот параметр будет отключён.
         * Используйте значение этого параметра, если вы работаете по схеме FBO и в ответе нет параметра `sku`.
         *
         */
        fbo_sku?: number; // int64
        /**
         * SKU товара, который продаётся со склада продавца (FBS и rFBS).
         *
         * С 15 августа 2023 года у товаров будет единый SKU и этот параметр будет отключён.
         * Используйте значение этого параметра, если вы работаете по схеме FBS или rFBS и в ответе нет параметра `sku`.
         *
         */
        fbs_sku?: number; // int64
        /**
         * Номер задания на формирование документов.
         */
        id?: number; // int64
        /**
         * Массив ссылок на изображения. Изображения в массиве расположены в порядке их расположения на сайте. Если параметр `primary_image` не указан, первое изображение в массиве главное для товара.
         */
        images?: string[];
        /**
         * Главное изображение товара.
         */
        primary_image?: string;
        /**
         * Массив изображений 360.
         */
        images360?: string[];
        /**
         * Признак, что у товара есть уценённые аналоги на складе Ozon.
         */
        has_discounted_item?: boolean;
        /**
         * Признак, является ли товар уценённым:
         *   - Если товар создавался продавцом как уценённый — `true`.
         *   - Если товар не уценённый или был уценён Ozon — `false`.
         *
         */
        is_discounted?: boolean;
        discounted_stocks?: /* Остатки уценённого товара на складе Ozon. */ Productv2GetProductInfoDiscountedStocks;
        /**
         * Признак крупногабаритного товара.
         */
        is_kgt?: boolean;
        /**
         * Флаг обязательной предоплаты для товара:
         *   `true` — чтобы купить товар, нужно внести предоплату.
         *   `false` — предоплата необязательна.
         *
         */
        is_prepayment?: boolean;
        /**
         * Если возможна предоплата — `true`.
         */
        is_prepayment_allowed?: boolean;
        /**
         * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Цена на товар с учетом всех акций. Это значение будет указано на витрине Ozon.
         */
        marketing_price?: string;
        /**
         * Минимальная цена на аналогичный товар на Ozon.
         *
         * Устаревший параметр, больше не используется. Всегда возвращает пустую строку `""`.
         *
         */
        min_ozon_price?: string;
        /**
         * Минимальная цена товара после применения акций.
         */
        min_price?: string;
        /**
         * Название.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
         */
        old_price?: string;
        /**
         * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
         */
        premium_price?: string;
        /**
         * Цена товара с учётом скидок — это значение показывается на карточке товара.
         */
        price?: string;
        /**
         * Параметр неактуален и будет удалён 1 мая 2023 года.
         *
         * Ценовой индекс.
         *
         */
        price_index?: string;
        price_indexes?: /**
         * Ценовые индексы товара.
         *
         * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
         *
         */
        CommonPriceIndexes;
        /**
         * Цена на товар, рекомендованная системой на основании схожих предложений.
         */
        recommended_price?: string;
        status?: /* Описание состояния товара. */ Productv2Status;
        /**
         * Информация об источниках схожих предложений. Подробнее в [Базе знаний продавца](https://seller-edu.ozon.ru/docs/prices/market-prices.html#если-рыночная-цена-на-комплект-отображается-неверно).
         */
        sources?: Productv2GetProductInfoResponseSource[];
        stocks?: /* Информация об остатках товара. */ Productv2GetProductInfoResponseStock;
        /**
         * Дата последнего обновления товара.
         */
        updated_at?: string; // date-time
        /**
         * Ставка НДС для товара.
         */
        vat?: string;
        visibility_details?: /* Настройки видимости товара. */ Productv2GetProductInfoResponseVisibilityDetails;
        /**
         * Если товар выставлен на продажу — `true`.
         */
        visible?: boolean;
        /**
         * Объёмный вес товара.
         */
        volume_weight?: number; // double
      }
      export interface Productv2GetProductInfoResponseSource {
        /**
         * Признак, что источник учитывается при расчете рыночного значения.
         */
        is_enabled?: boolean;
        /**
         * Идентификатор товара на Ozon.
         */
        sku?: number; // int64
        /**
         * Ссылка на источник.
         */
        source?: string;
      }
      /**
       * Информация об остатках товара.
       */
      export interface Productv2GetProductInfoResponseStock {
        /**
         * Ожидается поставка.
         */
        coming?: number; // int32
        /**
         * Сейчас на складе.
         */
        present?: number; // int32
        /**
         * Зарезервировано.
         */
        reserved?: number; // int32
      }
      /**
       * Настройки видимости товара.
       */
      export interface Productv2GetProductInfoResponseVisibilityDetails {
        /**
         * Если активный товар — `true`.
         */
        active_product?: boolean;
        /**
         * Если установлена цена — `true`.
         */
        has_price?: boolean;
        /**
         * Если есть остаток на складах — `true`.
         */
        has_stock?: boolean;
      }
      export interface Productv2GetProductListRequest {
        filter?: /* Фильтр по товарам. */ Productv2GetProductListRequestFilter;
        /**
         * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
         *
         * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
         *
         */
        last_id?: string;
        /**
         * Количество значений на странице. Минимум — 1, максимум — 1000.
         */
        limit?: number; // int64
      }
      /**
       * Фильтр по товарам.
       */
      export interface Productv2GetProductListRequestFilter {
        /**
         * Фильтр по параметру `offer_id`. Можно передавать список значений.
         */
        offer_id?: any;
        /**
         * Фильтр по параметру `product_id`. Можно передавать список значений.
         */
        product_id?: any;
        visibility?: /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         *   - `ARCHIVED` — товары в архиве.
         *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
         *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
         *   - `IMAGE_ABSENT` — товары без изображений.
         *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
         *
         */
        Productv2GetProductListRequestFilterFilterVisibility;
      }
      /**
       * Фильтр по видимости товара:
       *   - `ALL` — все товары, кроме архивных.
       *   - `VISIBLE` — товары, которые видны покупателям.
       *   - `INVISIBLE` — товары, которые не видны покупателям.
       *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
       *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
       *   - `MODERATED` — товары, которые прошли модерацию.
       *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
       *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
       *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
       *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
       *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
       *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
       *   - `TO_SUPPLY` — товары, готовые к продаже.
       *   - `IN_SALE` — товары в продаже.
       *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
       *   - `BANNED` — заблокированные товары.
       *   - `OVERPRICED` — товары с завышенной ценой.
       *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
       *   - `EMPTY_BARCODE` — товары без штрихкода.
       *   - `BARCODE_EXISTS` — товары со штрихкодом.
       *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
       *   - `ARCHIVED` — товары в архиве.
       *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
       *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
       *   - `IMAGE_ABSENT` — товары без изображений.
       *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
       *
       */
      export type Productv2GetProductListRequestFilterFilterVisibility =
        | "ALL"
        | "VISIBLE"
        | "INVISIBLE"
        | "EMPTY_STOCK"
        | "NOT_MODERATED"
        | "MODERATED"
        | "DISABLED"
        | "STATE_FAILED"
        | "READY_TO_SUPPLY"
        | "VALIDATION_STATE_PENDING"
        | "VALIDATION_STATE_FAIL"
        | "VALIDATION_STATE_SUCCESS"
        | "TO_SUPPLY"
        | "IN_SALE"
        | "REMOVED_FROM_SALE"
        | "BANNED"
        | "OVERPRICED"
        | "CRITICALLY_OVERPRICED"
        | "EMPTY_BARCODE"
        | "BARCODE_EXISTS"
        | "QUARANTINE"
        | "ARCHIVED"
        | "OVERPRICED_WITH_STOCK"
        | "PARTIAL_APPROVED"
        | "IMAGE_ABSENT"
        | "MODERATION_BLOCK";
      export interface Productv2GetProductListResponse {
        result?: /* Результат. */ Productv2GetProductListResponseResult;
      }
      export interface Productv2GetProductListResponseItem {
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      /**
       * Результат.
       */
      export interface Productv2GetProductListResponseResult {
        /**
         * Список товаров.
         */
        items?: any;
        /**
         * Идентификатор последнего значения на странице.
         *
         * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `last_id`.
         *
         */
        last_id?: string;
        /**
         * Всего товаров.
         */
        total?: number; // int32
      }
      export interface Productv2ImportProductsRequest {
        /**
         * Массив данных.
         */
        items?: Productv2ImportProductsRequestItem[];
      }
      export interface Productv2ImportProductsRequestAttribute {
        /**
         * Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель», «L2 Cache» и другие. У каждой из вложенных характеристик может быть несколько вариантов значений.
         */
        complex_id?: number; // int64
        /**
         * Идентификатор характеристики.
         */
        id?: number; // int64
        /**
         * Массив вложенных значений характеристики.
         */
        values?: Productv2ImportProductsRequestDictionaryValue[];
      }
      export interface Productv2ImportProductsRequestComplexAttribute {
        /**
         * Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через [API](https://docs.ozon.ru/api/seller/).
         */
        attributes?: Productv2ImportProductsRequestAttribute[];
      }
      export interface Productv2ImportProductsRequestDictionaryValue {
        /**
         * Идентификатор справочника.
         */
        dictionary_value_id?: number; // int64
        /**
         * Значение из справочника.
         */
        value?: string;
      }
      export interface Productv2ImportProductsRequestItem {
        /**
         * Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через [API](https://docs.ozon.ru/api/seller/).
         */
        attributes: Productv2ImportProductsRequestAttribute[];
        /**
         * Штрихкод товара.
         */
        barcode?: string;
        /**
         * Идентификатор категории.
         */
        category_id: number; // int64
        /**
         * Маркетинговый цвет.
         *
         * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.
         *
         */
        color_image?: string;
        /**
         * Массив характеристик, у которых есть вложенные атрибуты.
         */
        complex_attributes?: Productv2ImportProductsRequestComplexAttribute[];
        /**
         * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.
         *
         * Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Глубина упаковки.
         */
        depth: number; // int32
        /**
         * Единица измерения габаритов:
         *   - `mm` — миллиметры,
         *   - `cm` — сантиметры,
         *   - `in` — дюймы.
         *
         */
        dimension_unit: string;
        /**
         * Геоограничения. Передайте список, состоящий из `name`, полученных в ответе метода [/v1/products/geo-restrictions-catalog-by-filter](#operations/ProductAPI_GetGeoRestrictionsV1).
         */
        geo_names?: any;
        /**
         * Высота упаковки.
         */
        height: number; // int32
        /**
         * Массив изображений. До 15 штук. Изображения показываются на сайте в таком же порядке, как в массиве.
         *
         * Если не передать значение `primary_image`, первое изображение в массиве будет главным для товара.
         *
         * Если вы передали значение `primary_image`, передайте до 14 изображений.
         * Если параметр `primary_image` пустой, передайте до 15 изображений.
         *
         * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.
         *
         */
        images: string[];
        /**
         * Ссылка на главное изображение товара.
         */
        primary_image?: string;
        service_type?: /**
         * Тип сервиса. Передайте одно из значений в верхнем регистре:
         *   - `IS_CODE_SERVICE`,
         *   - `IS_NO_CODE_SERVICE`.
         *
         */
        V2ServiceType;
        /**
         * Массив изображений 360. До 70 штук.
         *
         * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.
         *
         */
        images360?: string[];
        /**
         * Название товара. До 500 символов.
         */
        name: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         *
         * Максимальная длина строки — 50 символов.
         *
         */
        offer_id: string;
        /**
         * Цена до скидок (будет зачёркнута на карточке товара). Указывается в рублях. Разделитель дробной
         * части — точка, до двух знаков после точки.
         *
         * Если вы раньше передавали `old_price`, то при обновлении `price` также обновите `old_price`.
         *
         */
        old_price?: string;
        /**
         * Список PDF-файлов.
         */
        pdf_list?: ImportProductsRequestPdfList[];
        /**
         * Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/).
         */
        premium_price?: string;
        /**
         * Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите
         * значение `old_price` в этом параметре.
         *
         */
        price: string;
        /**
         * Ставка НДС для товара:
         *   - `0` — не облагается НДС,
         *   - `0.1` — 10%,
         *   - `0.2` — 20%.
         *
         */
        vat: string;
        /**
         * Вес товара в упаковке. Предельное значение — 1000 килограммов или конвертированная величина в других
         * единицах измерения.
         *
         */
        weight: number; // int32
        /**
         * Единица измерения веса:
         *   - `g` — граммы,
         *   - `kg` — килограммы,
         *   - `lb` — фунты.
         *
         */
        weight_unit: string;
        /**
         * Ширина упаковки.
         */
        width: number; // int32
      }
      export interface Productv2ImportProductsResponse {
        result?: /* Результаты запроса. */ Productv2ImportProductsResponseResult;
      }
      /**
       * Результаты запроса.
       */
      export interface Productv2ImportProductsResponseResult {
        /**
         * Номер задания на загрузку товаров.
         */
        task_id?: number; // int64
      }
      export interface Productv2ProductsStocksRequest {
        /**
         * Информация о товарах на складах.
         */
        stocks?: Productv2ProductsStocksRequestStock[];
      }
      export interface Productv2ProductsStocksRequestStock {
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Количество.
         */
        stock?: number; // int64
        /**
         * Идентификатор склада, полученный из метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList).
         */
        warehouse_id?: number; // int64
      }
      /**
       * Результаты запроса.
       */
      export interface Productv2ProductsStocksResponse {
        result?: Productv2ProductsStocksResponseResult[];
      }
      export interface Productv2ProductsStocksResponseError {
        /**
         * Код ошибки:
         *   - `SKU STOCK NOT CHANGED` — количество товара на складе не изменилось, так как вы передаёте тот же остаток.
         *   - `PRODUCT_HAS_NOT_BEEN_TAGGED_YET` — товар ещё не пометили тегами «КГТ» или «неКГТ», так как не указаны габариты товара или система для расстановки тегов ещё не обработала его.
         *   - `NON_KGT_ON_KGT_WAREHOUSE` — попытка установить или обновить остаток некрупногабаритного товара на КГТ складе.
         *
         */
        code?: string;
        /**
         * Причина ошибки.
         */
        message?: string;
      }
      export interface Productv2ProductsStocksResponseResult {
        /**
         * Массив ошибок, которые возникли при обработке запроса.
         */
        errors?: Productv2ProductsStocksResponseError[];
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Если запрос выполнен успешно и остатки обновлены — `true`.
         */
        updated?: boolean;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      /**
       * Описание состояния товара.
       */
      export interface Productv2Status {
        /**
         * Состояние товара.
         */
        state?: string;
        /**
         * Состояние товара, на переходе в которое произошла ошибка.
         */
        state_failed?: string;
        /**
         * Статус модерации.
         */
        moderate_status?: string;
        /**
         * Причины отклонения товара.
         */
        decline_reasons?: string[];
        /**
         * Статус валидации.
         */
        validation_state?: string;
        /**
         * Название состояния товара.
         */
        state_name?: string;
        /**
         * Описание состояния товара.
         */
        state_description?: string;
        /**
         * Признак, что при создании товара возникли ошибки.
         */
        is_failed?: boolean;
        /**
         * Признак, что товар создан.
         */
        is_created?: boolean;
        /**
         * Подсказки для текущего состояния товара.
         */
        state_tooltip?: string;
        /**
         * Ошибки при загрузке товаров.
         */
        item_errors?: V2ItemError[];
        /**
         * Время последнего изменения состояния товара.
         */
        state_updated_at?: string; // date-time
      }
      /**
       * Фильтр по товарам.
       */
      export interface Productv3Filter {
        /**
         * Фильтр по параметру `offer_id`. Можно передавать список значений.
         */
        offer_id?: any;
        /**
         * Фильтр по параметру `product_id`. Можно передавать список значений.
         */
        product_id?: any;
        visibility?: /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         *   - `ARCHIVED` — товары в архиве.
         *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
         *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
         *   - `IMAGE_ABSENT` — товары без изображений.
         *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
         *
         */
        Productv2GetProductListRequestFilterFilterVisibility;
      }
      export interface Productv3GetProductAttributesV3Request {
        filter?: /* Фильтр по товарам. */ Productv3Filter;
        /**
         * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
         *
         * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
         *
         */
        last_id?: string;
        /**
         * Количество значений на странице. Минимум — 1, максимум — 1000.
         */
        limit?: number; // int64
        /**
         * Параметр, по которому товары будут отсортированы.
         */
        sort_by?: string;
        /**
         * Направление сортировки.
         */
        sort_dir?: string;
      }
      export interface Productv3GetProductAttributesV3Response {
        /**
         * Результаты запроса.
         */
        result?: Productv3GetProductAttributesV3ResponseResult[];
        /**
         * Идентификатор последнего значения на странице.
         *
         * Чтобы получить следующие значения, укажите полученное значение в следующем запросе в параметре `last_id`.
         *
         */
        last_id?: string;
        /**
         * Количество товаров в списке.
         */
        total?: string; // int32
      }
      export interface Productv3GetProductAttributesV3ResponseResult {
        /**
         * Массив характеристик товара.
         */
        attributes?: ProductGetProductAttributesV3ResponseAttribute[];
        /**
         * Штрихкод.
         */
        barcode?: string;
        /**
         * Идентификатор категории.
         */
        category_id?: number; // int64
        /**
         * Маркетинговый цвет.
         */
        color_image?: string;
        /**
         * Массив вложенных характеристик.
         */
        complex_attributes?: ProductGetProductAttributesV3ResponseComplexAttribute[];
        /**
         * Глубина.
         */
        depth?: number; // int32
        /**
         * Единица измерения габаритов:
         *   - `mm` — миллиметры,
         *   - `cm` — сантиметры,
         *   - `in` — дюймы.
         *
         */
        dimension_unit?: string;
        /**
         * Высота упаковки.
         */
        height?: number; // int32
        /**
         * Идентификатор характеристики товара.
         */
        id?: number; // int64
        /**
         * Идентификатор для последующей пакетной загрузки изображений.
         */
        image_group_id?: string;
        /**
         * Массив ссылок на изображения товара.
         */
        images?: GetProductAttributesResponseImage[];
        /**
         * Массив изображений 360.
         */
        images360?: GetProductAttributesResponseImage360[];
        /**
         * Название товара. До 500 символов.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Массив PDF-файлов.
         */
        pdf_list?: GetProductAttributesResponsePdf[];
        /**
         * Вес товара в упаковке.
         */
        weight?: number; // int32
        /**
         * Единица измерения веса.
         */
        weight_unit?: string;
        /**
         * Ширина упаковки.
         */
        width?: number; // int32
      }
      export interface Productv3GetProductInfoStocksV3Request {
        filter?: /* Фильтр по товарам. */ Productv3Filter;
        /**
         * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
         *
         * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
         *
         */
        last_id?: string;
        /**
         * Количество значений на странице. Минимум — 1, максимум — 1000.
         */
        limit?: number; // int64
      }
      export interface Productv3GetProductInfoStocksV3Response {
        result?: /* Результаты запроса. */ Productv3GetProductInfoStocksV3ResponseResult;
      }
      export interface Productv3GetProductInfoStocksV3ResponseItem {
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Информация об остатках.
         */
        stocks?: /* Остатки. */ GetProductInfoStocksV3ResponseStock[];
      }
      /**
       * Результаты запроса.
       */
      export interface Productv3GetProductInfoStocksV3ResponseResult {
        /**
         * Информация о товарах.
         */
        items?: Productv3GetProductInfoStocksV3ResponseItem[];
        /**
         * Идентификатор последнего значения на странице.
         *
         * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `last_id`.
         *
         */
        last_id?: string;
        /**
         * Количество уникальных товаров, для которых выводится информация об остатках.
         */
        total?: number; // int32
      }
      /**
       * Фильтр по товарам.
       */
      export interface Productv4Filter {
        /**
         * Фильтр по параметру `offer_id`. Можно передавать список значений.
         */
        offer_id?: any;
        /**
         * Фильтр по параметру `product_id`. Можно передавать до 1000 значений.
         */
        product_id?: any;
        visibility?: /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         *   - `ARCHIVED` — товары в архиве.
         *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
         *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
         *   - `IMAGE_ABSENT` — товары без изображений.
         *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
         *
         */
        Productv2GetProductListRequestFilterFilterVisibility;
      }
      export interface Productv4GetProductInfoPricesV4Request {
        filter?: /* Фильтр по товарам. */ Productv4Filter;
        /**
         * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
         *
         * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
         *
         */
        last_id?: string;
        /**
         * Количество значений на странице. Минимум — 1, максимум — 1000.
         */
        limit?: number; // int32
      }
      export interface Productv4GetProductInfoPricesV4Response {
        result?: /* Результаты запроса. */ ProductGetProductInfoPricesV4ResponseResult;
      }
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
       * Изменение рейтинга: отношение предыдущего значения к текущему.
       *
       */
      export interface RatingItemChange {
        /**
         * Как изменилось значение рейтинга:
         * - `DIRECTION_UNKNOWN` — не определено.
         * - `DIRECTION_NONE` — не изменилось.
         * - `DIRECTION_RISE` — выросло.
         * - `DIRECTION_FALL` — упало.
         *
         */
        direction?: string;
        /**
         * Что означает изменение:
         * - `MEANING_UNKNOWN` — неизвестно.
         * - `MEANING_NONE` — нейтрально.
         * - `MEANING_GOOD` — показатель улучшается, всё хорошо.
         * - `MEANING_BAD` — показатель падает, нужно что-то сделать.
         *
         */
        meaning?: string;
      }
      export interface RatingSummaryV1ResponseGroup {
        /**
         * Название группы рейтингов.
         */
        group_name?: string;
        /**
         * Список рейтингов.
         */
        items?: any;
      }
      export interface RatingValue {
        /**
         * Дата начала подсчёта рейтинга.
         */
        date_from?: string; // date-time
        /**
         * Дата конца подсчёта рейтинга.
         */
        date_to?: string; // date-time
        status?: /* Статус рейтинга. */ V1RatingStatus;
        /**
         * Значение рейтинга.
         */
        value?: number; // double
      }
      export interface RelatedPostingCancelReason {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Информация о причинах отмены.
         */
        reasons?: RelatedPostingCancelReasons[];
      }
      export interface RelatedPostingCancelReasons {
        /**
         * Идентификатор причины отмены:
         * - `352` — товар закончился на складе продавца.
         * - `400` — остался только бракованный товар.
         * - `401` — продавец отклонил арбитраж.
         * - `402` — другое (вина продавца).
         * - `665` — покупатель не забрал заказ.
         * - `666` — возврат из службы доставки: нет доставки в указанный регион.
         * - `667` — заказ утерян службой доставки.
         *
         */
        id?: number; // int64
        /**
         * Описание причины отмены.
         */
        title?: string;
        /**
         * Инициатор отмены отправления:
         *   - `buyer` — покупатель,
         *   - `seller` — продавец.
         *
         */
        type_id?: string;
      }
      export interface ReportCreateCompanyFinanceReportRequest {
        /**
         * Дата, с ĸоторой рассчитывается отчёт по финансам. Формат: YYYY-MM-DD.
         *
         */
        date_from?: string;
        /**
         * Дата, по ĸоторую рассчитывается отчёт по финансам. Формат: YYYY-MM-DD.
         *
         */
        date_to?: string;
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
      }
      export interface ReportCreateCompanyPostingsReportRequest {
        filter?: /* Фильтр. */ ReportCreateCompanyPostingsReportRequestFilter;
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
      }
      /**
       * Фильтр.
       */
      export interface ReportCreateCompanyPostingsReportRequestFilter {
        /**
         * Идентификатор причины отмены.
         */
        cancel_reason_id?: number /* int64 */[];
        /**
         * Схема работы — FBO или FBS.
         *
         * Чтобы получить отчёт по схеме FBO, передайте `fbo` в этом параметре. Для отчёта по схеме FBS передайте `fbs`.
         *
         */
        delivery_schema?: string[];
        /**
         * Артикул товара.
         */
        offer_id?: string;
        /**
         * Время, когда заказ попал в обработку.
         */
        processed_at_from?: string; // date-time
        /**
         * Время, когда заказ появился в личном кабинете.
         */
        processed_at_to?: string; // date-time
        /**
         * Идентификатор товара в системе Ozon.
         */
        sku?: number /* int64 */[];
        /**
         * Текст статуса.
         */
        status_alias?: string[];
        /**
         * Числовой статус.
         */
        statuses?: number /* int64 */[];
        /**
         * Название товара.
         */
        title?: string;
      }
      export interface ReportCreateCompanyProductsPricesReportRequest {
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
        /**
         * Идентифиĸатор товара в системе продавца — артиĸул.
         */
        offer_id?: string[];
        /**
         * Поисĸ по содержанию записи, проверяет наличие.
         */
        search?: string;
        /**
         * Идентифиĸатор товара в системе Ozon — SKU.
         */
        sku?: number /* int64 */[];
        visibility?: /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         *
         */
        ReportCreateCompanyProductsPricesReportRequestVisibility;
      }
      /**
       * Фильтр по видимости товара:
       *   - `ALL` — все товары, кроме архивных.
       *   - `VISIBLE` — товары, которые видны покупателям.
       *   - `INVISIBLE` — товары, которые не видны покупателям.
       *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
       *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
       *   - `MODERATED` — товары, которые прошли модерацию.
       *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
       *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
       *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
       *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
       *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
       *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
       *   - `TO_SUPPLY` — товары, готовые к продаже.
       *   - `IN_SALE` — товары в продаже.
       *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
       *   - `BANNED` — заблокированные товары.
       *   - `OVERPRICED` — товары с завышенной ценой.
       *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
       *   - `EMPTY_BARCODE` — товары без штрихкода.
       *   - `BARCODE_EXISTS` — товары со штрихкодом.
       *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
       *
       */
      export type ReportCreateCompanyProductsPricesReportRequestVisibility =
        string;
      /**
       * CreateCompanyProductsReport
       */
      export interface ReportCreateCompanyProductsReportRequest {
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
        /**
         * Идентификатор товара в системе продавца.
         */
        offer_id?: string[];
        /**
         * Поиск по содержанию записи, проверяет наличие.
         */
        search?: string;
        /**
         * Идентификатор товара в системе Ozon.
         */
        sku?: number /* int64 */[];
        visibility?: /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         *
         */
        ReportCreateCompanyProductsReportRequestVisibility;
      }
      /**
       * Фильтр по видимости товара:
       *   - `ALL` — все товары, кроме архивных.
       *   - `VISIBLE` — товары, которые видны покупателям.
       *   - `INVISIBLE` — товары, которые не видны покупателям.
       *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
       *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
       *   - `MODERATED` — товары, которые прошли модерацию.
       *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
       *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
       *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
       *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
       *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
       *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
       *   - `TO_SUPPLY` — товары, готовые к продаже.
       *   - `IN_SALE` — товары в продаже.
       *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
       *   - `BANNED` — заблокированные товары.
       *   - `OVERPRICED` — товары с завышенной ценой.
       *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
       *   - `EMPTY_BARCODE` — товары без штрихкода.
       *   - `BARCODE_EXISTS` — товары со штрихкодом.
       *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
       *
       */
      export type ReportCreateCompanyProductsReportRequestVisibility = string;
      export interface ReportCreateCompanyReturnsReportRequest {
        filter?: /* Фильтр. */ ReportCreateCompanyReturnsReportRequestFilter;
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
      }
      /**
       * Фильтр.
       */
      export interface ReportCreateCompanyReturnsReportRequestFilter {
        /**
         * Схема доставĸи заĸаза: `fbs` — доставка со своего склада.
         *
         */
        delivery_schema?: string;
        /**
         * Идентифиĸатор заĸаза.
         */
        order_id?: number; // int64
        /**
         * Статус заĸаза.
         */
        status?: string;
      }
      export interface ReportCreateCompanyStockReportRequest {
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
      }
      /**
       * CreateCompanyTransactionsReport
       */
      export interface ReportCreateCompanyTransactionsReportRequest {
        /**
         * Дата, с которой рассчитывается отчёт по транзакциям. Формат UTC: ГГГГ-ММ-ДД.
         *
         */
        date_from?: string;
        /**
         * Дата, по которую рассчитывается отчёт по транзакциям. Формат UTC: ГГГГ-ММ-ДД.
         *
         */
        date_to?: string;
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
        /**
         * Поиск по содержанию записи, проверяет наличие.
         */
        search?: string;
        transaction_type?: /**
         * Фильтр по типу транзакции:
         *   - `ALL` — все,
         *   - `ORDERS` — заказы,
         *   - `RETURNS` — возвраты,
         *   - `SERVICES` — сервисные сборы,
         *   - `DEPOSIT` — депозит,
         *   - `OTHER` — другие.
         *
         */
        CreateCompanyTransactionsReportRequestTransactionType;
      }
      export interface ReportCreateDiscountedRequest {}
      export interface ReportCreateDiscountedResponse {
        /**
         * Уникальный идентификатор отчёта.
         */
        code?: string;
      }
      export interface ReportCreateProductsMovementReportRequest {
        /**
         * Дата, с которой будут данные в отчёте.
         */
        date_from?: string;
        /**
         * Дата, по которую будут данные в отчёте.
         */
        date_to?: string;
        language?: /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         *
         */
        ReportLanguage;
      }
      export interface ReportCreateReportResponse {
        result?: /* Результаты запроса. */ CreateReportResponseCode;
      }
      export interface ReportDiscountedInfoRequest {
        /**
         * Уникальный идентификатор отчёта.
         */
        code?: string;
      }
      export interface ReportDiscountedInfoResponse {
        report?: /* Информация об отчёте. */ ReportDiscountedInfoResponseReport;
      }
      /**
       * Информация об отчёте.
       */
      export interface ReportDiscountedInfoResponseReport {
        /**
         * Дата создания отчёта.
         */
        created_at?: string; // date-time
        /**
         * Ссылка на файл с отчётом.
         */
        file?: string;
        /**
         * Статус отчёта:
         * - `success` — успешно создан,
         * - `pending` — ожидает обработки,
         * - `processing` — обрабатывается,
         * - `failed` — ошибка при создании.
         *
         */
        status?: string;
        /**
         * Код ошибки при создании отчёта.
         */
        error?: string;
      }
      export interface ReportDiscountedListRequest {}
      export interface ReportDiscountedListResponse {
        /**
         * Список отчётов и данные по ним.
         */
        reports?: /* Информация об отчёте. */ ReportDiscountedInfoResponseReport[];
      }
      /**
       * Language
       * Язык ответа:
       *   - `RU` — русский,
       *   - `EN` — английский.
       *
       */
      export type ReportLanguage = string;
      /**
       * Тип отчёта:
       *   - `ALL` — все отчёты,
       *   - `SELLER_PRODUCTS` — отчёт по товарам,
       *   - `SELLER_TRANSACTIONS` — отчёт по транзакциям,
       *   - `SELLER_PRODUCT_PRICES` — отчёт по ценам товаров,
       *   - `SELLER_STOCK` — отчёт об остатках товаров,
       *   - `SELLER_PRODUCT_MOVEMENT` — отчёт о перемещении товаров,
       *   - `SELLER_RETURNS` — отчёт о возвратах,
       *   - `SELLER_POSTINGS` — отчёт об отправлениях,
       *   - `SELLER_FINANCE` — отчёт о финансах.
       *
       */
      export type ReportListRequestReportType = string;
      /**
       * Результаты запроса.
       */
      export interface ReportListResponseResult {
        /**
         * Массив со всеми сгенерированными отчётами.
         */
        reports?: /**
         * Common
         * Информация об отчёте.
         */
        ReportReport[];
        /**
         * Суммарное количество отчётов.
         */
        total?: number; // int32
      }
      /**
       * Common
       * Информация об отчёте.
       */
      export interface ReportReport {
        /**
         * Уникальный идентификатор отчёта.
         */
        code?: string;
        /**
         * Дата создания отчёта.
         */
        created_at?: string; // date-time
        /**
         * Код ошибки при генерации отчёта.
         */
        error?: string;
        /**
         * Ссылка на CSV-файл.
         */
        file?: string;
        /**
         * Массив с фильтрами, указанными при создании отчёта продавцом.
         */
        params?: {
          [name: string]: string;
        };
        /**
         * Тип отчёта:
         *   - `SELLER_PRODUCTS` — отчёт по товарам,
         *   - `SELLER_TRANSACTIONS` — отчёт по транзакциям,
         *   - `SELLER_PRODUCT_PRICES` — отчёт по ценам товаров,
         *   - `SELLER_STOCK` — отчёт об остатках товаров,
         *   - `SELLER_PRODUCT_MOVEMENT` — отчёт о перемещении товаров,
         *   - `SELLER_RETURNS` — отчёт о возвратах,
         *   - `SELLER_POSTINGS` — отчёт об отправлениях,
         *   - `SELLER_FINANCE` — отчёт о финансах.
         *
         */
        report_type?: string;
        /**
         * Статус генерации отчёта:
         *   - `success` — отчёт успешно создан,
         *   - `failed` — ошибка при создании отчёта.
         *
         */
        status?: string;
      }
      /**
       * ReportInfo
       */
      export interface ReportReportInfoRequest {
        /**
         * Уникальный идентификатор отчёта.
         */
        code?: string;
      }
      export interface ReportReportInfoResponse {
        result?: /**
         * Common
         * Информация об отчёте.
         */
        ReportReport;
      }
      /**
       * ReportList
       */
      export interface ReportReportListRequest {
        /**
         * Номер страницы.
         */
        page?: number; // int32
        /**
         * Количество значений на странице:
         *   - по умолчанию — 100,
         *   - маĸсимальное значение — 1000.
         *
         */
        page_size?: number; // int32
        report_type?: /**
         * Тип отчёта:
         *   - `ALL` — все отчёты,
         *   - `SELLER_PRODUCTS` — отчёт по товарам,
         *   - `SELLER_TRANSACTIONS` — отчёт по транзакциям,
         *   - `SELLER_PRODUCT_PRICES` — отчёт по ценам товаров,
         *   - `SELLER_STOCK` — отчёт об остатках товаров,
         *   - `SELLER_PRODUCT_MOVEMENT` — отчёт о перемещении товаров,
         *   - `SELLER_RETURNS` — отчёт о возвратах,
         *   - `SELLER_POSTINGS` — отчёт об отправлениях,
         *   - `SELLER_FINANCE` — отчёт о финансах.
         *
         */
        ReportListRequestReportType;
      }
      export interface ReportReportListResponse {
        result?: /* Результаты запроса. */ ReportListResponseResult;
      }
      export interface ResultError {
        /**
         * Код ошибки.
         */
        code?: string;
        /**
         * Тип ошибки:
         * - `warning` — предупреждение;
         * - `critical` — критическая ошибка.
         *
         */
        status?: string;
      }
      export interface ResultGetReturnsCompanyFBSItem {
        /**
         * Время приёма возврата от покупателя.
         */
        accepted_from_customer_moment?: string;
        /**
         * Нижний штрихкод на этикетке товара.
         */
        clearing_id?: number; // int64
        /**
         * Комиссия.
         */
        commission?: number; // double
        /**
         * Процент комиссии.
         */
        commission_percent?: number; // double
        /**
         * Идентификатор возврата.
         */
        id?: number; // int64
        /**
         * Если товар в пути — `true`.
         */
        is_moving?: boolean;
        /**
         * Признак вскрытия упаковки. `true`, если упаковка вскрыта.
         */
        is_opened?: boolean;
        /**
         * Последний день бесплатного хранения.
         */
        last_free_waiting_day?: string;
        /**
         * Идентификатор склада, в который везут товар.
         */
        place_id?: number; // int64
        /**
         * Название склада, в который везут товар.
         */
        moving_to_place_name?: string;
        /**
         * Стоимость доставки.
         */
        picking_amount?: number; // double
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Текущая цена товара без скидки.
         */
        price?: number; // double
        /**
         * Стоимость товара без учёта комиссии.
         */
        price_without_commission?: number; // double
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
        /**
         * Наименование товара.
         */
        product_name?: string;
        /**
         * Количество товара.
         */
        quantity?: number; // int64
        /**
         * Дата возврата товара.
         */
        return_date?: string;
        /**
         * Причина возврата.
         */
        return_reason_name?: string;
        /**
         * Дата готовности выдачи товара продавцу.
         */
        waiting_for_seller_date_time?: string;
        /**
         * Дата выдачи товара продавцу.
         */
        returned_to_seller_date_time?: string;
        /**
         * Срок хранения возврата в днях.
         */
        waiting_for_seller_days?: number; // int64
        /**
         * Стоимость хранения возврата.
         */
        returns_keeping_cost?: number; // double
        /**
         * Идентификатор товара на Ozon.
         */
        sku?: number; // int64
        /**
         * Статус возврата.
         */
        status?: string;
      }
      export interface ReturnsGetReturnsCompanyFBSRequest {
        filter?: /* Фильтр. */ ReturnsGetReturnsCompanyFBSRequestFilter;
        /**
         * Количество значений в ответе:
         *   - максимум — 1000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
      }
      /**
       * Фильтр.
       */
      export interface ReturnsGetReturnsCompanyFBSRequestFilter {
        /**
         * Время приёма возврата от поĸупателя.
         */
        accepted_from_customer_moment?: any;
        /**
         * Последний день бесплатного хранения.
         */
        last_free_waiting_day?: any;
        /**
         * Идентификатор заказа.
         */
        order_id?: number; // int64
        /**
         * Идентификатор отправления.
         */
        posting_number?: string[];
        /**
         * Название товара.
         */
        product_name?: string;
        /**
         * Артикул товара.
         */
        product_offer_id?: string;
        /**
         * Статус возврата:
         *   - `returned_to_seller` — возвращён продавцу,
         *   - `waiting_for_seller` — ожидает получения продавцом,
         *   - `accepted_from_customer` — принят от покупателя,
         *   - `cancelled_with_compensation` — отменено с компенсацией,
         *   - `ready_for_shipment` — готов к отправке,
         *   - `moving` — в пути,
         *   - `disposed` — утилизирован,
         *   - `disposing` — на утилизации.
         *
         */
        status?: string;
      }
      export interface ReturnsGetReturnsCompanyFBSResponse {
        result?: /* Результат работы метода. */ GetReturnsCompanyFBSResponseResult;
      }
      export interface ReturnsGetReturnsCompanyFboRequest {
        filter?: /* Фильтр. */ ReturnsGetReturnsCompanyFboRequestFilter;
        /**
         * Количество значений в ответе:
         *   - максимум — 1000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
      }
      /**
       * Фильтр.
       */
      export interface ReturnsGetReturnsCompanyFboRequestFilter {
        /**
         * Идентификатор отправления.
         */
        posting_number?: string;
        /**
         * Статус возврата:
         *   - `Created` — возврат создан,
         *   - `ReturnedToOzon` — возврат на складе Ozon.
         *
         */
        status?: string[];
      }
      export interface ReturnsGetReturnsCompanyFboResponse {
        /**
         * Счётчик элементов в ответе.
         */
        count?: number; // int64
        /**
         * Информация о возвратах.
         */
        returns?: /* Информация о возврате. */ GetReturnsCompanyFboResponseGetReturnsCompanyItemFbo[];
      }
      export interface RpcStatus {
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
      export interface RpcStatusV1PolygonBind {
        code?: number; // int32
        details?: ProtobufAny[];
        /**
         * Сообщение об ошибке:
         *
         *   - **delivery target polygons not provided** — полигоны не переданы;
         *   - **no delivery method id provided** — delivery_method_id не передан;
         *   - **no warehouse points provided** — не передана координата склада;
         *   - **polygon id .... not found** — переданы ID полигонов, которые не найдены в базе данных;
         *   - **not found polygon for warehouse point** — точка склада не принадлежит ни одному переданному полигону.
         *
         */
        message?: string;
      }
      export interface RpcStatusV1PolygonCreate {
        /**
         * Код ошибки.
         */
        code?: number; // int32
        /**
         * Информация об ошибке.
         */
        details?: ProtobufAny[];
        /**
         * Сообщение об ошибке:
         *
         *   - `coordinates not provided` — координаты не переданы;
         *   - `invalid coordinates, must have two points in coordinate` — в какой-то точке передана только широта или долгота, нужно передать две точки;
         *   - `the first and last points in loop must be same` — первая и последняя точка не совпадают (по стандартным правилам geojson точки должны совпадать);
         *   - `non-full loops must have at least 4 unique vertices for polygons` — для полигона передано менее четырех точек.
         *
         */
        message?: string;
      }
      export interface SellerApiActivateProductV1Request {
        /**
         * Идентификатор акции.
         */
        action_id?: number; // double
        /**
         * Список товаров.
         */
        products?: SellerApiProductPrice[];
      }
      export interface SellerApiGetSellerActionsV1Response {
        /**
         * Результаты запроса.
         */
        result?: GetSellerActionsV1ResponseAction[];
      }
      /**
       * Список товаров.
       */
      export interface SellerApiGetSellerProductV1Request {
        /**
         * Идентификатор акции.
         */
        action_id?: number; // double
        /**
         * Количество ответов на странице. По умолчанию — 100.
         */
        limit?: number; // double
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset=10`, ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // double
      }
      export interface SellerApiGetSellerProductV1Response {
        result?: /* Результаты запроса. */ SellerApiGetSellerProductV1ResponseResult;
      }
      /**
       * Результаты запроса.
       */
      export interface SellerApiGetSellerProductV1ResponseResult {
        /**
         * Список товаров.
         */
        products?: SellerApiProduct[];
        /**
         * Общее количество товаров, которое доступно для акции.
         */
        total?: number; // double
      }
      export interface SellerApiProduct {
        /**
         * Идентификатор товара.
         */
        id?: number; // double
        /**
         * Текущая цена товара без скидки.
         */
        price?: number; // double
        /**
         * Цена товара по акции.
         */
        action_price?: number; // double
        /**
         * Максимально возможная цена товара по акции.
         */
        max_action_price?: number; // double
        /**
         * Тип добавления товара в акцию: автоматически или вручную продавцом.
         *
         */
        add_mode?: string;
        /**
         * Минимальное число единиц товара в акции типа «Скидка на сток».
         */
        min_stock?: number; // double
        /**
         * Число единиц товара в акции типа «Скидка на сток».
         */
        stock?: number; // double
      }
      export interface SellerApiProductIDsV1Request {
        /**
         * Идентификатор акции.
         */
        action_id?: number; // double
        /**
         * Список идентификаторов товаров.
         */
        product_ids?: number /* double */[];
      }
      export interface SellerApiProductPrice {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // double
        /**
         * Цена товара по акции.
         */
        action_price?: number; // double
        /**
         * Количество единиц товара в акции типа «Скидка на сток».
         */
        stock?: number; // double
      }
      export interface SellerApiProductV1Response {
        result?: /* Результаты запроса. */ SellerApiProductV1ResponseResult;
      }
      export interface SellerApiProductV1ResponseDeactivate {
        result?: /* Результаты запроса. */ SellerApiProductV1ResponseResultDeactivate;
      }
      export interface SellerApiProductV1ResponseProduct {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // double
        /**
         * Причина, почему товар не добавлен в акцию.
         */
        reason?: string;
      }
      export interface SellerApiProductV1ResponseProductDeactivate {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // double
        /**
         * Причина, почему товар не удалён из акции.
         */
        reason?: string;
      }
      /**
       * Результаты запроса.
       */
      export interface SellerApiProductV1ResponseResult {
        /**
         * Список идентификаторов товаров, которые добавлены в акцию.
         */
        product_ids?: number /* double */[];
        /**
         * Список товаров, которые не удалось добавить в акцию.
         */
        rejected?: SellerApiProductV1ResponseProduct[];
      }
      /**
       * Результаты запроса.
       */
      export interface SellerApiProductV1ResponseResultDeactivate {
        /**
         * Список идентификаторов товаров, которые удалены из акции.
         */
        product_ids?: number /* double */[];
        /**
         * Список товаров, которые не удалось удалить из акции.
         */
        rejected?: SellerApiProductV1ResponseProductDeactivate[];
      }
      export type SellerServiceanalyticsDimension = string;
      /**
       * Вид сортировки:
       *   - `ASC` — по возрастанию,
       *   - `DESC` — по убыванию.
       *
       */
      export type SortingOrder = string;
      export interface SupplierAvailableWarehousesResponseCapacity {
        /**
         * Начало периода по местному времени.
         */
        start?: string; // date-time
        /**
         * Конец периода по местному времени.
         */
        end?: string; // date-time
        /**
         * Среднее количество товаров, которые склад может принять в день за период.
         */
        value?: number; // int32
      }
      export interface SupplierAvailableWarehousesResponseResult {
        schedule?: /* Загруженность. */ SupplierAvailableWarehousesResponseSchedule;
        warehouse?: /* Склад. */ SupplierAvailableWarehousesResponseWarehouse;
      }
      /**
       * Загруженность.
       */
      export interface SupplierAvailableWarehousesResponseSchedule {
        /**
         * Данные о количестве поставляемых на склад товаров.
         */
        capacity?: any;
        /**
         * Ближайшая доступная дата для записи на поставку по местному времени.
         */
        date?: string; // date-time
      }
      /**
       * Склад.
       */
      export interface SupplierAvailableWarehousesResponseWarehouse {
        /**
         * Идентификатор склада.
         */
        id?: string;
        /**
         * Название склада.
         */
        name?: string;
      }
      export interface V1ActivateHotSalesProductsRequest {
        /**
         * Идентификатор акции Hot Sale.
         */
        hotsale_id?: number; // double
        /**
         * Товары, которые нужно добавить в акцию. Максимальное количество в одном запросе — 100.
         */
        products?: V1ActivateHotSalesProductsRequestActivateProduct[];
      }
      export interface V1ActivateHotSalesProductsRequestActivateProduct {
        /**
         * Цена товара по акции.
         */
        action_price?: number; // double
        /**
         * Идентификатор товара.
         */
        product_id?: number; // double
        /**
         * Число единиц товара в акции типа «Скидка на сток».
         */
        stock?: number; // double
      }
      export interface V1AddStrategyItemsRequest {
        /**
         * Список идентификаторов товаров. Максимальное количество — 50.
         */
        product_id?: string /* int64 */[];
        /**
         * Идентификатор стратегии.
         */
        strategy_id?: string;
      }
      export interface V1AddStrategyItemsResponse {
        result?: /* Результат работы метода. */ V1AddStrategyItemsResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1AddStrategyItemsResponseResult {
        /**
         * Товары с ошибками.
         */
        errors?: AddStrategyItemsResponseError[];
        /**
         * Количество товаров с ошибками.
         */
        failed_product_count?: number; // int32
      }
      export interface V1AnalyticsItemTurnoverDataV3Request {
        /**
         * Дата. 1-е или 15-е число месяца в формате: 2021-05-01.
         *   - 1-е число месяца вводится для получения отчёта за первую половину месяца.
         *   - 15-е число вводится для получения отчёта за вторую половину месяца.
         *
         */
        date_from?: string;
      }
      export interface V1AnalyticsItemTurnoverDataV3Response {
        /**
         * Данные по категориям.
         */
        categories?: AnalyticsItemTurnoverDataV3ResponseCategory[];
        /**
         * Стоимость размещения в рублях.
         */
        commission_total?: number; // double
        /**
         * Дата выгрузки.
         */
        date?: string;
        /**
         * Период отчёта.
         */
        period?: string;
      }
      export interface V1ApproveDeclineDiscountTasksResponse {
        result?: /* Результат работы метода. */ V1ApproveDeclineDiscountTasksResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1ApproveDeclineDiscountTasksResponseResult {
        /**
         * Ошибки при создании заявки.
         */
        fail_details?: ApproveDeclineDiscountTasksResponseFailDetail[];
        /**
         * Количество заявок с успешной сменой статуса.
         */
        success_count?: number; // int32
        /**
         * Количество заявок, у которых не удалось сменить статус.
         */
        fail_count?: number; // int32
      }
      export interface V1ApproveDiscountTasksRequest {
        /**
         * Список заявок.
         */
        tasks?: V1ApproveDiscountTasksRequestTask[];
      }
      export interface V1ApproveDiscountTasksRequestTask {
        /**
         * Идентификатор заявки.
         */
        id?: number; // uint64
        /**
         * Согласованная цена.
         */
        approved_price?: number; // double
        /**
         * Комментарий продавца к заявке.
         */
        seller_comment?: string;
        /**
         * Одобренное минимальное количество товаров.
         */
        approved_quantity_min?: number; // uint64
        /**
         * Одобренное максимальное количество товаров.
         */
        approved_quantity_max?: number; // uint64
      }
      /**
       * Информация о сертификате.
       */
      export interface V1Certificate {
        /**
         * Идентификатор.
         */
        certificate_id?: number; // int32
        /**
         * Номер.
         */
        certificate_number?: string;
        /**
         * Название.
         */
        certificate_name?: string;
        /**
         * Тип.
         */
        type_code?: string;
        /**
         * Статус.
         */
        status_code?: string;
        /**
         * Тип соответствия требованиям.
         */
        accordance_type_code?: string;
        /**
         * Причина отклонения сертификата.
         */
        rejection_reason_code?: string;
        /**
         * Комментарий модератора.
         */
        verification_comment?: string;
        /**
         * Дата создания.
         */
        issue_date?: string; // date-time
        /**
         * Дата окончания действия.
         */
        expire_date?: string; // date-time
        /**
         * Количество товаров, привязанных к сертификату.
         */
        products_count?: number; // int32
      }
      export interface V1Competitor {
        /**
         * Коэффициент, на который будет умножаться минимальная цена среди конкурентов. Допустимый диапазон — от `0.5` до `1.2`.
         */
        coefficient?: number; // float
        /**
         * Идентификатор конкурента.
         */
        competitor_id?: number; // int64
      }
      /**
       * Результат запроса.
       */
      export interface V1ConditionalCancellation {
        /**
         * Идентификатор заявки на отмену.
         */
        cancellation_id?: number; // int64
        /**
         * Номер отправления.
         */
        posting_number?: string;
        cancellation_reason?: /* Причина отмены. */ ConditionalCancellationCancellationReason;
        /**
         * Дата создания заявки на отмену.
         */
        cancelled_at?: string; // date-time
        /**
         * Комментарий к заявке на отмену, введённый инициатором отмены вручную.
         */
        cancellation_reason_message?: string;
        /**
         * Тип интеграции со службой доставки.
         */
        tpl_integration_type?: string;
        state?: /* Статус заявки на отмену. */ ConditionalCancellationState;
        /**
         * Инициатор отмены:
         * - `OZON` — Ozon,
         * - `SELLER` — продавец,
         * - `CLIENT` — покупатель,
         * - `SYSTEM` — система,
         * - `DELIVERY` — служба доставки.
         *
         */
        cancellation_initiator?:
          | "OZON"
          | "SELLER"
          | "CLIENT"
          | "SYSTEM"
          | "DELIVERY";
        /**
         * Дата создания заказа.
         */
        order_date?: string; // date-time
        /**
         * Комментарий, оставленный при подтверждении или отклонении заявки на отмену.
         */
        approve_comment?: string;
        /**
         * Дата подтверждения или отклонения заявки на отмену.
         */
        approve_date?: string; // date-time
        /**
         * Дата, после которой заявка будет автоматически подтверждена.
         */
        auto_approve_date?: string; // date-time
      }
      export interface V1ConditionalCancellationMoveRequest {
        /**
         * Идентификатор заявки на отмену.
         */
        cancellation_id: number; // int64
        /**
         * Комментарий.
         */
        comment?: string;
      }
      export interface V1CreateLabelBatchRequest {
        /**
         * Номера отправлений, для которых нужны этикетки.
         */
        posting_number?: any;
      }
      export interface V1CreateLabelBatchResponse {
        result?: /* Результат работы метода. */ V1CreateLabelBatchResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1CreateLabelBatchResponseResult {
        /**
         * Идентификатор задания на формирование этикеток.
         */
        task_id?: number; // int64
      }
      export interface V1CreatePricingStrategyRequest {
        /**
         * Список конкурентов.
         */
        competitors?: V1Competitor[];
        /**
         * Название стратегии.
         */
        strategy_name?: string;
      }
      export interface V1CreatePricingStrategyResponse {
        result?: /* Результат работы метода. */ V1CreatePricingStrategyResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1CreatePricingStrategyResponseResult {
        /**
         * Идентификатор стратегии.
         */
        strategy_id?: string;
      }
      export interface V1DeactivateHotSalesProductsRequest {
        /**
         * Идентификатор акции Hot Sale.
         */
        hotsale_id?: number; // double
        /**
         * Список идентификаторов товаров. Максимальное количество в одном запросе — 100.
         */
        product_ids?: number /* double */[];
      }
      export interface V1DeclineDiscountTasksRequest {
        /**
         * Список заявок.
         */
        tasks?: V1DeclineDiscountTasksRequestTask[];
      }
      export interface V1DeclineDiscountTasksRequestTask {
        /**
         * Идентификатор заявки.
         */
        id?: number; // uint64
        /**
         * Комментарий продавца к заявке.
         */
        seller_comment?: string;
      }
      export interface V1DeleteStrategyItemsResponse {
        result?: /* Результат работы метода. */ V1DeleteStrategyItemsResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1DeleteStrategyItemsResponseResult {
        /**
         * Количество товаров с ошибками.
         */
        failed_product_count?: number; // int32
      }
      /**
       * Статус заявки на скидку:
       * - `NEW` — новая,
       * - `SEEN` — просмотренная,
       * - `APPROVED` — одобренная,
       * - `PARTLY_APPROVED` — одобренная частично,
       * - `DECLINED` — отклонённая,
       * - `AUTO_DECLINED` — отклонена автоматически,
       * - `DECLINED_BY_USER` — отклонена покупателем,
       * - `COUPON` — скидка по купону,
       * - `PURCHASED` — купленная.
       *
       */
      export type V1DiscountTaskStatus =
        | "NEW"
        | "SEEN"
        | "APPROVED"
        | "PARTLY_APPROVED"
        | "DECLINED"
        | "AUTO_DECLINED"
        | "DECLINED_BY_USER"
        | "COUPON"
        | "PURCHASED";
      export interface V1Empty {}
      export interface V1GetCompetitorsRequest {
        /**
         * Страница списка, с которой нужно выгрузить конкурентов. Минимальное значение — `1`.
         */
        page?: number; // int64
        /**
         * Максимальное количество конкурентов на странице. Допустимы значения от `1` до `50`.
         */
        limit?: number; // int64
      }
      export interface V1GetCompetitorsResponse {
        /**
         * Список конкурентов.
         */
        competitor?: GetCompetitorsResponseCompetitorInfo[];
        /**
         * Общее количество конкурентов.
         */
        total?: number; // int32
      }
      export interface V1GetConditionalCancellationListRequest {
        filters?: /* Фильтры. */ GetConditionalCancellationListRequestFilters;
        /**
         * Количество заявок в ответе.
         */
        limit: number; // int32
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset=10`, ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int32
        with?: /* Дополнительная информация. */ GetConditionalCancellationListRequestWith;
      }
      export interface V1GetConditionalCancellationListResponse {
        /**
         * Список заявок на отмену.
         */
        result?: any;
        /**
         * Общее количество заявок по заданным фильтрам.
         */
        total?: number; // int32
        counters?: /* Cчётчик заявок в разных статусах. */ GetConditionalCancellationListResponseCounters;
      }
      export interface V1GetConditionalCancellationRequest {
        /**
         * Идентификатор заявки на отмену.
         */
        cancellation_id: number; // int64
      }
      export interface V1GetConditionalCancellationResponse {
        result?: /* Результат запроса. */ V1ConditionalCancellation;
      }
      export interface V1GetDiscountTaskListRequest {
        status?: /**
         * Статус заявки на скидку:
         * - `NEW` — новая,
         * - `SEEN` — просмотренная,
         * - `APPROVED` — одобренная,
         * - `PARTLY_APPROVED` — одобренная частично,
         * - `DECLINED` — отклонённая,
         * - `AUTO_DECLINED` — отклонена автоматически,
         * - `DECLINED_BY_USER` — отклонена покупателем,
         * - `COUPON` — скидка по купону,
         * - `PURCHASED` — купленная.
         *
         */
        V1DiscountTaskStatus;
        /**
         * Страница, с которой нужно выгрузить список заявок на скидку.
         */
        page?: number; // uint64
        /**
         * Максимальное количество заявок на странице.
         */
        limit?: number; // uint64
      }
      export interface V1GetDiscountTaskListResponse {
        /**
         * Список заявок.
         */
        result?: V1GetDiscountTaskListResponseTask[];
      }
      export interface V1GetDiscountTaskListResponseTask {
        /**
         * Идентификатор заявки.
         */
        id?: number; // uint64
        /**
         * Дата создания заявки.
         */
        created_at?: string; // date-time
        /**
         * Время окончания действия заявки.
         */
        end_at?: string; // date-time
        /**
         * Время для изменения решения.
         */
        edited_till?: string; // date-time
        /**
         * Статус заявки.
         */
        status?: string;
        /**
         * Имя покупателя.
         */
        customer_name?: string;
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // uint64
        /**
         * Комментарий покупателя к заявке.
         */
        user_comment?: string;
        /**
         * Комментарий продавца к заявке.
         */
        seller_comment?: string;
        /**
         * Цена по заявке.
         */
        requested_price?: number; // double
        /**
         * Одобренная цена.
         */
        approved_price?: number; // double
        /**
         * Цена товара до всех скидок.
         */
        original_price?: number; // double
        /**
         * Скидка в рублях.
         */
        discount?: number; // double
        /**
         * Скидка в процентах.
         */
        discount_percent?: number; // double
        /**
         * Базовая цена, по которой товар продаётся на Ozon, если не участвует в акции.
         */
        base_price?: number; // double
        /**
         * Минимальное значение цены после автоприменения скидок и акций.
         */
        min_auto_price?: number; // double
        /**
         * Идентификатор предыдущей заявки от покупателя по этому товару.
         */
        prev_task_id?: number; // uint64
        /**
         * Является ли товар уценённым. `true`, если уценённый.
         */
        is_damaged?: boolean;
        /**
         * Дата модерации: просмотра, одобрения или отклонения заявки.
         *
         */
        moderated_at?: string; // date-time
        /**
         * Скидка в рублях, которую одобрил продавец. Передайте значение `0`, если продавец не одобрял заявку.
         */
        approved_discount?: number; // double
        /**
         * Скидка в процентах, которую одобрил продавец. Передайте значение `0`, если продавец не одобрял заявку.
         */
        approved_discount_percent?: number; // double
        /**
         * Покупал ли пользователь товар. `true`, если покупал.
         */
        is_purchased?: boolean;
        /**
         * Была ли заявка промодерирована автоматически. `true`, если модерация была автоматической.
         */
        is_auto_moderated?: boolean;
        /**
         * Артикул товара.
         */
        offer_id?: string;
        /**
         * Электронный адрес сотрудника продавца, который обработал заявку.
         */
        email?: string;
        /**
         * Фамилия сотрудника продавца, который обработал заявку.
         */
        last_name?: string;
        /**
         * Имя сотрудника продавца, который обработал заявку.
         */
        first_name?: string;
        /**
         * Отчество сотрудника продавца, который обработал заявку.
         */
        patronymic?: string;
        /**
         * Минимальное одобренное количество товаров.
         */
        approved_quantity_min?: number; // uint64
        /**
         * Максимальное одобренное количество товаров.
         */
        approved_quantity_max?: number; // uint64
        /**
         * Запрошенное минимальное количество товаров.
         */
        requested_quantity_min?: number; // uint64
        /**
         * Запрошенное максимальное количество товаров.
         */
        requested_quantity_max?: number; // uint64
        /**
         * Цена по заявке c региональной наценкой.
         */
        requested_price_with_fee?: number; // double
        /**
         * Одобренная цена с региональной наценкой.
         */
        approved_price_with_fee?: number; // double
        /**
         * Региональная наценка в процентах.
         */
        approved_price_fee_percent?: number; // double
      }
      export interface V1GetEtgbRequest {
        date?: /* Фильтр по периоду создания деклараций. */ GetEtgbRequestDate;
      }
      export interface V1GetEtgbResponse {
        /**
         * Результат запроса.
         */
        result?: GetEtgbResponseResult[];
      }
      export interface V1GetHotSalesListRequest {}
      export interface V1GetHotSalesListResponse {
        /**
         * Результат работы метода.
         */
        result?: GetHotSalesListResponseHotSale[];
      }
      export interface V1GetHotSalesProductsRequest {
        /**
         * Идентификатор акции Hot Sale.
         */
        hotsale_id?: number; // double
        /**
         * Количество элементов в ответе. По умолчанию — 100.
         */
        limit?: number; // double
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // double
      }
      export interface V1GetHotSalesProductsResponse {
        result?: /* Результат работы метода. */ V1GetHotSalesProductsResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1GetHotSalesProductsResponseResult {
        /**
         * Список товаров.
         */
        products?: any;
        /**
         * Общее количество товаров, которое доступно для акции.
         */
        total?: number; // double
      }
      export interface V1GetLabelBatchRequest {
        /**
         * Номер задания на формирование этикеток из ответа метода [/v1/posting/fbs/package-label/create](#operation/PostingAPI_CreateLabelBatch).
         */
        task_id: number; // int64
      }
      export interface V1GetLabelBatchResponse {
        result?: /* Результат работы метода. */ V1GetLabelBatchResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1GetLabelBatchResponseResult {
        /**
         * Код ошибки.
         */
        error?: string;
        /**
         * Ссылка на файл с этикетками.
         */
        file_url?: string;
        /**
         * Статус формирования этикеток:
         * - `pending` — задание в очереди.
         * - `in_progress` — формируются.
         * - `completed` — файл с этикетками готов.
         * - `error` — при формировании файла произошла ошибка.
         *
         */
        status?: string;
      }
      export interface V1GetProductInfoDiscountedRequest {
        /**
         * Список SKU уценённых товаров.
         */
        discounted_skus?: any;
      }
      export interface V1GetProductInfoDiscountedResponse {
        /**
         * Информация об уценке и основном товаре.
         */
        items?: any;
      }
      export interface V1GetProductInfoDiscountedResponseItem {
        /**
         * Комментарий к причине повреждения.
         */
        comment_reason_damaged?: string;
        /**
         * Состояние товара — новый или Б/У.
         */
        condition?: string;
        /**
         * Состояние товара по шкале от 1 до 7:
         * - 1 — удовлетворительное,
         * - 2 — хорошее,
         * - 3 — очень хорошее,
         * - 4 — отличное,
         * - 5–7 — как новый.
         *
         */
        condition_estimation?: string;
        /**
         * Дефекты товара.
         */
        defects?: string;
        /**
         * SKU уценённого товара.
         */
        discounted_sku?: number; // int64
        /**
         * Описание механического повреждения.
         */
        mechanical_damage?: string;
        /**
         * Описание повреждения упаковки.
         */
        package_damage?: string;
        /**
         * Признак нарушения целостности упаковки.
         */
        packaging_violation?: string;
        /**
         * Причина повреждения.
         */
        reason_damaged?: string;
        /**
         * Признак, что товар отремонтирован.
         */
        repair?: string;
        /**
         * Признак, что товар некомплектный.
         */
        shortage?: string;
        /**
         * SKU основного товара.
         */
        sku?: number; // int64
        /**
         * Наличие у товара действующей гарантии.
         */
        warranty_type?: string;
      }
      export interface V1GetProductInfoSubscriptionRequest {
        /**
         * Список SKU, идентификаторов товара в системе Ozon.
         */
        skus?: string /* int64 */[];
      }
      export interface V1GetProductInfoSubscriptionResponse {
        /**
         * Результат работы метода.
         */
        result?: V1GetProductInfoSubscriptionResponseResult[];
      }
      export interface V1GetProductInfoSubscriptionResponseResult {
        /**
         * Количество подписавшихся пользователей.
         */
        count?: number; // int64
        /**
         * Идентификатор товара в системе Ozon, SKU.
         */
        sku?: number; // int64
      }
      export interface V1GetProductRatingBySkuRequest {
        /**
         * Список SKU товаров, для которых нужно вернуть контент-рейтинг.
         */
        skus?: any;
      }
      export interface V1GetProductRatingBySkuResponse {
        /**
         * Контент-рейтинг товаров.
         */
        products?: any;
      }
      export interface V1GetRestrictionsRequest {
        /**
         * Номер отправления, для которого нужно определить ограничения.
         */
        posting_number: string;
      }
      export interface V1GetRestrictionsResponse {
        result?: V1Restriction;
      }
      export interface V1GetStrategyIDsByItemIDsResponse {
        result?: /* Результат работы метода. */ V1GetStrategyIDsByItemIDsResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1GetStrategyIDsByItemIDsResponseResult {
        /**
         * Информация о товаре.
         */
        products_info?: GetStrategyIDsByItemIDsResponseProductInfo[];
      }
      export interface V1GetStrategyItemInfoRequest {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface V1GetStrategyItemInfoResponse {
        result?: /* Результат работы метода. */ V1GetStrategyItemInfoResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1GetStrategyItemInfoResponseResult {
        /**
         * Идентификатор стратегии.
         */
        strategy_id?: string;
        /**
         * `true`, если товар участвует в стратегии ценообразования.
         *
         */
        is_enabled?: boolean;
        /**
         * Цена по стратегии.
         */
        strategy_product_price?: number; // int32
        /**
         * Дата установки цены по стратегии.
         */
        price_downloaded_at?: string;
        /**
         * Идентификатор конкурента.
         */
        strategy_competitor_id?: number; // int64
        /**
         * Ссылка на товар конкурента.
         */
        strategy_competitor_product_url?: string;
      }
      export interface V1GetStrategyItemsResponse {
        result?: /* Список товаров. */ V1GetStrategyItemsResponseResult;
      }
      /**
       * Список товаров.
       */
      export interface V1GetStrategyItemsResponseResult {
        /**
         * Идентификатор товара.
         */
        product_id?: string /* int64 */[];
      }
      export interface V1GetStrategyListRequest {
        /**
         * Страница списка, с которой нужно выгрузить стратегии. Минимальное значение — `1`.
         */
        page?: number; // int64
        /**
         * Максимальное количество стратегий на странице. Допустимые значения — от `1` до `50`.
         */
        limit?: number; // int64
      }
      export interface V1GetStrategyListResponse {
        /**
         * Список стратегий.
         */
        strategies?: GetStrategyListResponseStrategy[];
        /**
         * Общее количество стратегий.
         */
        total?: number; // int32
      }
      export interface V1GetStrategyResponse {
        result?: /* Результат работы метода. */ V1GetStrategyResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V1GetStrategyResponseResult {
        /**
         * Список конкурентов.
         */
        competitors?: V1Competitor[];
        /**
         * Статус стратегии:
         * - `true` — включена,
         * - `false` — отключена.
         *
         */
        enabled?: boolean;
        /**
         * Название стратегии.
         */
        name?: string;
        /**
         * Тип стратегии:
         * - `MIN_EXT_PRICE` — системная стратегия,
         * - `COMP_PRICE` — пользовательская стратегия.
         *
         */
        type?: string;
        /**
         * Тип последнего изменения стратегии:
         *   - `strategyEnabled` — возобновлена,
         *   - `strategyDisabled` — остановлена,
         *   - `strategyChanged` — обновлена,
         *   - `strategyCreated` — создана,
         *   - `strategyItemsListChanged` — изменён набор товаров в стратегии.
         *
         */
        update_type?: string;
      }
      export interface V1GetSupplyOrderItemsRequest {
        /**
         * Номер страницы, возвращаемой в запросе.
         */
        page: number; // int32
        /**
         * Количество элементов на странице.
         */
        page_size: number; // int32
        /**
         * Идентификатор заявки на поставку.
         */
        supply_order_id: number; // int64
      }
      export interface V1GetSupplyOrderItemsResponse {
        /**
         * Признак, ответ содержит не все товары из заявки:
         * - `true` — сделайте повторный запрос с новыми значениями параметров `page` и `page_size` для получения информации об остальных товаров;
         * - `false` — ответ содержит все товары по запросу.
         *
         */
        has_next?: boolean;
        /**
         * Список товаров.
         */
        items?: GetSupplyOrderItemsResponseItem[];
        /**
         * Общее количество товаров в заявке.
         */
        total_items_count?: number; // int32
      }
      export interface V1GetSupplyOrderRequest {
        /**
         * Идентификатор заявки на поставку.
         */
        supply_order_id: number; // int64
      }
      export interface V1GetSupplyOrderResponse {
        /**
         * Дата создания заявки на поставку.
         */
        created_at?: string;
        local_timeslot?: /* Интервал поставки по местному времени. */ V1Timeslot;
        /**
         * Дата, с которой вы хотите привезти поставку на склад. Только для заявок с вРЦ.
         */
        preferred_supply_date_from?: string;
        /**
         * Дата, до которой вы хотите привезти поставку на склад. Только для заявок с вРЦ.
         */
        preferred_supply_date_to?: string;
        seller_warehouse?: /* Ваш собственный склад, с которого вы повезёте товары на склад поставки. Только для заявок с вРЦ. */ V1SellerWarehouse;
        /**
         * Статус поставки по заявке:
         * - `DRAFT` — черновик заявки. Только для заявок с вРЦ.
         * - `SUPPLY_VARIANTS_ARRANGING` — подбор вариантов отгрузки. Только для заявок с вРЦ.
         * - `HAS_NO_SUPPLY_VARIANTS_ARCHIVE` — нет вариантов отгрузки. Заявка в архиве.
         * - `HAS_NO_SUPPLY_VARIANTS_NEW` — нет вариантов отгрузки.
         * - `SUPPLY_VARIANT_CONFIRMATION` — согласование отгрузки. Только для заявок с вРЦ.
         * - `TIMESLOT_BOOKING` — бронирование времени.
         * - `DATA_FILLING` — заполнение данных.
         * - `READY_TO_SUPPLY` — готова к отгрузке.
         * - `ACCEPTED_AT_SUPPLY_WAREHOUSE` — принята на точке отгрузки.
         * - `IN_TRANSIT` — в пути.
         * - `ACCEPTANCE_AT_STORAGE_WAREHOUSE` — приёмка на складе.
         * - `REPORTS_CONFIRMATION_AWAITING` — согласование актов.
         * - `REPORT_REJECTED` — спор.
         * - `COMPLETED` — завершена.
         * - `REJECTED_AT_SUPPLY_WAREHOUSE` — отказано в приёмке.
         * - `CANCELLED` — отменена.
         * - `OVERDUE` — просрочена.
         *
         */
        state?: string;
        /**
         * Идентификатор заявки на поставку.
         */
        supply_order_id?: number; // int64
        /**
         * Номер заявки на поставку.
         */
        supply_order_number?: string;
        supply_warehouse?: /* Склад поставки. */ V1Warehouse;
        /**
         * Время в секундах, оставшееся на заполнение данных по поставке. Только для заявок с вРЦ.
         */
        time_left_to_prepare_supply?: number; // int64
        /**
         * Время в секундах, оставшееся на выбор варианта отгрузки. Только для заявок с вРЦ.
         */
        time_left_to_select_supply_variant?: number; // int64
        /**
         * Количество товаров в заявке.
         */
        total_items_count?: number; // int32
        /**
         * Общее количеств единиц товара в заявке.
         */
        total_quantity?: number; // int32
        vehicle_info?: /* Информация о водителе и автомобиле. */ V1VehicleInfo;
      }
      export interface V1GetSupplyOrdersListRequest {
        /**
         * Номер страницы, возвращаемой в запросе.
         */
        page: number; // int32
        /**
         * Количество элементов на странице.
         */
        page_size: number; // int32
        /**
         * Фильтр по статусу поставки по заявке:
         * - `DRAFT` — черновик заявки. Только для заявок с вРЦ.
         * - `SUPPLY_VARIANTS_ARRANGING` — подбор вариантов отгрузки. Только для заявок с вРЦ.
         * - `HAS_NO_SUPPLY_VARIANTS_ARCHIVE` — нет вариантов отгрузки. Заявка в архиве. Только для заявок с вРЦ.
         * - `HAS_NO_SUPPLY_VARIANTS_NEW` — нет вариантов отгрузки. Только для заявок с вРЦ.
         * - `SUPPLY_VARIANT_CONFIRMATION` — согласование отгрузки. Только для заявок с вРЦ.
         * - `TIMESLOT_BOOKING` — бронирование времени.
         * - `DATA_FILLING` — заполнение данных.
         * - `READY_TO_SUPPLY` — готова к отгрузке.
         * - `ACCEPTED_AT_SUPPLY_WAREHOUSE` — принята на точке отгрузки.
         * - `IN_TRANSIT` — в пути.
         * - `ACCEPTANCE_AT_STORAGE_WAREHOUSE` — приёмка на складе.
         * - `REPORTS_CONFIRMATION_AWAITING` — согласование актов.
         * - `REPORT_REJECTED` — спор.
         * - `COMPLETED` — завершена.
         * - `REJECTED_AT_SUPPLY_WAREHOUSE` — отказано в приёмке.
         * - `CANCELLED` — отменена.
         * - `OVERDUE` — просрочена.
         *
         */
        states?: string[];
      }
      export interface V1GetSupplyOrdersListResponse {
        /**
         * Признак, ответ содержит не все заявки по запросу:
         * - `true` — сделайте повторный запрос с новыми значениями параметров `page` и `page_size` для получения информации об остальных заявках;
         * - `false` — ответ содержит все заявки по запросу.
         *
         */
        has_next?: boolean;
        /**
         * Список заявок на поставку.
         */
        supply_orders?: GetSupplyOrdersListResponseSupplyOrder[];
        /**
         * Общее количество заявок.
         */
        total_supply_orders_count?: number; // int32
      }
      export interface V1HotSaleProduct {
        /**
         * Цена товара по акции.
         */
        action_price?: number; // double
        /**
         * Дата участия товара в акции в формате `YYYY-MM-DD`.
         */
        date_day_promo?: string;
        /**
         * Идентификатор товара.
         */
        id?: number; // double
        /**
         * Признак участия товара в акции.
         */
        is_active?: boolean;
        /**
         * Максимально возможная цена товара по акции.
         */
        max_action_price?: number; // double
        /**
         * Минимальное число единиц товара в акции типа «Скидка на сток».
         */
        min_stock?: number; // double
        /**
         * Число единиц товара в акции типа «Скидка на сток».
         */
        stock?: number; // double
      }
      export interface V1InvoiceCreateOrUpdateRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Ссылка на счёт-фактуру.
         */
        url?: string;
        /**
         * HS-код счёта-фактуры. Передайте число длиной до 12 символов.
         */
        HS_code?: string;
        /**
         * Дата счёта-фактуры.
         */
        date?: string; // date-time
        /**
         * Номер счёта-фактуры. Номер может содержать буквы и цифры, максимальная длина — 50 символов.
         */
        number?: string;
        /**
         * Стоимость, указанная в счёте-фактуре. Разделитель дробной части — точка, до двух знаков после точки.
         */
        price?: number; // double
        /**
         * Валюта счёта-фактуры:
         * - `USD` — доллар,
         * - `EUR` — евро,
         * - `TRY` — турецкая лира,
         * - `CNY` — юань,
         * - `RUB` — рубль,
         * - `GBP` — фунт стерлингов.
         *
         * Значение по умолчанию — `USD`.
         *
         */
        price_currency?: string;
      }
      export interface V1InvoiceCreateOrUpdateResponse {
        /**
         * Результат работы метода.
         */
        result?: boolean;
      }
      export interface V1InvoiceDeleteRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
      }
      export interface V1InvoiceDeleteResponse {
        /**
         * Результат работы метода.
         */
        result?: boolean;
      }
      export interface V1InvoiceGetRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
      }
      export interface V1InvoiceGetResponse {
        result?: /* Результат работы метода. */ InvoiceGetResponseResult;
      }
      export interface V1ItemError {
        /**
         * Код ошибки.
         */
        code?: string;
        /**
         * Техническое описание ошибки.
         */
        message?: string;
        /**
         * Состояние товара, в котором произошла ошибка.
         */
        state?: string;
        /**
         * Уровень ошибки.
         */
        level?: string;
        /**
         * Описание ошибки.
         */
        description?: string;
        /**
         * Поле, в котором произошла ошибка.
         */
        field?: string;
        /**
         * Атрибут, в котором произошла ошибка.
         */
        attribute_id?: number; // int64
        /**
         * Название атрибута, в котором произошла ошибка.
         */
        attribute_name?: string;
        /**
         * Дополнительные поля для описания ошибки.
         */
        optional_description_elements?: {
          [name: string]: string;
        };
      }
      export interface V1ItemIDsRequest {
        /**
         * Список идентификаторов товаров. Максимальное количество — 50.
         */
        product_id?: string /* int64 */[];
      }
      /**
       * Период дат, доступных для переноса.
       */
      export interface V1PostingFbsTimeslotChangeRestrictionsDeliveryInterval {
        /**
         * Дата начала периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
         *
         */
        begin?: string; // date-time
        /**
         * Дата конца периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
         *
         */
        end?: string; // date-time
      }
      export interface V1PostingFbsTimeslotChangeRestrictionsRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
      }
      export interface V1PostingFbsTimeslotChangeRestrictionsResponse {
        delivery_interval?: /* Период дат, доступных для переноса. */ V1PostingFbsTimeslotChangeRestrictionsDeliveryInterval;
        /**
         * Количество оставшихся переносов.
         */
        remaining_changes_count?: number; // int64
      }
      /**
       * Новый период для даты доставки.
       */
      export interface V1PostingFbsTimeslotSetNewTimeslot {
        /**
         * Дата начала периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
         *
         */
        from?: string; // date-time
        /**
         * Дата конца периода.
         *
         * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
         *
         */
        to?: string; // date-time
      }
      export interface V1PostingFbsTimeslotSetRequest {
        new_timeslot?: /* Новый период для даты доставки. */ V1PostingFbsTimeslotSetNewTimeslot;
        /**
         * Номер отправления.
         */
        posting_number?: string;
      }
      export interface V1PostingFbsTimeslotSetResponse {
        /**
         * `true`, если дата изменена.
         *
         */
        result?: boolean;
      }
      export interface V1PremiumScores {
        /**
         * Название рейтинга.
         */
        rating?: string;
        /**
         * Информация о штрафных баллах.
         */
        scores?: any;
      }
      export interface V1ProductCertificateDeleteRequest {
        /**
         * Идентификатор сертификата.
         */
        certificate_id: number; // int32
      }
      export interface V1ProductCertificateDeleteResponse {
        result?: /* Результат удаления сертификата. */ V1ProductCertificateDeleteResponseResult;
      }
      /**
       * Результат удаления сертификата.
       */
      export interface V1ProductCertificateDeleteResponseResult {
        /**
         * Удалён ли сертификат:
         * - `true` — удалён,
         * - `false` — не удалён.
         *
         */
        is_delete?: boolean;
        /**
         * Описание ошибок при удалении сертификата.
         */
        error_message?: string;
      }
      export interface V1ProductCertificateInfoRequest {
        /**
         * Идентификатор сертификата.
         */
        certificate_number: string;
      }
      export interface V1ProductCertificateInfoResponse {
        result?: /* Информация о сертификате. */ V1Certificate;
      }
      export interface V1ProductCertificateListRequest {
        /**
         * Артикул товара, привязанного к сертификату. Передайте параметр, если нужны сертификаты, к которым привязаны определённые товары.
         */
        offer_id?: string;
        /**
         * Статус сертификата. Передайте параметр, если нужны сертификаты с определённым статусом.
         */
        status?: string;
        /**
         * Тип сертификата. Передайте параметр, если нужны сертификаты с определённым типом.
         */
        type?: string;
        /**
         * Страница, с которой следует выводить список. Минимальное значение — 1.
         */
        page: number; // int32
        /**
         * Количество объектов на странице. Значение — от 1 до 1000.
         */
        page_size: number; // int32
      }
      export interface V1ProductCertificateListResponse {
        result?: /* Список сертификатов. */ V1ProductCertificateListResponseResult;
      }
      /**
       * Список сертификатов.
       */
      export interface V1ProductCertificateListResponseResult {
        /**
         * Информация о сертификате.
         */
        certificates?: /* Информация о сертификате. */ V1Certificate[];
        /**
         * Количество страниц.
         */
        page_count?: number; // int32
      }
      export interface V1ProductCertificateProductStatusListRequest {}
      export interface V1ProductCertificateProductStatusListResponse {
        /**
         * Список статусов товаров.
         */
        result?: V1StatusCodeNamePair[];
      }
      export interface V1ProductCertificateProductsListRequest {
        /**
         * Идентификатор сертификата.
         */
        certificate_id: number; // int32
        /**
         * Статус проверки товара при привязке к сертификату.
         */
        product_status_code?: string;
        /**
         * Номер страницы, с которой выводить список. Минимальное значение — 1.
         */
        page: number; // int32
        /**
         * Количество объектов на странице. Значение — от 1 до 1000.
         */
        page_size: number; // int32
      }
      export interface V1ProductCertificateProductsListResponse {
        result?: /* Товары, привязанные к сертификату. */ V1ProductCertificateProductsListResponseResult;
      }
      /**
       * Товары, привязанные к сертификату.
       */
      export interface V1ProductCertificateProductsListResponseResult {
        /**
         * Список товаров.
         */
        items?: ProductCertificateProductsListResponseProduct[];
        /**
         * Количество найденных товаров.
         */
        count?: number; // int64
      }
      export interface V1ProductCertificateRejectionReasonsListRequest {}
      export interface V1ProductCertificateRejectionReasonsListResponse {
        /**
         * Причины отклонения сертификата.
         */
        result?: V1StatusCodeNamePairRejection[];
      }
      export interface V1ProductCertificateStatusListRequest {}
      export interface V1ProductCertificateStatusListResponse {
        /**
         * Список возможных статусов сертификатов.
         */
        result?: V1StatusCodeNamePairStatuses[];
      }
      export interface V1ProductCertificateUnbindRequest {
        /**
         * Идентификатор сертификата.
         */
        certificate_id: number; // int32
        /**
         * Список идентификаторов товара, которые нужно отвязать от сертификата.
         */
        product_id: string /* int64 */[];
      }
      export interface V1ProductCertificateUnbindResponse {
        /**
         * Результат работы метода.
         */
        result?: ProductCertificateUnbindResponseItem[];
      }
      export interface V1ProductUpdateAttributesRequest {
        /**
         * Товары и характеристики, которые нужно обновить.
         */
        items?: any;
      }
      export interface V1ProductUpdateAttributesRequestAttribute {
        /**
         * Идентификатор характеристики, которая поддерживает вложенные свойства. У каждой из вложенных характеристик может быть несколько вариантов значений.
         */
        complex_id?: number; // int64
        /**
         * Идентификатор характеристики.
         */
        id?: number; // int64
        /**
         * Массив вложенных значений характеристики.
         */
        values?: any;
      }
      export interface V1ProductUpdateAttributesRequestItem {
        /**
         * Характеристики товара.
         */
        attributes?: any;
        /**
         * Артикул товара.
         */
        offer_id?: string;
      }
      export interface V1ProductUpdateAttributesRequestValue {
        /**
         * Идентификатор характеристики в словаре.
         */
        dictionary_value_id?: number; // int64
        /**
         * Значение характеристики товара.
         */
        value?: string;
      }
      export interface V1ProductUpdateAttributesResponse {
        /**
         * Номер задания на обновление товаров.
         *
         * Чтобы проверить статус обновления, передайте полученное значение в метод [/v1/product/import/info](#operation/ProductAPI_GetImportProductsInfo).
         *
         */
        task_id?: number; // int64
      }
      export interface V1ProductUpdateDiscountRequest {
        /**
         * Размер скидки: от 3 до 99 процентов.
         *
         */
        discount?: number; // int32
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface V1ProductUpdateDiscountResponse {
        /**
         * Результат работы метода. `true`, если запрос выполнен без ошибок.
         */
        result?: boolean;
      }
      export interface V1ProductUpdateOfferIdRequest {
        /**
         * Список пар с новыми и старыми значениями артикулов.
         */
        update_offer_id?: any;
      }
      export interface V1ProductUpdateOfferIdResponse {
        /**
         * Список ошибок.
         */
        errors?: any;
      }
      export interface V1ProductUpdateOfferIdResponseError {
        /**
         * Сообщение об ошибке.
         */
        message?: string;
        /**
         * Артикул товара, который не получилось изменить.
         */
        offer_id?: string;
      }
      export interface V1ProductUploadDigitalCodesRequest {
        /**
         * Цифровые коды активации.
         */
        digital_codes?: string[];
        /**
         * Идентификатор товара.
         */
        product_id?: number; // int64
      }
      export interface V1ProductUploadDigitalCodesRequestInfo {
        /**
         * Идентификатор задачи на загрузку кодов активации, полученный в ответе метода [/v1/product/upload_digital_codes](#operation/ProductAPI_UploadDigitalCode).
         */
        task_id?: number; // int64
      }
      export interface V1ProductUploadDigitalCodesResponse {
        result?: V1ProductUploadDigitalCodesResponseResult;
      }
      export interface V1ProductUploadDigitalCodesResponseInfo {
        result?: V1ProductUploadDigitalCodesResponseInfoResult;
      }
      export interface V1ProductUploadDigitalCodesResponseInfoResult {
        /**
         * Статус загрузки:
         *   - `pending` — товар в очереди на обработку.
         *   - `imported` — товар успешно загружен.
         *   - `failed` — товар загружен с ошибками.
         *
         */
        status?: string;
      }
      export interface V1ProductUploadDigitalCodesResponseResult {
        /**
         * Код задачи на загрузку кодов.
         */
        task_id?: number; // int64
      }
      export interface V1Rating {
        /**
         * Пороговое значение рейтинга, после которого продажи будут заблокированы.
         */
        danger_threshold?: number; // double
        /**
         * Пороговое значение рейтинга для участия в Premium-программе.
         */
        premium_threshold?: number; // double
        /**
         * Системное название рейтинга.
         */
        rating?: string;
        /**
         * Список значений рейтинга.
         */
        values?: any;
        /**
         * Пороговое значение рейтинга, после которого появится предупреждение о возможной блокировке.
         */
        warning_threshold?: number; // double
      }
      export interface V1RatingHistoryV1Request {
        /**
         * Начало периода.
         */
        date_from?: string; // date-time
        /**
         * Конец периода.
         */
        date_to?: string; // date-time
        /**
         * Фильтр по рейтингу.
         *
         * Рейтинги, по которым нужно получить значение за период:
         *
         * - `rating_on_time` — процент заказов, выполненных вовремя за последние 30 дней.
         * - `rating_review_avg_score_total` — средняя оценка всех товаров.
         * - `rating_price` — индекс цен: отношение стоимости ваших товаров к самой низкой цене на такой же товар на других площадках.
         * - `rating_order_cancellation` — процент отмен FBS-отправлений по вашей вине за последние 7 дней. Текущий и предыдущий день не учитываются.
         * - `rating_shipment_delay` — процент FBS-отправлений, которые за последние 7 дней не были переданы в доставку по вашей вине. Текущий и предыдущий день не учитываются.
         * - `rating_ssl` — оценка работы по FBO. Учитывает `rating_on_time_supply_delivery`, `rating_on_time_supply_cancellation` и `rating_order_accuracy`.
         * - `rating_on_time_supply_delivery` — процент поставок, которые вы привезли на склад в выбранный временной интервал за последние 60 дней.
         * - `rating_order_accuracy` — процент поставок без излишков, недостач, пересорта и брака за последние 60 дней.
         * - `rating_on_time_supply_cancellation` — процент заявок на поставку, которые завершились или были отменены без опоздания за последние 60 дней.
         * - `rating_reaction_time` — время, в течение которого покупатели в среднем ждали ответа на своё первое сообщение в чате за последние 30 дней.
         * - `rating_average_response_time` — время, в течение которого покупатели в среднем ждали вашего ответа за последние 30 дней.
         * - `rating_replied_dialogs_ratio` — доля диалогов хотя бы с одним вашим ответом в течение 24 часов за последние 30 дней.
         *
         * Если вы хотите получить информацию по начисленным штрафным баллам для рейтингов `rating_on_time` и `rating_review_avg_score_total`,
         * передайте значения нужных рейтингов в этом параметре и `with_premium_scores=true`.
         *
         */
        ratings: any;
        /**
         * Признак, что в ответе нужно вернуть информацию о штрафных баллах в Premium-программе.
         */
        with_premium_scores?: boolean;
      }
      export interface V1RatingHistoryV1Response {
        /**
         * Информация о штрафных баллах в Premium-программе.
         */
        premium_scores?: any;
        /**
         * Информация о рейтингах продавца.
         */
        ratings?: any;
      }
      export interface V1RatingItem {
        change?: /**
         * Изменение рейтинга: отношение предыдущего значения к текущему.
         *
         */
        RatingItemChange;
        /**
         * Текущее значение рейтинга.
         */
        current_value?: number; // double
        /**
         * Название рейтинга.
         */
        name?: string;
        /**
         * Предыдущее значение рейтинга.
         */
        past_value?: number; // double
        /**
         * Название рейтинга в системе.
         */
        rating?: string;
        /**
         * Каким должно быть значение рейтинга, чтобы оно считалось хорошим:
         * - `UNKNOWN_DIRECTION` — не определено.
         * - `NEUTRAL` — неважно.
         * - `HIGHER_IS_BETTER` — чем выше, тем лучше.
         * - `LOWER_IS_BETTER` — чем ниже, тем лучше.
         *
         */
        rating_direction?: string;
        /**
         * Статус рейтинга:
         * - `UNKNOWN_STATUS` — не определён.
         * - `OK` — все хорошо.
         * - `WARNING` — показатели требуют внимания.
         * - `CRITICAL` — критичный рейтинг.
         *
         */
        status?: string;
        /**
         * Тип значения:
         * - `UNKNOWN_VALUE` — не определён.
         * - `INDEX` — индекс.
         * - `PERCENT` — процент.
         * - `TIME` — время.
         * - `RATIO` — коэффициент.
         * - `REVIEW_SCORE` — оценка.
         * - `COUNT` — счёт.
         *
         */
        value_type?: string;
      }
      /**
       * Статус рейтинга.
       */
      export interface V1RatingStatus {
        /**
         * Признак, превышено ли пороговое значение рейтинга для блокировки.
         */
        danger?: boolean;
        /**
         * Признак, достигнуто ли пороговое значение для участия в Premium-программе.
         */
        premium?: boolean;
        /**
         * Признак наличия предупреждения о возможном превышении порогового значения для блокировки.
         */
        warning?: boolean;
      }
      export interface V1RatingSummaryV1Response {
        /**
         * Список с группами рейтингов.
         */
        groups?: any;
        /**
         * Признак, что баланс штрафных баллов превышен.
         */
        penalty_score_exceeded?: boolean;
        /**
         * Признак участия в Premium-программе.
         */
        premium?: boolean;
      }
      export interface V1Restriction {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Ограничение по максимальному весу в граммах.
         */
        max_posting_weight?: number; // double
        /**
         * Ограничение по минимальному весу в граммах.
         */
        min_posting_weight?: number; // double
        /**
         * Ограничение по ширине в сантиметрах.
         */
        width?: number; // double
        /**
         * Ограничение по длине в сантиметрах.
         */
        length?: number; // double
        /**
         * Ограничение по высоте в сантиметрах.
         */
        height?: number; // double
        /**
         * Ограничение по максимальной стоимости отправления в рублях.
         */
        max_posting_price?: number; // double
        /**
         * Ограничение по минимальной стоимости отправления в рублях.
         */
        min_posting_price?: number; // double
      }
      /**
       * Ваш собственный склад, с которого вы повезёте товары на склад поставки. Только для заявок с вРЦ.
       */
      export interface V1SellerWarehouse {
        /**
         * Адрес склада.
         */
        address?: string;
        /**
         * Название склада.
         */
        name?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      export interface V1SetActivateHotSaleProductsResult {
        result?: /* Результат работы метода. */ V1SetActivateHotSaleProductsResultResult;
      }
      /**
       * Товары, которые не получилось добавить в акцию.
       */
      export interface V1SetActivateHotSaleProductsResultProduct {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // double
        /**
         * Причина, почему товар не добавлен в акцию.
         */
        reason?: string;
      }
      /**
       * Результат работы метода.
       */
      export interface V1SetActivateHotSaleProductsResultResult {
        /**
         * Список товаров, которые не удалось добавить в акцию.
         */
        rejected?: /* Товары, которые не получилось добавить в акцию. */ V1SetActivateHotSaleProductsResultProduct[];
      }
      export interface V1SetDeactivateHotSaleProductsResult {
        result?: /* Результат работы метода. */ V1SetDeactivateHotSaleProductsResultResult;
      }
      /**
       * Товары, которые не получилось удалить из акции.
       */
      export interface V1SetDeactivateHotSaleProductsResultProduct {
        /**
         * Идентификатор товара.
         */
        product_id?: number; // double
        /**
         * Причина, почему товар не удалён из акции.
         */
        reason?: string;
      }
      /**
       * Результат работы метода.
       */
      export interface V1SetDeactivateHotSaleProductsResultResult {
        /**
         * Список товаров, которые не удалось удалить из акции.
         */
        rejected?: /* Товары, которые не получилось удалить из акции. */ V1SetDeactivateHotSaleProductsResultProduct[];
      }
      export interface V1StatusCodeNamePair {
        /**
         * Код статуса товара при привязке к сертификату.
         */
        code?: string;
        /**
         * Описание статуса.
         */
        name?: string;
      }
      export interface V1StatusCodeNamePairRejection {
        /**
         * Код причины отклонения сертификата.
         */
        code?: string;
        /**
         * Описание причины отклонения сертификата.
         */
        name?: string;
      }
      export interface V1StatusCodeNamePairStatuses {
        /**
         * Код статуса сертификата.
         */
        code?: string;
        /**
         * Описание статуса.
         */
        name?: string;
      }
      export interface V1StrategyRequest {
        /**
         * Идентификатор стратегии.
         */
        strategy_id?: string;
      }
      export interface V1SupplierAvailableWarehousesResponse {
        /**
         * Результат работы метода.
         */
        result?: any;
      }
      /**
       * Интервал поставки по местному времени.
       */
      export interface V1Timeslot {
        /**
         * Начало интервала.
         */
        from?: string;
        /**
         * Конец интервала.
         */
        to?: string;
      }
      export interface V1UpdatePricingStrategyRequest {
        /**
         * Список конкурентов.
         */
        competitors?: V1Competitor[];
        /**
         * Идентификатор стратегии.
         */
        strategy_id?: string;
        /**
         * Название стратегии.
         */
        strategy_name?: string;
      }
      export interface V1UpdateStatusStrategyRequest {
        /**
         * Статус стратегии:
         * - `true` — включена,
         * - `false` — отключена.
         *
         */
        enabled?: boolean;
        /**
         * Идентификатор стратегии.
         */
        strategy_id?: string;
      }
      /**
       * Информация о водителе и автомобиле.
       */
      export interface V1VehicleInfo {
        /**
         * Имя водителя.
         */
        driver_name?: string;
        /**
         * Телефон водителя.
         */
        driver_phone?: string;
        /**
         * Модель автомобиля.
         */
        vehicle_model?: string;
        /**
         * Номер автомобиля.
         */
        vehicle_number?: string;
      }
      /**
       * Склад поставки.
       */
      export interface V1Warehouse {
        /**
         * Адрес склада.
         */
        address?: string;
        /**
         * Название склада.
         */
        name?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      /**
       * Дополнительная информация.
       */
      export interface V2AdditionalDataItem {
        key?: string;
        value?: string;
      }
      export interface V2ChatHistoryResponse {
        /**
         * Признак, что в ответе вернули не все сообщения.
         */
        has_next?: boolean;
        /**
         * Массив сообщений, отсортированный в соответсвии с параметром `direction` из тела запроса.
         */
        messages?: any;
      }
      export interface V2ChatListResponse {
        /**
         * Данные чатов.
         */
        chats?: any;
        /**
         * Общее количество чатов.
         */
        total_chats_count?: number; // int64
        /**
         * Общее количество непрочитанных сообщений.
         */
        total_unread_count?: number; // int64
      }
      export interface V2ChatMessage {
        /**
         * Дата создания сообщения.
         */
        created_at?: string; // date-time
        /**
         * Массив с содержимым сообщения в формате Markdown.
         */
        data?: any;
        /**
         * Признак, что сообщение прочитано.
         */
        is_read?: boolean;
        /**
         * Идентификатор сообщения.
         */
        messageId?: number; // uint64
        user?: /* Информация об участнике чата. */ V2User;
      }
      export interface V2ChatReadResponse {
        /**
         * Количество непрочитанных сообщений в чате.
         */
        unread_count?: number; // int64
      }
      /**
       * Результат запроса.
       */
      export interface V2FboPosting {
        additional_data?: /* Дополнительная информация. */ V2AdditionalDataItem[];
        analytics_data?: /* Данные аналитики. */ FboPostingFboPostingAnalyticsData;
        /**
         * Идентификатор причины отмены отправления.
         */
        cancel_reason_id?: number; // int64
        /**
         * Дата и время создания отправления.
         */
        created_at?: string; // date-time
        financial_data?: /* Финансовые данные. */ V2PostingFinancialData;
        /**
         * Дата и время начала обработки отправления.
         */
        in_process_at?: string; // date-time
        /**
         * Идентификатор заказа, к которому относится отправление.
         */
        order_id?: number; // int64
        /**
         * Номер заказа, к которому относится отправление.
         */
        order_number?: string;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров в отправлении.
         */
        products?: V2PostingProduct[];
        /**
         * Статус отправления:
         *   - `awaiting_packaging` — ожидает упаковки,
         *   - `awaiting_deliver` — ожидает отгрузки,
         *   - `delivering` — доставляется,
         *   - `delivered` — доставлено,
         *   - `cancelled` — отменено.
         *
         */
        status?: string;
      }
      export interface V2FboPostingListResponse {
        /**
         * Массив отправлений.
         */
        result?: /* Результат запроса. */ V2FboPosting[];
      }
      export interface V2FboPostingResponse {
        result?: /* Результат запроса. */ V2FboPosting;
      }
      /**
       * Результаты запроса.
       */
      export interface V2FbsPosting {
        analytics_data?: /* Аналитические данные. */ FbsPostingFbsPostingAnalyticsData;
        barcodes?: /* Штрихкоды отправления. */ FbsPostingBarcodes;
        /**
         * Идентификатор причины отмены отправления.
         */
        cancel_reason_id?: number; // int64
        /**
         * Дата и время создания отправления.
         */
        created_at?: string; // date-time
        financial_data?: /* Финансовые данные. */ V2PostingFinancialData;
        /**
         * Дата и время начала обработки отправления.
         */
        in_process_at?: string; // date-time
        /**
         * Идентификатор заказа, к которому относится отправление.
         */
        order_id?: number; // int64
        /**
         * Номер заказа, к которому относится отправление.
         */
        order_number?: string;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров в отправлении.
         */
        products?: V2FbsPostingProduct[];
        /**
         * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
         */
        shipment_date?: string; // date-time
        /**
         * Статус отправления.
         */
        status?: string;
      }
      export interface V2FbsPostingProduct {
        /**
         * Обязательная маркировка товара.
         */
        mandatory_mark?: string[];
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена товара.
         */
        price?: string;
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int64
        /**
         * Идентификатор товара в системе Ozon.
         */
        sku?: number; // int64
      }
      export interface V2FbsPostingProductCountryListRequest {
        /**
         * Фильтрация по строке.
         */
        name_search?: string;
      }
      export interface V2FbsPostingProductCountryListResponse {
        /**
         * Список стран-изготовителей и ISO коды.
         */
        result?: V2FbsPostingProductCountryListResponseResult[];
      }
      export interface V2FbsPostingProductCountryListResponseResult {
        /**
         * Название страны на русском языке.
         */
        name?: string;
        /**
         * ISO код страны.
         */
        country_iso_code?: string;
      }
      export interface V2FbsPostingProductCountrySetRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Идентификатор продукта.
         */
        product_id?: number; // int64
        /**
         * Двухбуквенный код добавляемой страны по стандарту ISO_3166-1.
         *
         * Список доступных стран-изготовителей и их ISO коды можно получить с помощью метода [/v2/posting/fbs/product/country/list](#operation/PostingAPI_ListCountryProductFbsPostingV2).
         *
         */
        country_iso_code?: string;
      }
      export interface V2FbsPostingProductCountrySetResponse {
        /**
         * Идентификатор продукта.
         */
        product_id?: number; // int64
        /**
         * Признак того, что необходимо передать номер грузовой таможенной декларации (ГТД) для продукта и отправления.
         */
        is_gtd_needed?: boolean;
      }
      /**
       * Информация об отправлении.
       */
      export interface V2FbsPostingResponse {
        result?: /* Результаты запроса. */ V2FbsPosting;
      }
      /**
       * Фильтр. Чтобы посмотреть все геоограничения, оставьте `names` пустым, а в `only_visible` передайте `true`.
       */
      export interface V2GetGeoRestrictionsByFilterRequestFilter {
        /**
         * Список с названиями городов.
         */
        names?: string[];
        /**
         * Видимость значения. Рекомендуем всегда передавать `true` в этом параметре.
         */
        only_visible?: boolean;
      }
      export interface V2ItemError {
        /**
         * Код ошибки.
         */
        code?: string;
        /**
         * Состояние товара, в котором произошла ошибка.
         */
        state?: string;
        /**
         * Уровень ошибки.
         */
        level?: string;
        /**
         * Описание ошибки.
         */
        description?: string;
        /**
         * Поле, в котором произошла ошибка.
         */
        field?: string;
        /**
         * Атрибут, в котором произошла ошибка.
         */
        attribute_id?: number; // int64
        /**
         * Название атрибута, в котором произошла ошибка.
         */
        attribute_name?: string;
        /**
         * Дополнительные поля для описания ошибки.
         */
        optional_description_elements?: {
          [name: string]: string;
        };
      }
      export interface V2PostingFBSActGetPostingsRequest {
        /**
         * Идентификатор акта.
         */
        id?: number; // int64
      }
      export interface V2PostingFBSActGetPostingsResponse {
        /**
         * Информация об отправлениях.
         */
        result?: V2PostingFBSActGetPostingsResult[];
      }
      export interface V2PostingFBSActGetPostingsResult {
        /**
         * Идентификатор акта.
         */
        id?: number; // int64
        /**
         * Количество коробок, в которые упакован товар.
         */
        multi_box_qty?: number; // int32
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Статус отправления.
         */
        status?: string;
        /**
         * Расшифровка кода ошибки.
         */
        seller_error?: string;
        /**
         * Дата и время обновления записи об отправлении.
         */
        updated_at?: string; // date-time
        /**
         * Дата и время создания записи об отправлении.
         */
        created_at?: string; // date-time
        /**
         * Список товаров в отправлении.
         */
        products?: V2PostingFBSActGetProducts[];
      }
      export interface V2PostingFBSActGetProducts {
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена товара.
         */
        price?: string;
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int32
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
      }
      /**
       * Параметры фильтра.
       */
      export interface V2PostingFBSActListFilter {
        /**
         * Начальная дата создания отгрузок.
         */
        date_from?: string;
        /**
         * Конечная дата создания отгрузок.
         */
        date_to?: string;
        /**
         * Тип интеграции со службой доставки:
         *   - `ozon` — доставка через Ozon логистику.
         *   - `aggregator` — доставка внешней службой, Ozon регистрирует заказ.
         *   - `3pl_tracking` — доставка внешней службой, продавец регистрирует заказ.
         *   - `non_integrated` — доставка силами продавца.
         *
         */
        integration_type?: string;
        /**
         * Статусы перевозок:
         *   - `new` — новая,
         *   - `awaiting_retry` — повторная попытка создания,
         *   - `in_process` — собирается,
         *   - `success` — создана,
         *   - `error` — ошибка при создании,
         *   - `sended` — отправлена,
         *   - `received` — получена,
         *   - `formed` — собрана,
         *   - `cancelled` — отменена,
         *   - `pending` — в очереди на сборку,
         *   - `completion_enqueued` — в очереди на завершение,
         *   - `completion_processing` — в процессе завершения,
         *   - `completion_failed` — ошибка при завершении,
         *   - `cancelation_enqueued` — в очереди на отмену,
         *   - `cancelation_processing` — в процессе отмены,
         *   - `cancelation_failed` — ошибка при отмене,
         *   - `completed` — завершена,
         *   - `closed` — закрыта.
         *
         */
        status?: string[];
      }
      /**
       * Информация про акты перевозки.
       */
      export interface V2PostingFBSActListRelatedDocs {
        /**
         * Информация про акт приёма-передачи.
         */
        act_of_acceptance?: {
          /**
           * Дата создания акта.
           */
          created_at?: string; // date-time
          /**
           * Статус акта:
           *   - `FORMING` — ещё не готов,
           *   - `FORMED` — сформирован,
           *   - `CONFIRMED` — подписан Ozon,
           *   - `CONFIRMED_WITH_MISMATCH` — подписан Ozon с расхождениями,
           *   - `ACCEPTED_BY_CARGO_PLACES` — принят по грузовым местам,
           *   - `PRINTED_CARRIAGE` — электронная подпись не нужна,
           *   - `ERROR`, `UNKNOWN_ERROR` — ошибка.
           *
           */
          document_status?: string;
        };
        /**
         * Информация про акт о расхождениях.
         */
        act_of_mismatch?: {
          /**
           * Дата создания акта.
           */
          created_at?: string; // date-time
          /**
           * Статус акта:
           *   - `NEED_TO_SIGN` — требуется подпись,
           *   - `ON_CONFIRMATION` — на подписании Ozon,
           *   - `CONFIRMED` — подписан Ozon,
           *   - `DISPUTE_OPENED` — принят по грузовым местам,
           *   - `PRINTED_CARRIAGE` — электронная подпись не нужна,
           *   - `UNKNOWN_ERROR` — ошибка.
           *
           */
          document_status?: string;
        };
        /**
         * Информация про акт об излишках.
         */
        act_of_excess?: {
          /**
           * Дата создания акта.
           */
          created_at?: string; // date-time
          /**
           * Статус акта:
           *   - `NEED_TO_SIGN` — требуется подпись,
           *   - `CONFIRMED` — подписан Ozon,
           *   - `UNKNOWN_ERROR` — ошибка.
           *
           */
          document_status?: string;
        };
      }
      export interface V2PostingFBSActListRequest {
        filter?: /* Параметры фильтра. */ V2PostingFBSActListFilter;
        /**
         * Максимальное количество актов в ответе.
         */
        limit: number; // int64
      }
      export interface V2PostingFBSActListResponse {
        /**
         * Результат запроса.
         */
        result?: V2PostingFBSActListResult[];
      }
      export interface V2PostingFBSActListResult {
        /**
         * Идентификатор отгрузки.
         */
        id?: number; // int64
        /**
         * Идентификатор метода доставки.
         */
        delivery_method_id?: number; // int64
        /**
         * Название метода доставки.
         */
        delivery_method_name?: string;
        /**
         * Тип интеграции со службой доставки:
         *   - `ozon` — доставка через Ozon логистику.
         *   - `3pl` — доставка внешней службой, продавец регистрирует заказ.
         *
         */
        integration_type?: string;
        /**
         * Число грузовых мест.
         */
        containers_count?: number; // int32
        /**
         * Статус отгрузки.
         */
        status?: string;
        /**
         * Дата отгрузки.
         */
        departure_date?: string;
        /**
         * Дата создания записи об отгрузке.
         */
        created_at?: string; // date-time
        /**
         * Дата обновления записи об отгрузке.
         */
        updated_at?: string; // date-time
        /**
         * Тип акта приёма-передачи для FBS продавцов.
         */
        act_type?: string;
        /**
         * Признак частичной перевозки. `true`, если перевозка частичная.
         *
         * Частичная перевозка значит, что отгрузка была разделена на несколько частей и по каждой из частей формируются отдельные акты.
         *
         */
        is_partial?: boolean;
        /**
         * Признак наличия подлежащих отгрузке отправлений, которые не попали в текущую перевозку. `true`, если такие отправления есть.
         */
        has_postings_for_next_carriage?: boolean;
        /**
         * Порядковый номер частичной перевозки.
         */
        partial_num?: number; // int64
        related_docs?: /* Информация про акты перевозки. */ V2PostingFBSActListRelatedDocs;
      }
      export interface V2PostingFBSDigitalActCheckStatusRequest {
        /**
         * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
         */
        id?: number; // int64
      }
      export interface V2PostingFBSDigitalActCheckStatusResponse {
        /**
         * Номер задания на формирование документов.
         */
        id?: number; // int64
        /**
         * Cтатус формирования документов:
         * - `FORMING` — ещё не готовы,
         * - `FORMED` — сформированы успешно,
         * - `CONFIRMED` — подписаны Ozon,
         * - `CONFIRMED_WITH_MISMATCH` — подписаны Ozon с расхождениями,
         * - `NOT_FOUND` — документы не найдены,
         * - `UNKNOWN_ERROR` — произошла ошибка.
         *
         */
        status?: string;
      }
      export interface V2PostingFBSDigitalActDocumentSignRequest {
        /**
         * Идентификатор отгрузки.
         */
        id?: number; // int64
        /**
         * Тип электронного документа:
         *   - `act_of_mismatch` — акт о расхождениях,
         *   - `act_of_excess` — акт об излишках.
         *
         */
        doc_type?: string;
      }
      export interface V2PostingFBSDigitalActDocumentSignResponse {
        /**
         * Результат обработки.
         */
        result?: string;
      }
      export interface V2PostingFBSGetBarcodeRequest {
        /**
         * Идентификатор перевозки.
         */
        id?: number; // int64
      }
      export interface V2PostingFBSGetBarcodeResponse {
        /**
         * Изображение со штрихкодом в бинарном виде.
         */
        file_content?: string;
        /**
         * Название файла.
         */
        file_name?: string;
        /**
         * Тип файла.
         */
        content_type?: string;
      }
      export interface V2PostingFBSGetBarcodeTextResponse {
        /**
         * Штрихкод в текстовом виде.
         */
        result?: string;
      }
      export interface V2PostingFBSGetDigitalActRequest {
        /**
         * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
         */
        id?: number; // int64
        /**
         * Тип электронного документа:
         * - `act_of_acceptance` — акт приёма-передачи,
         * - `act_of_mismatch` — акт о расхождениях,
         * - `act_of_excess` — акт об излишках.
         *
         */
        doc_type?: any; // string
      }
      export interface V2PostingFBSGetDigitalActResponse {
        /**
         * Содержание файла в бинарном виде.
         */
        file_content?: string; // byte
        /**
         * Название файла.
         */
        file_name?: string;
        /**
         * Тип файла.
         */
        content_type?: string;
      }
      /**
       * Финансовые данные.
       */
      export interface V2PostingFinancialData {
        posting_services?: /* Услуги. */ PostingFinancialDataServices;
        /**
         * Код региона, откуда отправляется заказ.
         */
        cluster_from?: string;
        /**
         * Код региона, куда доставляется заказ.
         */
        cluster_to?: string;
        /**
         * Список товаров в заказе.
         */
        products?: PostingFinancialDataProduct[];
      }
      export interface V2PostingProduct {
        /**
         * Коды активации для услуг и цифровых товаров.
         */
        digital_codes?: any;
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Цена товара.
         */
        price?: string;
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int64
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
      }
      export interface V2ProductCertificateAccordanceTypesResponse {
        result?: /* Список типов соответствия требованиям. */ V2ProductCertificateAccordanceTypesResponseResult;
      }
      /**
       * Список типов соответствия требованиям.
       */
      export interface V2ProductCertificateAccordanceTypesResponseResult {
        /**
         * Основные типы соответствия требованиям.
         */
        base?: V2ProductCertificateAccordanceTypesResponseType[];
        /**
         * Типов соответствия требованиям, относящиеся к опасным товарам.
         */
        hazard?: V2ProductCertificateAccordanceTypesResponseType[];
      }
      export interface V2ProductCertificateAccordanceTypesResponseType {
        /**
         * Код типа соответствия требованиям.
         */
        code?: string;
        /**
         * Описание типа соответствия требованиям.
         */
        title?: string;
      }
      /**
       * Тип сервиса. Передайте одно из значений в верхнем регистре:
       *   - `IS_CODE_SERVICE`,
       *   - `IS_NO_CODE_SERVICE`.
       *
       */
      export type V2ServiceType = string;
      /**
       * Информация об участнике чата.
       */
      export interface V2User {
        /**
         * Идентификатор участника чата.
         */
        id?: string;
        /**
         * Тип участника чата:
         * - `customer` — покупатель,
         * - `seller` — продавец,
         * - `crm` — системные сообщения,
         * - `courier` — курьер,
         * - `support` — поддержка.
         *
         */
        type?: string;
      }
      export interface V3AdditionalDataItem {
        key?: string;
        value?: string;
      }
      /**
       * Информация об адресе доставки.
       */
      export interface V3Address {
        /**
         * Адрес в текстовом формате.
         */
        address_tail?: string;
        /**
         * Город доставки.
         */
        city?: string;
        /**
         * Комментарий к заказу.
         */
        comment?: string;
        /**
         * Страна доставки.
         */
        country?: string;
        /**
         * Район доставки.
         */
        district?: string;
        /**
         * Широта.
         */
        latitude?: number; // double
        /**
         * Долгота.
         */
        longitude?: number; // double
        /**
         * Код пункта выдачи заказов 3PL провайдера.
         */
        provider_pvz_code?: string;
        /**
         * Код пункта выдачи заказов.
         */
        pvz_code?: number; // int64
        /**
         * Регион доставки.
         */
        region?: string;
        /**
         * Почтовый индекс получателя.
         */
        zip_code?: string;
      }
      /**
       * Контактные данные получателя.
       */
      export interface V3Addressee {
        /**
         * Имя покупателя.
         */
        name?: string;
        /**
         * Контактный телефон.
         */
        phone?: string;
      }
      /**
       * Контактные данные получателя.
       */
      export interface V3AddresseeFbsLists {
        /**
         * Имя покупателя.
         */
        name?: string;
        /**
         * Контактный телефон.
         *
         * Всегда возвращает пустую строку `""`.
         *
         */
        phone?: string;
      }
      /**
       * Штрихкоды отправления.
       */
      export interface V3Barcodes {
        /**
         * Нижний штрихкод на маркировке отправления.
         */
        lower_barcode?: string;
        /**
         * Верхний штрихкод на маркировке отправления.
         */
        upper_barcode?: string;
      }
      /**
       * Информация об отмене.
       */
      export interface V3Cancellation {
        /**
         * Если отмена влияет на рейтинг продавца — `true`.
         */
        affect_cancellation_rating?: boolean;
        /**
         * Причина отмены.
         */
        cancel_reason?: string;
        /**
         * Идентификатор причины отмены отправления.
         */
        cancel_reason_id?: number; // int64
        /**
         * Инициатор отмены отправления:
         * - `Клиент`,
         * - `Ozon`,
         * - `Продавец`.
         *
         */
        cancellation_initiator?: string;
        /**
         * Тип отмены отправления:
         * - `client` — клиентская.
         * - `ozon` — отменено Ozon.
         * - `seller` — отменено продавцом.
         *
         */
        cancellation_type?: string;
        /**
         * Если отмена произошла после сборки отправления — `true`.
         */
        cancelled_after_ship?: boolean;
      }
      /**
       * Данные о покупателе.
       */
      export interface V3Customer {
        address?: /* Информация об адресе доставки. */ V3Address;
        /**
         * Email покупателя.
         */
        customer_email?: string;
        /**
         * Идентификатор покупателя.
         */
        customer_id?: number; // int64
        /**
         * Имя покупателя.
         */
        name?: string;
        /**
         * Контактный телефон.
         */
        phone?: string;
      }
      /**
       * Данные о покупателе.
       */
      export interface V3CustomerFbsLists {
        address?: /* Информация об адресе доставки. */ V3Address;
        /**
         * Email покупателя.
         */
        customer_email?: string;
        /**
         * Идентификатор покупателя.
         */
        customer_id?: number; // int64
        /**
         * Имя покупателя.
         */
        name?: string;
        /**
         * Контактный телефон.
         *
         * Всегда возвращает пустую строку `""`.
         *
         */
        phone?: string;
      }
      /**
       * Метод доставки.
       */
      export interface V3DeliveryMethod {
        /**
         * Идентификатор способа доставки.
         */
        id?: number; // int64
        /**
         * Название способа доставки.
         */
        name?: string;
        /**
         * Служба доставки.
         */
        tpl_provider?: string;
        /**
         * Идентификатор службы доставки.
         */
        tpl_provider_id?: number; // int64
        /**
         * Название склада.
         */
        warehouse?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      /**
       * Размеры товара.
       */
      export interface V3Dimensions {
        /**
         * Высота упаковки.
         */
        height?: string;
        /**
         * Длина товара.
         */
        length?: string;
        /**
         * Вес товара в упаковке.
         */
        weight?: string;
        /**
         * Ширина упаковки.
         */
        width?: string;
      }
      export interface V3ExemplarInfo {
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: string;
        /**
         * Номер грузовой таможенной декларации (ГТД).
         */
        gtd?: string;
        /**
         * Признак того, что не указан номер грузовой таможенной декларации (ГТД).
         *
         * Если у вас нет номера таможенной декларации, передайте значение `is_gtd_absent = true`.
         *
         */
        is_gtd_absent?: boolean;
        /**
         * Признак того, что не указан регистрационный номер партии товара (РНПТ).
         */
        is_rnpt_absent?: boolean;
        /**
         * Регистрационный номер партии товара (РНПТ).
         */
        rnpt?: string;
      }
      export interface V3FbsPackageProduct {
        /**
         * Список с данными об экземплярах товара.
         */
        exemplar_info?: V3ExemplarInfo[];
        /**
         * Идентификатор FBS товара в системе Ozon — SKU.
         */
        product_id?: number; // int64
        /**
         * Количество экземпляров.
         */
        quantity?: number; // int32
      }
      export interface V3FbsPosting {
        addressee?: /* Контактные данные получателя. */ V3AddresseeFbsLists;
        analytics_data?: /* Данные аналитики. */ V3FbsPostingAnalyticsData;
        barcodes?: /* Штрихкоды отправления. */ V3Barcodes;
        cancellation?: /* Информация об отмене. */ V3Cancellation;
        customer?: /* Данные о покупателе. */ V3CustomerFbsLists;
        /**
         * Дата передачи отправления в доставку.
         */
        delivering_date?: string; // date-time
        delivery_method?: /* Метод доставки. */ V3DeliveryMethod;
        financial_data?: /* Данные о стоимости товара, размере скидки, выплате и комиссии. */ V3PostingFinancialData;
        /**
         * Дата и время начала обработки отправления.
         */
        in_process_at?: string; // date-time
        /**
         * Если использовалась быстрая доставка Ozon Express — `true`.
         */
        is_express?: boolean;
        /**
         * Признак, что в отправлении есть многокоробочный товар и нужно передать количество коробок для него:
         *
         * - `true` — до сборки передайте количество коробок через метод [/v3/posting/multiboxqty/set](#operation/PostingAPI_PostingMultiBoxQtySetV3).
         * - `false` — отправление собрано с указанием количества коробок в параметре `multi_box_qty` или в отправлении нет многокоробочного товара.
         *
         */
        is_multibox?: boolean;
        /**
         * Количество коробок, в которые упакован товар.
         */
        multi_box_qty?: number; // int32
        /**
         * Идентификатор заказа, к которому относится отправление.
         */
        order_id?: number; // int64
        /**
         * Номер заказа, к которому относится отправление.
         */
        order_number?: string;
        /**
         * Номер родительского отправления, в результате разделения которого появилось текущее.
         */
        parent_posting_number?: string;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список товаров в отправлении.
         */
        products?: V3FbsPostingProduct[];
        /**
         * Код услуги погрузочно-разгрузочных работ:
         * - `lift` — подъём на лифте.
         * - `stairs` — подъём по лестнице.
         * - `none` — покупатель отказался от услуги, поднимать товары не нужно.
         * - `delivery_default` — доставка включена в стоимость, по условиям оферты нужно доставить товар на этаж.
         *
         * Параметр актуален для КГТ-отправлений с доставкой силами продавца или интегрированной службой.
         *
         */
        prr_option?: string;
        requirements?: /* Cписок продуктов, для которых нужно передать страну-изготовителя, номер грузовой таможенной декларации (ГТД), регистрационный номер партии товара (РНПТ) или маркировку «Честный ЗНАК», чтобы перевести отправление в следующий статус. */ V3FbsPostingRequirementsV3;
        /**
         * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
         */
        shipment_date?: string; // date-time
        /**
         * Статус отправления:
         * - `acceptance_in_progress` — идёт приёмка,
         * - `arbitration` — арбитраж,
         * - `awaiting_approve` — ожидает подтверждения,
         * - `awaiting_deliver` — ожидает отгрузки,
         * - `awaiting_packaging` — ожидает упаковки,
         * - `awaiting_registration` — ожидает регистрации,
         * - `awaiting_verification` — создано,
         * - `cancelled` — отменено,
         * - `cancelled_from_split_pending` — отменено,
         * - `client_arbitration` — клиентский арбитраж доставки,
         * - `delivered` — доставлено,
         * - `delivering` — доставляется,
         * - `driver_pickup` — у водителя,
         * - `not_accepted` — не принят на сортировочном центре,
         * - `sent_by_seller` — отправлено продавцом.
         *
         */
        status?: string;
        /**
         * Подстатус отправления:
         * - `posting_acceptance_in_progress`— идёт приёмка,
         * - `posting_in_arbitration` — арбитраж,
         * - `posting_created` — создано,
         * - `posting_in_carriage` — в перевозке,
         * - `posting_not_in_carriage` — не добавлено в перевозку,
         * - `posting_registered` — зарегистрировано,
         * - `posting_transferring_to_delivery` (`status=awaiting_deliver`) — передаётся в доставку,
         * - `posting_awaiting_passport_data` — ожидает паспортных данных,
         * - `posting_created` — создано,
         * - `posting_awaiting_registration` — ожидает регистрации,
         * - `posting_registration_error` — ошибка регистрации,
         * - `posting_transferring_to_delivery` (`status=awaiting_registration`) — передаётся курьеру,
         * - `posting_split_pending` — создано,
         * - `posting_canceled` — отменено,
         * - `posting_in_client_arbitration` — клиентский арбитраж доставки,
         * - `posting_delivered` — доставлено,
         * - `posting_received` — получено,
         * - `posting_conditionally_delivered` — условно доставлено,
         * - `posting_in_courier_service` — курьер в пути,
         * - `posting_in_pickup_point` — в пункте выдачи,
         * - `posting_on_way_to_city` — в пути в ваш город,
         * - `posting_on_way_to_pickup_point` — в пути в пункт выдачи,
         * - `posting_returned_to_warehouse` — возвращено на склад,
         * - `posting_transferred_to_courier_service` — передаётся в службу доставки,
         * - `posting_driver_pick_up` — у водителя,
         * - `posting_not_in_sort_center` — не принято на сортировочном центре,
         * - `sent_by_seller` — отправлено продавцом.
         *
         */
        substatus?: string;
        /**
         * Тип интеграции со службой доставки:
         *   - `ozon` — доставка службой Ozon.
         *   - `3pl_tracking` — доставка интегрированной службой.
         *   - `non_integrated` — доставка сторонней службой.
         *   - `aggregator` — доставка через партнёрскую доставку Ozon.
         *
         */
        tpl_integration_type?: string;
        /**
         * Трек-номер отправления.
         */
        tracking_number?: string;
      }
      /**
       * Данные аналитики.
       */
      export interface V3FbsPostingAnalyticsData {
        /**
         * Город доставки.
         */
        city?: string;
        /**
         * Дата и время начала доставки.
         */
        delivery_date_begin?: string; // date-time
        /**
         * Дата и время конца доставки.
         */
        delivery_date_end?: string; // date-time
        /**
         * Способ доставки.
         */
        delivery_type?: string;
        /**
         * Признак, что получатель юридическое лицо:
         *   - `true` — юридическое лицо,
         *   - `false` — физическое лицо.
         *
         */
        is_legal?: boolean;
        /**
         * Наличие подписки Premium.
         */
        is_premium?: boolean;
        /**
         * Способ оплаты.
         */
        payment_type_group_name?: string;
        /**
         * Регион доставки.
         */
        region?: string;
        /**
         * Служба доставки.
         */
        tpl_provider?: string;
        /**
         * Идентификатор службы доставки.
         */
        tpl_provider_id?: number; // int64
        /**
         * Название склада отправки заказа.
         */
        warehouse?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
      }
      /**
       * Информация об отправлении.
       */
      export interface V3FbsPostingDetail {
        additional_data?: V3AdditionalDataItem[];
        addressee?: /* Контактные данные получателя. */ V3Addressee;
        analytics_data?: /* Данные аналитики. */ V3FbsPostingAnalyticsData;
        barcodes?: /* Штрихкоды отправления. */ V3Barcodes;
        cancellation?: /* Информация об отмене. */ V3Cancellation;
        courier?: /* Данные о курьере. */ FbsPostingDetailCourier;
        customer?: /* Данные о покупателе. */ V3Customer;
        /**
         * Дата передачи отправления в доставку.
         */
        delivering_date?: string; // date-time
        delivery_method?: /* Метод доставки. */ V3DeliveryMethod;
        /**
         * Стоимость доставки.
         */
        delivery_price?: string;
        financial_data?: /* Данные о стоимости товара, размере скидки, выплате и комиссии. */ V3PostingFinancialData;
        /**
         * Дата и время начала обработки отправления.
         */
        in_process_at?: string; // date-time
        /**
         * Если использовалась быстрая доставка Ozon Express — `true`.
         */
        is_express?: boolean;
        /**
         * Признак, что в отправлении есть многокоробочный товар и нужно передать количество коробок для него:
         *
         * - `true` — до сборки передайте количество коробок через метод [/v3/posting/multiboxqty/set](#operation/PostingAPI_PostingMultiBoxQtySetV3).
         * - `false` — отправление собрано с указанием количества коробок в параметре `multi_box_qty` или в отправлении нет многокоробочного товара.
         *
         */
        is_multibox?: boolean;
        /**
         * Количество коробок, в которые упакован товар.
         */
        multi_box_qty?: number; // int32
        /**
         * Идентификатор заказа, к которому относится отправление.
         */
        order_id?: number; // int64
        /**
         * Номер заказа, к которому относится отправление.
         */
        order_number?: string;
        /**
         * Номер родительского отправления, в результате разделения которого появилось текущее.
         */
        parent_posting_number?: string;
        /**
         * Номер отправления.
         */
        posting_number?: string;
        product_exemplars?: /**
         * Информация по продуктам и их экзмеплярам.
         *
         * Ответ содержит поле `product_exemplars`, если в запросе передан признак `with.product_exemplars = true`.
         *
         */
        V3FbsPostingProductExemplarsV3;
        /**
         * Массив товаров в отправлении.
         */
        products?: /* Размеры товара. */ V3PostingProductDetail[];
        /**
         * Статус службы доставки.
         */
        provider_status?: string;
        prr_option?: /* Информация об услуге погрузочно-разгрузочных работ. Актуально для КГТ-отправлений с доставкой силами продавца или интегрированной службой. */ FbsPostingDetailPrrOption;
        related_postings?: /* Связанные отправления. */ V3FbsPostingDetailRelatedPostings;
        requirements?: /* Cписок продуктов, для которых нужно передать страну-изготовителя, номер грузовой таможенной декларации (ГТД), регистрационный номер партии товара (РНПТ) или маркировку «Честный ЗНАК», чтобы перевести отправление в следующий статус. */ V3FbsPostingRequirementsV3;
        /**
         * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
         */
        shipment_date?: string; // date-time
        /**
         * Статус отправления:
         * - `acceptance_in_progress` — идёт приёмка,
         * - `arbitration` — арбитраж,
         * - `awaiting_approve` — ожидает подтверждения,
         * - `awaiting_deliver` — ожидает отгрузки,
         * - `awaiting_packaging` — ожидает упаковки,
         * - `awaiting_registration` — ожидает регистрации,
         * - `awaiting_verification` — создано,
         * - `cancelled` — отменено,
         * - `cancelled_from_split_pending` — отменено,
         * - `client_arbitration` — клиентский арбитраж доставки,
         * - `delivered` — доставлено,
         * - `delivering` — доставляется,
         * - `driver_pickup` — у водителя,
         * - `not_accepted` — не принят на сортировочном центре,
         * - `sent_by_seller` – отправлено продавцом.
         *
         */
        status?: string;
        /**
         * Подстатус отправления:
         * - `posting_acceptance_in_progress` — идёт приёмка,
         * - `posting_in_arbitration` — арбитраж,
         * - `posting_created` — создано,
         * - `posting_in_carriage` — в перевозке,
         * - `posting_not_in_carriage` — не добавлено в перевозку,
         * - `posting_registered` — зарегистрировано,
         * - `posting_transferring_to_delivery` (`status=awaiting_deliver`) — передаётся в доставку,
         * - `posting_awaiting_passport_data` — ожидает паспортных данных,
         * - `posting_created` — создано,
         * - `posting_awaiting_registration` — ожидает регистрации,
         * - `posting_registration_error` — ошибка регистрации,
         * - `posting_transferring_to_delivery` (`status=awaiting_registration`) — передаётся курьеру,
         * - `posting_split_pending` — создано,
         * - `posting_canceled` — отменено,
         * - `posting_in_client_arbitration` — клиентский арбитраж доставки,
         * - `posting_delivered` — доставлено,
         * - `posting_received` — получено,
         * - `posting_conditionally_delivered` — условно доставлено,
         * - `posting_in_courier_service` — курьер в пути,
         * - `posting_in_pickup_point` — в пункте выдачи,
         * - `posting_on_way_to_city` — в пути в ваш город,
         * - `posting_on_way_to_pickup_point` — в пути в пункт выдачи,
         * - `posting_returned_to_warehouse` — возвращено на склад,
         * - `posting_transferred_to_courier_service` — передаётся в службу доставки,
         * - `posting_driver_pick_up` — у водителя,
         * - `posting_not_in_sort_center` — не принято на сортировочном центре,
         * - `sent_by_seller` — отправлено продавцом.
         *
         */
        substatus?: string;
        /**
         * Тип интеграции со службой доставки:
         *   - `ozon` — доставка через Ozon логистику.
         *   - `aggregator` — доставка внешней службой, Ozon регистрирует заказ.
         *   - `3pl_tracking` — доставка внешней службой, продавец регистрирует заказ.
         *   - `non_integrated` — доставка силами продавца.
         *
         */
        tpl_integration_type?: string;
        /**
         * Трек-номер отправления.
         */
        tracking_number?: string;
      }
      /**
       * Связанные отправления.
       */
      export interface V3FbsPostingDetailRelatedPostings {
        /**
         * Список номеров связанных отправлений.
         */
        related_posting_numbers?: any;
      }
      /**
       * Список товаров и экземпляров.
       */
      export interface V3FbsPostingExemplarProductV3 {
        /**
         * Информация по экземплярам.
         */
        exemplars?: V3FbsPostingProductExemplarInfoV3[];
        /**
         * Идентификатор продукта в системе Ozon — SKU.
         */
        sku?: number; // int64
      }
      export interface V3FbsPostingProduct {
        /**
         * Обязательная маркировка товара.
         */
        mandatory_mark?: string[];
        /**
         * Название товара.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена товара.
         */
        price?: string;
        /**
         * Количество товара в отправлении.
         */
        quantity?: number; // int32
        /**
         * Идентификатор товара в системе Ozon — SKU.
         */
        sku?: number; // int64
        /**
         * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
      }
      export interface V3FbsPostingProductExemplarInfoV3 {
        /**
         * Обязательная маркировка «Честный ЗНАК».
         */
        mandatory_mark?: string;
        /**
         * Номер грузовой таможенной декларации (ГТД).
         */
        gtd?: string;
        /**
         * Признак того, что не указан номер таможенной декларации.
         */
        is_gtd_absent?: boolean;
        /**
         * Регистрационный номер партии товара (РНПТ).
         */
        rnpt?: string;
        /**
         * Признак того, что не указан регистрационный номер партии товара (РНПТ).
         */
        is_rnpt_absent?: boolean;
      }
      /**
       * Информация по продуктам и их экзмеплярам.
       *
       * Ответ содержит поле `product_exemplars`, если в запросе передан признак `with.product_exemplars = true`.
       *
       */
      export interface V3FbsPostingProductExemplarsV3 {
        products?: /* Список товаров и экземпляров. */ V3FbsPostingExemplarProductV3[];
      }
      /**
       * Cписок продуктов, для которых нужно передать страну-изготовителя, номер грузовой таможенной декларации (ГТД), регистрационный номер партии товара (РНПТ) или маркировку «Честный ЗНАК», чтобы перевести отправление в следующий статус.
       */
      export interface V3FbsPostingRequirementsV3 {
        /**
         * Список идентификаторов товаров (SKU), для которых нужно передать номера таможенной декларации (ГТД).
         *
         * Для сборки отправления передайте для всех перечисленных товаров номер таможенной декларации или информацию о том,
         * что номера нет, с помощью метода [/v3/posting/fbs/ship/package](#operation/PostingAPI_PackageShipFbsPostingV3)
         * или [/v3/posting/fbs/ship](#operation/PostingAPI_ShipFbsPostingV3).
         *
         */
        products_requiring_gtd?: string /* int64 */[];
        /**
         * Список идентификаторов товаров (SKU), для которых нужно передать информацию о стране-изготовителе.
         *
         * Для сборки отправления передайте информацию о стране-изготовителе для всех перечисленных товаров с помощью метода [/v2/posting/fbs/product/country/set](#operation/PostingAPI_SetCountryProductFbsPostingV2).
         *
         */
        products_requiring_country?: string /* int64 */[];
        /**
         * Список идентификаторов товаров (SKU), для которых нужно передать маркировку «Честный ЗНАК».
         *
         */
        products_requiring_mandatory_mark?: string /* int64 */[];
        /**
         * Список товаров, для которых нужно передать уникальный идентификационный номер (УИН) ювелирного изделия.
         */
        products_requiring_jw_uin?: string /* int64 */[];
        /**
         * Список идентификаторов товаров (SKU), для которых нужно передать регистрационный номер партии товара (РНПТ).
         *
         */
        products_requiring_rnpt?: string /* int64 */[];
      }
      export interface V3FbsPostingShipByPackageRequest {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Список продуктов в пакете.
         */
        products?: V3FbsPackageProduct[];
      }
      export interface V3FbsPostingShipRequest {
        /**
         * Список упаковок. Каждая упаковка содержит список отправлений, на которые делится заказ.
         */
        packages?: FbsPostingShipRequestPackage[];
        /**
         * Номер отправления.
         */
        posting_number?: string;
        with?: /* Параметр для выдачи дополнительных полей в ответе. */ FbsPostingShipRequestWith;
      }
      export interface V3FbsPostingShipResponse {
        /**
         * Дополнительная информация об отправлениях.
         */
        additional_data?: any;
        /**
         * Номера отправлений, которые получились после сборки.
         */
        result?: string[];
      }
      export interface V3FinanceCashFlowStatementListRequest {
        date: /* Период формирования отчёта. */ Financev3Period;
        /**
         * Номер страницы, возвращаемой в запросе.
         */
        page: number; // int32
        /**
         * `true`, если нужно добавить дополнительные параметры в ответ.
         */
        with_details?: boolean;
        /**
         * Количество элементов на странице.
         */
        page_size: number; // int32
      }
      export interface V3FinanceCashFlowStatementListResponse {
        result?: /* Результат работы метода. */ V3FinanceCashFlowStatementListResponseResult;
      }
      /**
       * Период.
       */
      export interface V3FinanceCashFlowStatementListResponsePeriod {
        /**
         * Начало периода.
         */
        begin?: string; // date-time
        /**
         * Конец периода.
         */
        end?: string; // date-time
        /**
         * Идентификатор.
         */
        id?: number; // int64
      }
      /**
       * Результат работы метода.
       */
      export interface V3FinanceCashFlowStatementListResponseResult {
        /**
         * Список отчётов.
         */
        cash_flows?: any;
        /**
         * Детализированная информация.
         */
        details?: /* Детализированная информация. */ FinanceCashFlowStatementListResponseDetails;
        /**
         * Количество страниц с отчётами.
         */
        page_count?: number; // int64
      }
      export interface V3GetFbsPostingListResponseV3 {
        result?: /* Массив отправлений. */ V3GetFbsPostingListResponseV3Result;
      }
      /**
       * Массив отправлений.
       */
      export interface V3GetFbsPostingListResponseV3Result {
        /**
         * Признак, что в ответе вернули не весь массив отправлений:
         * - `true` — необходимо сделать новый запрос с другим значением `offset`, чтобы получить информацию об остальных отправлениях;
         * - `false` — в ответе вернули весь массив отправлений для фильтра, который был задан в запросе.
         *
         */
        has_next?: boolean;
        /**
         * Информация об отправлении.
         */
        postings?: V3FbsPosting[];
      }
      export interface V3GetFbsPostingResponseV3 {
        result?: /* Информация об отправлении. */ V3FbsPostingDetail;
      }
      export interface V3GetProductInfoLimitResponse {
        result?: /* Результат работы метода. */ V3GetProductInfoLimitResponseResult;
      }
      /**
       * Результат работы метода.
       */
      export interface V3GetProductInfoLimitResponseResult {
        daily_quota?: /* Суточные лимиты. */ GetProductInfoLimitResponseDailyQuota;
        total_quota?: /* Лимиты на ассортимент. */ GetProductInfoLimitResponseTotalQuota;
      }
      export interface V3GetReturnsCompanyFboV3Request {
        filter?: /* Фильтр. */ V3ReturnsCompanyFilterFbo;
        /**
         * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
         *
         * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
         *
         */
        last_id?: number; // int64
        /**
         * Количество значений в ответе.
         */
        limit?: number; // int64
      }
      export interface V3GetReturnsCompanyFboV3Response {
        /**
         * Идентификатор последнего значения на странице.
         */
        last_id?: number; // int64
        /**
         * Информация о возвратах.
         */
        returns?: CommonReturnsCompanyItemFbo[];
      }
      export interface V3GetReturnsCompanyFbsV3Request {
        filter?: /* Фильтр. */ V3ReturnsCompanyFilterFbs;
        /**
         * Количество значений в ответе:
         *   - максимум — 1000,
         *   - минимум — 1.
         *
         */
        limit?: number; // int64
        /**
         * Идентификатор возврата, который был загружен в предыдущий раз. В ответе будут возвраты, идентификаторы которых больше значения в `last_id`.
         */
        last_id?: number; // int64
      }
      export interface V3GetReturnsCompanyFbsV3Response {
        /**
         * Идентификатор возврата, который был загружен в предыдущий раз. В ответе будут возвраты, идентификаторы которых больше значения в `last_id`.
         */
        last_id?: number; // int64
        /**
         * Информация о возвратах.
         */
        returns?: CommonReturnsCompanyItemFbs[];
      }
      /**
       * Данные о стоимости товара, размере скидки, выплате и комиссии.
       */
      export interface V3PostingFinancialData {
        /**
         * Код региона, откуда отправляется заказ.
         */
        cluster_from?: string;
        /**
         * Код региона, куда доставляется заказ.
         */
        cluster_to?: string;
        posting_services?: /* Услуги. */ PostingFinancialDataServices;
        /**
         * Список товаров в заказе.
         */
        products?: PostingFinancialDataProduct[];
      }
      /**
       * Размеры товара.
       */
      export interface V3PostingProductDetail {
        dimensions?: /* Размеры товара. */ V3Dimensions;
        /**
         * Обязательная маркировка товара.
         */
        mandatory_mark?: string[];
        /**
         * Название.
         */
        name?: string;
        /**
         * Идентификатор товара в системе продавца — артикул.
         */
        offer_id?: string;
        /**
         * Цена товара с учётом скидок — это значение показывается на карточке товара.
         */
        price?: string;
        /**
         * Уникальный идентификационный номер (УИН) ювелирного изделия.
         */
        jw_uin?: string;
        /**
         * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
         *
         * Возможные значения:
         *   - `RUB` — российский рубль,
         *   - `BYN` — белорусский рубль,
         *   - `KZT` — тенге,
         *   - `EUR` — евро,
         *   - `USD` — доллар США,
         *   - `CNY` — юань.
         *
         */
        currency_code?: string;
        /**
         * Количество товара.
         */
        quantity?: number; // int32
        /**
         * Идентификатор товара на Ozon.
         */
        sku?: number; // int64
      }
      /**
       * Фильтр.
       */
      export interface V3ReturnsCompanyFilterFbo {
        /**
         * Номер отправления.
         */
        posting_number?: string;
        /**
         * Статус возврата:
         * - `ReturnedToOzon` — возвращён в Ozon.
         * - `Cancelled` — отменён.
         *
         */
        status?: any;
      }
      /**
       * Фильтр.
       */
      export interface V3ReturnsCompanyFilterFbs {
        accepted_from_customer_moment?: /* Время приёма возврата от поĸупателя. */ CommonTimeRangeCustomerMoment;
        last_free_waiting_day?: /* Последний день бесплатного хранения. */ CommonTimeRangeLastDay;
        /**
         * Идентификатор заказа.
         */
        order_id?: number; // int64
        /**
         * Идентификатор отправления.
         */
        posting_number?: string[];
        /**
         * Название товара.
         */
        product_name?: string;
        /**
         * Артикул товара.
         */
        product_offer_id?: string;
        /**
         * Статус возврата:
         *   - `returned_to_seller` — возвращён продавцу,
         *   - `waiting_for_seller` — ожидает получения продавцом,
         *   - `accepted_from_customer` — принят от покупателя,
         *   - `cancelled_with_compensation` — отменено с компенсацией,
         *   - `ready_for_shipment` — готов к отправке.
         *
         */
        status?: string;
      }
      export interface V4GetUploadQuotaResponse {
        daily_create?: /* Суточный лимит на создание товаров. */ GetUploadQuotaResponseDailyCreate;
        daily_update?: /* Суточный лимит на обновление товаров. */ GetUploadQuotaResponseDailyUpdate;
        total?: /* Лимит на ассортимент. */ GetUploadQuotaResponseTotal;
      }
      export interface WarehouseDeliveryMethodListRequest {
        filter?: /* Фильтр для поиска методов доставки. */ DeliveryMethodListRequestFilter;
        /**
         * Количество элементов в ответе. Максимум — 50, минимум — 1.
         */
        limit?: number; // int64
        /**
         * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
         */
        offset?: number; // int64
      }
      export interface WarehouseDeliveryMethodListResponse {
        /**
         * Признак, что в запросе вернулась только часть методов доставки:
         * - `true` — сделайте повторный запрос с новым параметром `offset` для получения остальных методов;
         * - `false` — ответ содержит все методы доставки по запросу.
         *
         */
        has_next?: boolean;
        /**
         * Результат запроса.
         */
        result?: DeliveryMethodListResponseDeliveryMethod[];
      }
      /**
       * Первая миля FBS.
       */
      export interface WarehouseFirstMileType {
        /**
         * Идентификатор DropOff-точки.
         */
        dropoff_point_id?: string;
        /**
         * Идентификатор временного слота для DropOff.
         */
        dropoff_timeslot_id?: number; // int64
        /**
         * Признак, что настройки склада обновляются.
         */
        first_mile_is_changing?: boolean;
        /**
         * Тип первой мили — `DropOff` или `Pickup`.
         */
        first_mile_type?: "DropOff" | "Pickup";
      }
      export interface WarehouseListResponseWarehouse {
        /**
         * Признак доверительной приёмки. `true`, если доверительная приёмка включена на складе.
         */
        has_entrusted_acceptance?: boolean;
        /**
         * Признак работы склада по схеме rFBS:
         * - `true` — склад работает по схеме rFBS;
         * - `false` — не работает по схеме rFBS.
         *
         */
        is_rfbs?: boolean;
        /**
         * Название склада.
         */
        name?: string;
        /**
         * Идентификатор склада.
         */
        warehouse_id?: number; // int64
        /**
         * Возможность печати акта приёма-передачи заранее. `true`, если печатать заранее возможно.
         */
        can_print_act_in_advance?: boolean;
        first_mile_type?: /* Первая миля FBS. */ WarehouseFirstMileType;
        /**
         * Признак наличия лимита минимального количества заказов. `true`, если лимит есть.
         */
        has_postings_limit?: boolean;
        /**
         * Признак, что склад не работает из-за карантина.
         */
        is_karantin?: boolean;
        /**
         * Признак, что склад принимает крупногабаритные товары.
         */
        is_kgt?: boolean;
        /**
         * Признак, что можно менять расписание работы складов.
         */
        is_timetable_editable?: boolean;
        /**
         * Минимальное значение лимита — количество заказов, которые можно привезти в одной поставке.
         */
        min_postings_limit?: number; // int32
        /**
         * Значение лимита. `-1`, если лимита нет.
         */
        postings_limit?: number; // int32
        /**
         * Количество рабочих дней склада.
         */
        min_working_days?: number; // int64
        /**
         * Статус склада.
         *
         * Соответствие статусов склада со статусами с личном кабинете:
         *
         * | Статус Seller&nbsp;API | Статус в личном кабинете |
         * |---|---|
         * | `new` | Активируется |
         * | `created` | Активный |
         * | `disabled` | В архиве |
         * | `blocked` | Заблокирован |
         * | `disabled_due_to_limit` | На паузе |
         * | `error` | Ошибка |
         *
         */
        status?: string;
        /**
         * Рабочие дни склада.
         */
        working_days?: any;
      }
      export interface WarehouseWarehouseListResponse {
        /**
         * Список складов.
         */
        result?: WarehouseListResponseWarehouse[];
      }
    }
  }
  declare namespace Paths {
    namespace ActionsAPIActivateHotSalesProducts {
      export type RequestBody =
        Components.Schemas.V1ActivateHotSalesProductsRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1SetActivateHotSaleProductsResult;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ActionsAPIDeactivateHotSalesProducts {
      export type RequestBody =
        Components.Schemas.V1DeactivateHotSalesProductsRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1SetDeactivateHotSaleProductsResult;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ActionsAPIGetHotSalesList {
      export type RequestBody = Components.Schemas.V1GetHotSalesListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetHotSalesListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ActionsAPIGetHotSalesProducts {
      export type RequestBody = Components.Schemas.V1GetHotSalesProductsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetHotSalesProductsResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace AnalyticsAPIAnalyticsGetData {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.AnalyticsAnalyticsGetDataRequest;
      namespace Responses {
        export type $200 = Components.Schemas.AnalyticsAnalyticsGetDataResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace AnalyticsAPIAnalyticsGetStockOnWarehouses {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.AnalyticsAnalyticsGetStockOnWarehousesRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.AnalyticsAnalyticsGetStockOnWarehousesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace AnalyticsAPIAnalyticsGetStockOnWarehousesV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.AnalyticsStockOnWarehouseRequest;
      namespace Responses {
        export type $200 = Components.Schemas.AnalyticsStockOnWarehouseResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace AnalyticsAPIAnalyticsItemTurnoverDataV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1AnalyticsItemTurnoverDataV3Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1AnalyticsItemTurnoverDataV3Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace BrandAPIBrandCompanyCertificationList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.BrandBrandCompanyCertificationListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.BrandBrandCompanyCertificationListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CancellationAPIConditionalCancellationApprove {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1ConditionalCancellationMoveRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1Empty;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CancellationAPIConditionalCancellationReject {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1ConditionalCancellationMoveRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1Empty;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CancellationAPIGetConditionalCancellation {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1GetConditionalCancellationRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1GetConditionalCancellationResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CancellationAPIGetConditionalCancellationList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1GetConditionalCancellationListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1GetConditionalCancellationListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CategoryAPIDictionaryValueBatch {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Categoryv2DictionaryValueBatchRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Categoryv2DictionaryValueBatchResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CategoryAPIGetCategoryAttributesV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Categoryv3CategoryAttributesRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Categoryv3CategoryAttributesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CategoryAPIGetCategoryTree {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* GetCategoryTree */ Components.Schemas.CategoryGetCategoryTreeRequest;
      namespace Responses {
        export type $200 = Components.Schemas.CategoryGetCategoryTreeResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace CertificateAccordanceTypes {
      namespace Responses {
        export type $200 =
          Components.Schemas.V2ProductCertificateAccordanceTypesResponse;
        export type Default = Components.Schemas.GooglerpcStatus;
      }
    }
    namespace CertificateDelete {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateDeleteRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductCertificateDeleteResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace CertificateInfo {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateInfoRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1ProductCertificateInfoResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace CertificateList {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1ProductCertificateListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace CertificateProductsList {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateProductsListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductCertificateProductsListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace CertificateStatusList {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateStatusListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductCertificateStatusListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace CertificateUnbind {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateUnbindRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductCertificateUnbindResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatHistory {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ChatHistory */ Components.Schemas.ChatChatHistoryRequest;
      namespace Responses {
        export type $200 =
          /* Результат. */ Components.Schemas.ChatChatHistoryResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatHistoryV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.ChatHistory;
      namespace Responses {
        export type $200 = Components.Schemas.V2ChatHistoryResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ChatList */ Components.Schemas.ChatChatListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ChatChatListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatListV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.ChatList;
      namespace Responses {
        export type $200 = Components.Schemas.V2ChatListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatReadV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.ChatRead;
      namespace Responses {
        export type $200 = Components.Schemas.V2ChatReadResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatSendFile {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ChatSendFile */ Components.Schemas.ChatChatSendFileRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ChatChatSendFileResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatSendMessage {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ChatSendMessage */ Components.Schemas.ChatChatSendMessageRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ChatChatSendMessageResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatStart {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ChatStart */ Components.Schemas.ChatChatStartRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ChatChatStartResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ChatAPIChatUpdates {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ChatUpdates */ Components.Schemas.ChatChatUpdatesRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ChatChatUpdatesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace FinanceAPIFinanceCashFlowStatementList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V3FinanceCashFlowStatementListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V3FinanceCashFlowStatementListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace FinanceAPIFinanceTransactionListV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Financev3FinanceTransactionListV3Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.Financev3FinanceTransactionListV3Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace FinanceAPIFinanceTransactionTotalV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Financev3FinanceTransactionTotalsV3Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.Financev3FinanceTransactionTotalsV3Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace FinanceAPIGetRealizationReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.FinanceGetRealizationReportRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.FinanceGetRealizationReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace InvoiceCreate {
      export type RequestBody =
        Components.Schemas.V1InvoiceCreateOrUpdateRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1InvoiceCreateOrUpdateResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace InvoiceDelete {
      export type RequestBody = Components.Schemas.V1InvoiceDeleteRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1InvoiceDeleteResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace InvoiceGet {
      export type RequestBody = Components.Schemas.V1InvoiceGetRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1InvoiceGetResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PolygonAPIBindPolygon {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.Polygonv1PolygonBindRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Polygonv1Empty;
        export type $400 = Components.Schemas.RpcStatusV1PolygonBind;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PolygonAPICreatePolygon {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Polygonv1PolygonCreateRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Polygonv1PolygonCreateResponse;
        export type $400 = Components.Schemas.RpcStatusV1PolygonCreate;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PolygonAPIDeletePolygon {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Polygonv1PolygonDeleteRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Polygonv1Empty;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIActPostingList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V2PostingFBSActGetPostingsRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V2PostingFBSActGetPostingsResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPICancelFbsPosting {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingCancelFbsPostingRequest;
      namespace Responses {
        export type $200 = Components.Schemas.PostingBooleanResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPICancelFbsPostingProduct {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingPostingProductCancelRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingPostingProductCancelResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIChangeFbsPostingProduct {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingPostingProductChangeRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingPostingProductChangeResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPICreateLabelBatch {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1CreateLabelBatchRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1CreateLabelBatchResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIDigitalActDocumentSign {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V2PostingFBSDigitalActDocumentSignRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V2PostingFBSDigitalActDocumentSignResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIFbsActList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V2PostingFBSActListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V2PostingFBSActListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIFbsPostingDelivered {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingFbsPostingDeliveredRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingFbsPostingMoveStatusResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIFbsPostingDelivering {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingFbsPostingDeliveringRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingFbsPostingMoveStatusResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIFbsPostingLastMile {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingFbsPostingLastMileRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingFbsPostingMoveStatusResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIFbsPostingProductExemplarValidate {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Postingv4FbsPostingProductExemplarValidateRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Postingv4FbsPostingProductExemplarValidateResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIFbsPostingSentbyseller {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingFbsPostingSentbysellerRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingFbsPostingSentbysellerResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIFbsPostingTrackingNumberSet {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingFbsPostingTrackingNumberSetRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingFbsPostingMoveStatusResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetCarriageAvailableList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Postingv1GetCarriageAvailableListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Postingv1GetCarriageAvailableListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetEtgb {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1GetEtgbRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetEtgbResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetFboPosting {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.PostingGetFboPostingRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V2FboPostingResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetFboPostingList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingGetFboPostingListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V2FboPostingListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetFbsPostingByBarcode {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingGetFbsPostingByBarcodeRequest;
      namespace Responses {
        export type $200 =
          /* Информация об отправлении. */ Components.Schemas.V2FbsPostingResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetFbsPostingListV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Postingv3GetFbsPostingListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V3GetFbsPostingListResponseV3;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetFbsPostingUnfulfilledList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Postingv3GetFbsPostingUnfulfilledListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Postingv3GetFbsPostingUnfulfilledListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetFbsPostingV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Postingv3GetFbsPostingRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V3GetFbsPostingResponseV3;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetLabelBatch {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1GetLabelBatchRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetLabelBatchResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetPostingFbsCancelReasonList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      namespace Responses {
        export type $200 = Components.Schemas.PostingCancelReasonListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetPostingFbsCancelReasonV1 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.PostingCancelReasonRequest;
      namespace Responses {
        export type $200 = Components.Schemas.PostingCancelReasonResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetProductExemplarStatus {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Fbsv4GetProductExemplarStatusRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Fbsv4GetProductExemplarStatusResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIGetRestrictions {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1GetRestrictionsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetRestrictionsResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIListCountryProductFbsPostingV2 {
      export type RequestBody =
        Components.Schemas.V2FbsPostingProductCountryListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V2FbsPostingProductCountryListResponse;
        export type Default = Components.Schemas.GooglerpcStatus;
      }
    }
    namespace PostingAPIMoveFbsPostingToArbitration {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.PostingMovePostingRequest;
      namespace Responses {
        export type $200 = Components.Schemas.PostingBooleanResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIMoveFbsPostingToAwaitingDelivery {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.PostingMovePostingRequest;
      namespace Responses {
        export type $200 = Components.Schemas.PostingBooleanResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPackageShipFbsPostingV3 {
      export type RequestBody =
        Components.Schemas.V3FbsPostingShipByPackageRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V3FbsPostingShipResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSActCheckStatus {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingPostingFBSActCheckStatusRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingPostingFBSActCheckStatusResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSActCreate {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingPostingFBSActCreateRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.PostingPostingFBSActCreateResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSActGetContainerLabels {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingPostingFBSActGetContainerLabelsRequest;
      namespace Responses {
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSDigitalActCheckStatus {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V2PostingFBSDigitalActCheckStatusRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V2PostingFBSDigitalActCheckStatusResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSGetAct {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingPostingFBSGetActRequest;
      namespace Responses {
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSGetBarcode {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V2PostingFBSGetBarcodeRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V2PostingFBSGetBarcodeResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSGetBarcodeText {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V2PostingFBSGetBarcodeRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V2PostingFBSGetBarcodeTextResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSGetDigitalAct {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V2PostingFBSGetDigitalActRequest;
      namespace Responses {
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingFBSPackageLabel {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.PostingPostingFBSPackageLabelRequest;
      namespace Responses {
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingMultiBoxQtySetV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Postingv3PostingMultiBoxQtySetV3Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.Postingv3PostingMultiBoxQtySetV3Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIPostingTimeslotChangeRestrictions {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1PostingFbsTimeslotChangeRestrictionsRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1PostingFbsTimeslotChangeRestrictionsResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPISetCountryProductFbsPostingV2 {
      export type RequestBody =
        Components.Schemas.V2FbsPostingProductCountrySetRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V2FbsPostingProductCountrySetResponse;
        export type Default = Components.Schemas.GooglerpcStatus;
      }
    }
    namespace PostingAPISetPostingTimeslot {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1PostingFbsTimeslotSetRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1PostingFbsTimeslotSetResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPISetProductExemplar {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Fbsv4SetProductExemplarRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Fbsv4SetProductExemplarResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIShipFbsPostingV3 {
      export type RequestBody = Components.Schemas.V3FbsPostingShipRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V3FbsPostingShipResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PostingAPIShipFbsPostingV4 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.Fbsv4FbsPostingShipV4Request;
      namespace Responses {
        export type $200 = Components.Schemas.Fbsv4FbsPostingShipV4Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingCompetitors {
      export type RequestBody = Components.Schemas.V1GetCompetitorsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetCompetitorsResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingCreate {
      export type RequestBody =
        Components.Schemas.V1CreatePricingStrategyRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1CreatePricingStrategyResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingDelete {
      /**
       * example:
       * {
       *   "strategy_id": "c7516438-7124-4e2c-85d3-ccd92b6b9b65"
       * }
       */
      export type RequestBody = Components.RequestBodies.V1StrategyRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1Empty;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingIds {
      export type RequestBody = Components.RequestBodies.V1ItemIDsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetStrategyIDsByItemIDsResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingInfo {
      /**
       * example:
       * {
       *   "strategy_id": "4f3a1d4c-5833-4f04-b69b-495cbc1f6f1c"
       * }
       */
      export type RequestBody = Components.RequestBodies.V1StrategyRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetStrategyResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingItemsAdd {
      export type RequestBody = Components.Schemas.V1AddStrategyItemsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1AddStrategyItemsResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingItemsDelete {
      /**
       * example:
       * {
       *   "product_id": [
       *     "29209"
       *   ]
       * }
       */
      export type RequestBody = Components.RequestBodies.V1ItemIDsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1DeleteStrategyItemsResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingItemsInfo {
      export type RequestBody = Components.Schemas.V1GetStrategyItemInfoRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetStrategyItemInfoResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingItemsList {
      export type RequestBody = Components.RequestBodies.V1StrategyRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetStrategyItemsResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingList {
      export type RequestBody = Components.Schemas.V1GetStrategyListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetStrategyListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingStatus {
      export type RequestBody =
        Components.Schemas.V1UpdateStatusStrategyRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1Empty;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PricingUpdate {
      export type RequestBody =
        Components.Schemas.V1UpdatePricingStrategyRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1Empty;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIDeleteProducts {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2DeleteProductsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Productv2DeleteProductsResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetGeoRestrictionsV1 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2GetGeoRestrictionsByFilterRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv2GetGeoRestrictionsByFilterResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetImportProductsInfo {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductGetImportProductsInfoRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductGetImportProductsInfoResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductAttributesV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv3GetProductAttributesV3Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv3GetProductAttributesV3Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoDescription {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductGetProductInfoDescriptionRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductGetProductInfoDescriptionResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoDiscounted {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1GetProductInfoDiscountedRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1GetProductInfoDiscountedResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoLimit {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1Empty;
      namespace Responses {
        export type $200 = Components.Schemas.V3GetProductInfoLimitResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoLimitV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2GetProductInfoLimitV2Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv2GetProductInfoLimitV2Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoListV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2GetProductInfoListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv2GetProductInfoListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoPricesV4 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv4GetProductInfoPricesV4Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv4GetProductInfoPricesV4Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoStocksV3 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv3GetProductInfoStocksV3Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv3GetProductInfoStocksV3Response;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoSubscription {
      export type RequestBody =
        Components.Schemas.V1GetProductInfoSubscriptionRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1GetProductInfoSubscriptionResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductInfoV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2GetProductInfoRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Productv2GetProductInfoResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2GetProductListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Productv2GetProductListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetProductRatingBySku {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1GetProductRatingBySkuRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetProductRatingBySkuResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIGetUploadQuota {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1Empty;
      namespace Responses {
        export type $200 = Components.Schemas.V4GetUploadQuotaResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIImportProductsBySKU {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductImportProductsBySKURequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductImportProductsBySKUResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIImportProductsPrices {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductImportProductsPricesRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductImportProductsPricesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIImportProductsStocks {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductImportProductsStocksRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductImportProductsStocksResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIImportProductsV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2ImportProductsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.Productv2ImportProductsResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductArchive {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.ProductProductArchiveRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ProductBooleanResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductCertificateAccordanceTypes {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductProductCertificateAccordanceTypesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductCertificateBind {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductProductCertificateBindRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ProductBooleanResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductCertificateCreate {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export interface RequestBody {
        /**
         * Массив сертификатов для товара. Допустимые расширения jpg, jpeg, png, pdf.
         */
        files: unknown[];
        /**
         * Название сертификата. Максимум 100 символов.
         */
        name: string;
        /**
         * Номер сертификата. Максимум 100 символов.
         */
        number: string;
        /**
         * Тип сертификата. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/types](#operation/ProductAPI_ProductCertificateTypes).
         */
        type_code:
          | "certificate_of_conformity"
          | "declaration"
          | "certificate_of_registration"
          | "registration_certificate"
          | "refused_letter";
        /**
         * Тип соответствия требованиям. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/accordance-types](#operation/ProductAPI_ProductCertificateAccordanceTypes).
         */
        accordance_type_code?:
          | "technical_regulations_rf"
          | "technical_regulations_cu"
          | "gost";
        /**
         * Дата начала действия сертификата.
         */
        issue_date: string; // date-time
        /**
         * Дата окончания действия сертификата. Может быть пустым для бессрочных сертификатов.
         *
         * Формат: `2021-04-30T11:31:26Z`.
         *
         */
        expire_date?: string; // date-time
      }
      namespace Responses {
        /**
         * example:
         * {
         *   "id": 50058
         * }
         */
        export type $200 = number;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductCertificateTypes {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductProductCertificateTypesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductCertificationList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductProductCertificationListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ProductProductCertificationListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductImportPictures {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv1ProductImportPicturesRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv1ProductInfoPicturesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductInfoPictures {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv1ProductInfoPicturesRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productv1ProductInfoPicturesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductStocksByWarehouseFbs {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productsv1GetProductInfoStocksByWarehouseFbsRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.Productsv1GetProductInfoStocksByWarehouseFbsResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductUnarchive {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ProductProductUnarchiveRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ProductBooleanResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductUpdateAttributes {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1ProductUpdateAttributesRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1ProductUpdateAttributesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductUpdateDiscount {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1ProductUpdateDiscountRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1ProductUpdateDiscountResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductUpdateOfferID {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1ProductUpdateOfferIdRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1ProductUpdateOfferIdResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIProductsStocksV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.Productv2ProductsStocksRequest;
      namespace Responses {
        export type $200 =
          /* Результаты запроса. */ Components.Schemas.Productv2ProductsStocksResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIUploadDigitalCode {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1ProductUploadDigitalCodesRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductUploadDigitalCodesResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductAPIUploadDigitalCodeInfo {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.V1ProductUploadDigitalCodesRequestInfo;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductUploadDigitalCodesResponseInfo;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ProductStatusList {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateProductStatusListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductCertificateProductStatusListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace Promos {
      namespace Responses {
        export type $200 =
          Components.Schemas.SellerApiGetSellerActionsV1Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PromosCandidates {
      export type RequestBody =
        /* Список товаров. */ Components.Schemas.SellerApiGetSellerProductV1Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.SellerApiGetSellerProductV1Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PromosProducts {
      export type RequestBody =
        /* Список товаров. */ Components.Schemas.SellerApiGetSellerProductV1Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.SellerApiGetSellerProductV1Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PromosProductsActivate {
      export type RequestBody =
        Components.Schemas.SellerApiActivateProductV1Request;
      namespace Responses {
        export type $200 = Components.Schemas.SellerApiProductV1Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PromosProductsDeactivate {
      export type RequestBody = Components.Schemas.SellerApiProductIDsV1Request;
      namespace Responses {
        export type $200 =
          Components.Schemas.SellerApiProductV1ResponseDeactivate;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PromosTaskApprove {
      export type RequestBody =
        Components.Schemas.V1ApproveDiscountTasksRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ApproveDeclineDiscountTasksResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PromosTaskDecline {
      export type RequestBody =
        Components.Schemas.V1DeclineDiscountTasksRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ApproveDeclineDiscountTasksResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace PromosTaskList {
      export type RequestBody = Components.Schemas.V1GetDiscountTaskListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetDiscountTaskListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace RatingAPIRatingHistoryV1 {
      export type RequestBody = Components.Schemas.V1RatingHistoryV1Request;
      namespace Responses {
        export type $200 = Components.Schemas.V1RatingHistoryV1Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace RatingAPIRatingSummaryV1 {
      export type RequestBody = Components.Schemas.V1Empty;
      namespace Responses {
        export type $200 = Components.Schemas.V1RatingSummaryV1Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace RejectionReasonsList {
      export type RequestBody =
        Components.Schemas.V1ProductCertificateRejectionReasonsListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.V1ProductCertificateRejectionReasonsListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateCompanyFinanceReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReportCreateCompanyFinanceReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateCompanyPostingsReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReportCreateCompanyPostingsReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateCompanyProductsPricesReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReportCreateCompanyProductsPricesReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateCompanyProductsReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* CreateCompanyProductsReport */ Components.Schemas.ReportCreateCompanyProductsReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateCompanyReturnsReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReportCreateCompanyReturnsReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateCompanyStockReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReportCreateCompanyStockReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateCompanyTransactionsReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* CreateCompanyTransactionsReport */ Components.Schemas.ReportCreateCompanyTransactionsReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateDiscountedReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReportCreateDiscountedRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateDiscountedResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPICreateProductsMovementReport {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReportCreateProductsMovementReportRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportCreateReportResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPIDiscountedReportInfo {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.ReportDiscountedInfoRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportDiscountedInfoResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPIDiscountedReportList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.ReportDiscountedListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportDiscountedListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPIReportInfo {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ReportInfo */ Components.Schemas.ReportReportInfoRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportReportInfoResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReportAPIReportList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        /* ReportList */ Components.Schemas.ReportReportListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.ReportReportListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReturnsAPIGetReturnsCompanyFBS {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReturnsGetReturnsCompanyFBSRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ReturnsGetReturnsCompanyFBSResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace ReturnsAPIGetReturnsCompanyFBSv3 {
      export type RequestBody =
        Components.Schemas.V3GetReturnsCompanyFbsV3Request;
      namespace Responses {
        export type $200 = Components.Schemas.V3GetReturnsCompanyFbsV3Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ReturnsAPIGetReturnsCompanyFbo {
      export type RequestBody =
        Components.Schemas.V3GetReturnsCompanyFboV3Request;
      namespace Responses {
        export type $200 = Components.Schemas.V3GetReturnsCompanyFboV3Response;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace ReturnsAPIGetReturnsCompanyFboV2 {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.ReturnsGetReturnsCompanyFboRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.ReturnsGetReturnsCompanyFboResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace SupplierAPISupplierAvailableWarehouses {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      namespace Responses {
        export type $200 =
          Components.Schemas.V1SupplierAvailableWarehousesResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace SupplyOrderAPIGetSupplyOrder {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1GetSupplyOrderRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetSupplyOrderResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace SupplyOrderAPIGetSupplyOrderItems {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1GetSupplyOrderItemsRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetSupplyOrderItemsResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace SupplyOrderAPIGetSupplyOrdersList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody = Components.Schemas.V1GetSupplyOrdersListRequest;
      namespace Responses {
        export type $200 = Components.Schemas.V1GetSupplyOrdersListResponse;
        export type Default = Components.Schemas.RpcStatus;
      }
    }
    namespace WarehouseAPIDeliveryMethodList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      export type RequestBody =
        Components.Schemas.WarehouseDeliveryMethodListRequest;
      namespace Responses {
        export type $200 =
          Components.Schemas.WarehouseDeliveryMethodListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
    namespace WarehouseAPIWarehouseList {
      namespace Parameters {
        export type $0 = Components.Parameters.ClientId;
        export type $1 = Components.Parameters.ApiKey;
      }
      namespace Responses {
        export type $200 = Components.Schemas.WarehouseWarehouseListResponse;
        export type $400 = Components.Schemas.RpcStatus;
        export type $403 = Components.Schemas.RpcStatus;
        export type $404 = Components.Schemas.RpcStatus;
        export type $409 = Components.Schemas.RpcStatus;
        export type $500 = Components.Schemas.RpcStatus;
      }
    }
  }
}
