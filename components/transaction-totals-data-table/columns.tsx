'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '../data-table/data-table-column-header';
// import { Checkbox } from '@/components/ui/checkbox';

// import { labels, priorities, statuses } from './data/data';
// import { Task } from './data/schema';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'accruals_for_sale',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Общая стоимость товаров и возвратов в заданный период."
      />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue('accruals_for_sale')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'sale_commission',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Сумма комиссии, которая была удержана при продаже товара и возвращена при его возврате."
      />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue('sale_commission')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'processing_and_delivery',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Стоимость услуг обработки отправлений, сборки заказов, магистрали и последней мили."
      />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue('processing_and_delivery')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'refunds_and_cancellations',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Стоимость обратной магистрали, обработки возвратов, отмен и невыкупа товара."
      />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">
        {row.getValue('refunds_and_cancellations')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'services_amount',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Стоимость дополнительных услуг, не связанных напрямую с доставками и возвратами товаров."
      />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue('services_amount')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'compensation_amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Компенсации." />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue('compensation_amount')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'money_transfer',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Начисления за доставку и возвраты при работе по схеме «Доставка по выбору продавца»."
      />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue('money_transfer')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'others_amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Прочие начисления." />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue('others_amount')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
