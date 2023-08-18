'use client';

import { memo, useEffect, useState } from 'react';

import { CalendarIcon } from '@radix-ui/react-icons';
import { format, formatISO } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export type DateRangeT = {
  from: DateISOStringT;
  to: DateISOStringT;
};

type CalendarDateRangePickerPropsT = {
  onChangeDateRange: (dateRange: DateRangeT) => void;
};

export const CalendarDateRangePicker: FC<CalendarDateRangePickerPropsT> = memo(
  ({ onChangeDateRange }) => {
    console.log('CalendarDateRangePicker');

    const [dateRange, setDateRange] = useState<DateRange | undefined>(
      undefined
    );

    useEffect(() => {
      if (dateRange?.from && dateRange?.to) {
        onChangeDateRange({
          from: formatISO(dateRange.from),
          to: formatISO(dateRange.to),
        });
      }
    }, [dateRange?.from, dateRange?.to]);

    return (
      <div className="grid gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'w-[260px] justify-start text-left font-normal',
                !dateRange && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, 'LLL dd, y')} -{' '}
                    {format(dateRange.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(dateRange.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

CalendarDateRangePicker.displayName = 'CalendarDateRangePicker';
