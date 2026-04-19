"use client";

import { useState } from "react";

type CpfInputProps = {
  defaultValue?: string;
  placeholder?: string;
  name?: string;
};

const inputClassName =
  "w-full rounded-[1rem] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40";

function formatCpf(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  }

  if (digits.length <= 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  }

  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

export function CpfInput({
  defaultValue = "",
  name,
  placeholder = "000.000.000-00",
}: Readonly<CpfInputProps>) {
  const [value, setValue] = useState(() => formatCpf(defaultValue));

  return (
    <input
      autoComplete="off"
      className={inputClassName}
      inputMode="numeric"
      maxLength={14}
      name={name}
      onChange={(event) => setValue(formatCpf(event.target.value))}
      placeholder={placeholder}
      value={value}
    />
  );
}
