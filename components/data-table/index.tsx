'use client';

import type * as TanStackReactTable from '@tanstack/react-table';

import { useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from '@tanstack/react-table';
// prettier-ignore
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DataTableToolbar } from './data-table-toolbar';
import { DataTablePagination } from './data-table-pagination';
import { useI18n } from '@/lib/i18n/provider';

export type ColumnDefMetaT = {
  title: I18nStringT;
  shortTitle: I18nStringT;
};

type ColumnIdT = string;

type FacetedFilterOptionT = {
  value: string;
  label: I18nStringT;
  icon: ComponentType<{ className?: string }>;
};

type FacetedFilterDefinitionT = {
  columnId: ColumnIdT;
  title: I18nStringT;
  options: Array<FacetedFilterOptionT>;
};

export type DataTableMetaT = {
  searchBy?: Array<ColumnIdT>;
  facetedBy?: Array<FacetedFilterDefinitionT>;
  allowRowsSelections?: boolean;
  allowPagination?: boolean;
};

type DataTablePropsT<TableDataShapeT> = {
  columns: Array<TanStackReactTable.ColumnDef<TableDataShapeT>>;
  data: Array<TableDataShapeT>;
  meta?: DataTableMetaT;
};

export const DataTable = <TableDataShapeT extends DefaultObjectShapeT>({
  columns,
  data,
  meta,
}: DataTablePropsT<TableDataShapeT>) => {
  const i18n = useI18n();

  const [rowSelection, setRowSelection] =
    useState<TanStackReactTable.RowSelectionState>({});

  const [columnVisibility, setColumnVisibility] =
    useState<TanStackReactTable.VisibilityState>({});

  const [columnFilters, setColumnFilters] =
    useState<TanStackReactTable.ColumnFiltersState>([]);

  const [sorting, setSorting] = useState<TanStackReactTable.SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    meta,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
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
                  {i18n.common.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {(meta?.allowRowsSelections || meta?.allowPagination) && (
        <DataTablePagination table={table} />
      )}
    </div>
  );
};
