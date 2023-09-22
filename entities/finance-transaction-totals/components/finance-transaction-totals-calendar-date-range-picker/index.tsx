'use client';

import { useCallback } from 'react';
import { useQueryParams, StringParam } from 'use-query-params';
import { FinanceTransactionTotalsQueriesEnum } from '@/entities/finance-transaction-totals/models';
import {
  type DateISOStringRangeT,
  CalendarDateRangePicker,
} from '@/components/calendar-date-range-picker';

export const FinanceTransactionTotalsCalendarDateRangePicker: FC = () => {
  const [_, setQueries] = useQueryParams({
    [FinanceTransactionTotalsQueriesEnum.startDate]: StringParam,
    [FinanceTransactionTotalsQueriesEnum.endDate]: StringParam,
  });

  const handleChangeDateRange = useCallback(
    (dateRange: DateISOStringRangeT) => {
      setQueries(
        {
          [FinanceTransactionTotalsQueriesEnum.startDate]: dateRange.from,
          [FinanceTransactionTotalsQueriesEnum.endDate]: dateRange.to,
        },
        'replace'
      );
    },
    []
  );

  return <CalendarDateRangePicker onChangeDateRange={handleChangeDateRange} />;
};

FinanceTransactionTotalsCalendarDateRangePicker.displayName =
  'FinanceTransactionTotalsCalendarDateRangePicker';
