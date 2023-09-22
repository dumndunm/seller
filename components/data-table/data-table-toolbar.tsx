'use client';

import type { Table } from '@tanstack/react-table';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import type { DataTableMetaT } from '.';
import { DataTableViewOptions } from './data-table-view-options';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { useI18n } from '@/lib/i18n/provider';

type DataTableToolbarPropsT<TableDataShapeT> = {
  table: Table<TableDataShapeT>;
};

export const DataTableToolbar = <TableDataShapeT extends DefaultObjectShapeT>({
  table,
}: DataTableToolbarPropsT<TableDataShapeT>) => {
  const i18n = useI18n();

  const isFiltered = table.getState().columnFilters.length > 0;

  const meta = table.options.meta as DataTableMetaT | undefined;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {meta && meta.searchBy && (
          <Input
            placeholder={i18n.common.search}
            value={
              (table.getColumn(meta.searchBy[0])?.getFilterValue() as string) ??
              ''
            }
            onChange={(event) =>
              table
                .getColumn(meta.searchBy?.[0] ?? '')
                ?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
        {meta &&
          meta.facetedBy &&
          meta.facetedBy.map(({ columnId, title, options }) => (
            <DataTableFacetedFilter
              key={columnId}
              column={table.getColumn(columnId)}
              title={title}
              options={options}
            />
          ))}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {i18n.common.reset}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
};
