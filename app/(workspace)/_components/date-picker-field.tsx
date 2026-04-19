"use client";

import * as Popover from "@radix-ui/react-popover";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/app/dashboard/components/icons";

type DatePickerFieldProps = {
  name: string;
  defaultValue?: string;
  placeholder?: string;
};

function parseDateValue(value?: string) {
  if (!value) {
    return undefined;
  }

  try {
    return parseISO(value);
  } catch {
    return undefined;
  }
}

export function DatePickerField({
  name,
  defaultValue,
  placeholder = "Selecione uma data",
}: Readonly<DatePickerFieldProps>) {
  const initialDate = useMemo(() => parseDateValue(defaultValue), [defaultValue]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);
  const hiddenValue = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const label = selectedDate
    ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
    : placeholder;

  return (
    <Popover.Root>
      <input name={name} type="hidden" value={hiddenValue} />

      <Popover.Trigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-[1rem] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white outline-none transition hover:border-white/15"
        >
          <span className={selectedDate ? "text-white" : "text-slate-500"}>{label}</span>
          <CalendarIcon />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          className="z-50 rounded-[1.25rem] border border-white/10 bg-[#0b1821] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
          sideOffset={8}
        >
          <DayPicker
            className="text-white"
            components={{
              Chevron: ({ orientation }) =>
                orientation === "left" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                ),
            }}
            locale={ptBR}
            mode="single"
            onSelect={setSelectedDate}
            selected={selectedDate}
            classNames={{
              month: "space-y-3",
              month_caption:
                "flex items-center justify-center gap-2 px-1 text-sm font-semibold text-white",
              nav: "flex items-center gap-1",
              button_previous:
                "inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/8 hover:text-white",
              button_next:
                "inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/8 hover:text-white",
              month_grid: "w-full border-collapse",
              weekdays: "grid grid-cols-7 gap-1",
              weekday:
                "flex h-8 items-center justify-center text-xs font-medium text-slate-500",
              week: "mt-1 grid grid-cols-7 gap-1",
              day: "h-9 w-9 p-0",
              day_button:
                "h-9 w-9 rounded-full text-sm text-slate-200 transition hover:bg-white/8 hover:text-white",
              selected:
                "[&_button]:bg-sky-500 [&_button]:font-semibold [&_button]:text-white",
              today: "[&_button]:border [&_button]:border-sky-400/30",
              outside: "[&_button]:text-slate-600",
              disabled: "[&_button]:cursor-not-allowed [&_button]:opacity-40",
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
