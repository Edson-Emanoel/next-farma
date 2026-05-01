"use client";

import { useState } from "react";

type MaskedInputProps = {
  className?: string;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
};

type DecimalInputProps = MaskedInputProps & {
  decimalPlaces?: number;
  maxIntegerDigits?: number;
  suffix?: string;
};

const defaultInputClassName =
  "w-full rounded-[1rem] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40";

function formatCoren(value: string) {
  const compact = value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .replace(/^COREN/, "");

  if (!compact) {
    return "";
  }

  const state = compact.replace(/[^A-Z]/g, "").slice(0, 2);
  const number = compact.replace(/\D/g, "").slice(0, 6);
  const prefix = "COREN-";

  if (state.length === 2 && number) {
    return `${prefix}${state} ${number}`;
  }

  return `${prefix}${state || number}`;
}

function formatCurrency(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 9);

  if (!digits) {
    return "";
  }

  const padded = digits.padStart(3, "0");
  const cents = padded.slice(-2);
  const integer = padded.slice(0, -2).replace(/^0+(?=\d)/, "");
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${grouped},${cents}`;
}

function formatDecimal(
  value: string,
  decimalPlaces: number,
  maxIntegerDigits: number,
) {
  const normalized = value.replace(/\./g, ",").replace(/[^\d,]/g, "");
  const hasComma = normalized.includes(",");
  const [rawInteger = "", rawDecimal = ""] = normalized.split(",");
  const integer = rawInteger.replace(/\D/g, "").slice(0, maxIntegerDigits);
  const decimal = rawDecimal.replace(/\D/g, "").slice(0, decimalPlaces);

  if (!hasComma) {
    return integer;
  }

  return `${integer},${decimal}`;
}

function formatInteger(value: string, maxDigits = 4) {
  return value.replace(/\D/g, "").slice(0, maxDigits);
}

export function CorenInput({
  className = defaultInputClassName,
  defaultValue = "",
  name,
  placeholder = "COREN-SP 123456",
}: Readonly<MaskedInputProps>) {
  const [value, setValue] = useState(() => formatCoren(defaultValue));

  return (
    <input
      autoComplete="off"
      className={className}
      inputMode="text"
      maxLength={15}
      name={name}
      onChange={(event) => setValue(formatCoren(event.target.value))}
      placeholder={placeholder}
      value={value}
    />
  );
}

export function CurrencyInput({
  className = defaultInputClassName,
  defaultValue = "",
  name,
  placeholder = "0,00",
}: Readonly<MaskedInputProps>) {
  const [value, setValue] = useState(() => formatCurrency(defaultValue));

  return (
    <input
      autoComplete="off"
      className={className}
      inputMode="numeric"
      name={name}
      onChange={(event) => setValue(formatCurrency(event.target.value))}
      placeholder={placeholder}
      value={value}
    />
  );
}

export function DecimalInput({
  className = defaultInputClassName,
  decimalPlaces = 2,
  defaultValue = "",
  maxIntegerDigits = 5,
  name,
  placeholder = "0",
  suffix,
}: Readonly<DecimalInputProps>) {
  const [value, setValue] = useState(() =>
    formatDecimal(defaultValue, decimalPlaces, maxIntegerDigits),
  );

  const input = (
    <input
      autoComplete="off"
      className={suffix ? `${className} pr-10` : className}
      inputMode="decimal"
      name={name}
      onChange={(event) =>
        setValue(formatDecimal(event.target.value, decimalPlaces, maxIntegerDigits))
      }
      placeholder={placeholder}
      value={value}
    />
  );

  if (!suffix) {
    return input;
  }

  return (
    <div className="relative">
      {input}
      <span className="pointer-events-none absolute inset-y-0 right-4 inline-flex items-center text-xs text-slate-400">
        {suffix}
      </span>
    </div>
  );
}

export function IntegerInput({
  className = defaultInputClassName,
  defaultValue = "",
  name,
  placeholder = "0",
}: Readonly<MaskedInputProps>) {
  const [value, setValue] = useState(() => formatInteger(defaultValue));

  return (
    <input
      autoComplete="off"
      className={className}
      inputMode="numeric"
      name={name}
      onChange={(event) => setValue(formatInteger(event.target.value))}
      placeholder={placeholder}
      value={value}
    />
  );
}
