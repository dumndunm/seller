'use client';

import { useCallback, useState } from 'react';
import { useQueryParams, StringParam, createEnumParam } from 'use-query-params';

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  CalendarDateRangePicker,
  DateRangeT,
} from '@/components/date-range-picker';
import { SearchInput } from '@/components/search-input';

import { columns } from './columns';

export const TotalsTableQueries = {
  fromDate: 'fromDate',
  toDate: 'toDate',
};

type TransactionTotalsDataTablePropsT = {
  data: ProxyServerApiDefinitions.Paths.FinanceTransactionTotals.Get.Responses.$200;
};

export const TransactionTotalsDataTable: FC<
  TransactionTotalsDataTablePropsT
> = ({ data }) => {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: [data],
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const [_, setQueries] = useQueryParams({
    [TotalsTableQueries.fromDate]: StringParam,
    [TotalsTableQueries.toDate]: StringParam,
  });

  const handleChangeDateRange = useCallback((dateRange: DateRangeT) => {
    setQueries(
      {
        [TotalsTableQueries.fromDate]: dateRange.from,
        [TotalsTableQueries.toDate]: dateRange.to,
      },
      'replace'
    );
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <CalendarDateRangePicker
          onChangeDateRange={handleChangeDateRange}
        />
        <SearchInput />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  table_noResults
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
