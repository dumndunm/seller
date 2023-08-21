'use client';

import { memo, useEffect, useState } from 'react';

import { CalendarIcon } from '@radix-ui/react-icons';
import { format, formatISO, isDate } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/provider';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export type DateISOStringRangeT = {
  from: DateISOStringT;
  to: DateISOStringT;
};

type CalendarDateRangePickerPropsT = {
  initialDateRange?: DateRange;
  onChangeDateRange: (dateRange: DateISOStringRangeT) => void;
};

export const CalendarDateRangePicker: FC<CalendarDateRangePickerPropsT> = memo(
  ({ initialDateRange, onChangeDateRange }) => {
    const i18n = useI18n();

    const [calendarDateRange, setCalendarDateRange] = useState<
      DateRange | undefined
    >(initialDateRange);

    useEffect(() => {
      if (!calendarDateRange?.from || !calendarDateRange?.to) {
        return;
      }

      onChangeDateRange({
        from: formatISO(calendarDateRange.from),
        to: formatISO(calendarDateRange.to),
      });
    }, [initialDateRange, calendarDateRange?.from, calendarDateRange?.to]);

    return (
      <div className="grid gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'w-[260px] justify-start text-left font-normal',
                !calendarDateRange && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {calendarDateRange?.from ? (
                calendarDateRange.to ? (
                  <>
                    {format(calendarDateRange.from, 'LLL dd, y')} -{' '}
                    {format(calendarDateRange.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(calendarDateRange.from, 'LLL dd, y')
                )
              ) : (
                <span>{i18n.common.calendar_placeholder}</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={calendarDateRange?.from}
              selected={calendarDateRange}
              onSelect={setCalendarDateRange}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

CalendarDateRangePicker.displayName = 'CalendarDateRangePicker';
