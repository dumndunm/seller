'use client';

import { useCallback, useMemo } from 'react';
import { useQueryParams, StringParam } from 'use-query-params';
import { FinanceOverviewReportQueriesEnum } from '@/entities/finance-overview-report/models';
import {
  type DateISOStringRangeT,
  CalendarDateRangePicker,
} from '@/components/calendar-date-range-picker';

export const FinanceOverviewReportCalendarDateRangePicker: FC = () => {
  const [queries, setQueries] = useQueryParams({
    [FinanceOverviewReportQueriesEnum.startDate]: StringParam,
    [FinanceOverviewReportQueriesEnum.endDate]: StringParam,
  });

  const initialDateRange = useMemo(() => {
    return {
      from: queries[FinanceOverviewReportQueriesEnum.startDate]
        ? new Date(queries[FinanceOverviewReportQueriesEnum.startDate])
        : undefined,
      to: queries[FinanceOverviewReportQueriesEnum.endDate]
        ? new Date(queries[FinanceOverviewReportQueriesEnum.endDate])
        : undefined,
    };
  }, []);

  const handleChangeDateRange = useCallback(
    (dateRange: DateISOStringRangeT) => {
      setQueries(
        {
          [FinanceOverviewReportQueriesEnum.startDate]: dateRange.from,
          [FinanceOverviewReportQueriesEnum.endDate]: dateRange.to,
        },
        'replace'
      );
    },
    []
  );

  return (
    <CalendarDateRangePicker
      initialDateRange={initialDateRange}
      onChangeDateRange={handleChangeDateRange}
    />
  );
};

FinanceOverviewReportCalendarDateRangePicker.displayName =
  'OverviewReportCalendarDateRangePicker';
