'use client';

import { useI18n } from '@/lib/i18n/provider';
import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
  type FinanceTransactionTotalsT,
  FinanceTransactionTotalsQueriesEnum,
} from '@/entities/finance-transaction-totals/models';
import type { ColumnDefMetaT } from '@/components/data-table';
import type { I18nDictT } from '@/lib/i18n';
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTable } from '@/components/data-table';
import { useQueryParams, StringParam } from 'use-query-params';
import { apiSlice } from '@/store/api/features/reports/api-slice';

export enum AccessorKeysEnum {
  accrualsForSale = 'accruals_for_sale',
  saleComission = 'sale_commission',
  processingAndDelivery = 'processing_and_delivery',
  refundsAndCancellations = 'refunds_and_cancellations',
  servicesAmount = 'services_amount',
  compensationAmount = 'compensation_amount',
  moneyTransfer = 'money_transfer',
  othersAmount = 'others_amount',
}

const getColumnTitleMeta = (i18n: I18nDictT, accessor: AccessorKeysEnum) => ({
  title: i18n.reports[`reports_financeTransactionTotals_columns_${accessor}`],
  shortTitle:
    i18n.reports[`reports_financeTransactionTotals_columns_${accessor}_short`],
});

type FinanceTransactionTotalsDataTablePropsT = {};

export const FinanceTransactionTotalsDataTable: FC<
  FinanceTransactionTotalsDataTablePropsT
> = () => {
  const i18n = useI18n();

  const columns = useMemo((): Array<ColumnDef<FinanceTransactionTotalsT>> => {
    return [
      {
        accessorKey: AccessorKeysEnum.accrualsForSale,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.accrualsForSale),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.accrualsForSale)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: AccessorKeysEnum.saleComission,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.saleComission),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.saleComission)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: AccessorKeysEnum.processingAndDelivery,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.processingAndDelivery),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.processingAndDelivery)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: AccessorKeysEnum.refundsAndCancellations,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.refundsAndCancellations),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.refundsAndCancellations)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: AccessorKeysEnum.servicesAmount,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.servicesAmount),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.servicesAmount)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: AccessorKeysEnum.compensationAmount,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.compensationAmount),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.compensationAmount)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: AccessorKeysEnum.moneyTransfer,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.moneyTransfer),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.moneyTransfer)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: AccessorKeysEnum.othersAmount,
        meta: {
          ...getColumnTitleMeta(i18n, AccessorKeysEnum.othersAmount),
        } satisfies ColumnDefMetaT,
        header: ({ column }) => <DataTableColumnHeader column={column} />,
        cell: ({ row }) => (
          <div className="w-[200px]">
            {row.getValue(AccessorKeysEnum.othersAmount)}
          </div>
        ),
        enableSorting: false,
        enableHiding: true,
      },
    ];
  }, [i18n]);

  const [queries] = useQueryParams({
    [FinanceTransactionTotalsQueriesEnum.startDate]: StringParam,
    [FinanceTransactionTotalsQueriesEnum.endDate]: StringParam,
  });

  const { data, isLoading, isFetching, isError } =
    apiSlice.endpoints.getFinanceTransactionTotalsReport.useQuery({
      startDate:
        queries[FinanceTransactionTotalsQueriesEnum.startDate] ?? undefined,
      endDate:
        queries[FinanceTransactionTotalsQueriesEnum.endDate] ?? undefined,
    });

  if (isLoading || isFetching) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Some error</>;
  }

  const financeTransactionTotalsData: Array<
    InterfaceToType<FinanceTransactionTotalsT>
  > = data ? [data] : [];

  return <DataTable columns={columns} data={financeTransactionTotalsData} />;
};
