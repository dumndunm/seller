'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
// import { Checkbox } from '@/components/ui/checkbox';

import { labels, priorities, statuses } from './data/data';
// import { Task } from './data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<any>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value: any) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
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
  // {
  //   accessorKey: 'title',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Title" />
  //   ),
  //   cell: ({ row }) => {
  //     const label = labels.find((label) => label.value === row.original.label);

  //     return (
  //       <div className="flex space-x-2">
  //         {label && <Badge variant="outline">{label.label}</Badge>}
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue('title')}
  //         </span>
  //       </div>
  //     );
  //   },
  // },
  // {
  //   accessorKey: 'status',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Status" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       (status) => status.value === row.getValue('status')
  //     );

  //     if (!status) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex w-[100px] items-center">
  //         {status.icon && (
  //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{status.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  // {
  //   accessorKey: 'priority',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Priority" />
  //   ),
  //   cell: ({ row }) => {
  //     const priority = priorities.find(
  //       (priority) => priority.value === row.getValue('priority')
  //     );

  //     if (!priority) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && (
  //           <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{priority.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
