"use client";

import { useState } from "react";

type PhoneInputProps = {
  defaultValue?: string;
  placeholder?: string;
  name?: string;
};

const inputClassName =
  "w-full rounded-[1rem] border border-white/10 bg-[#08131b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits.length ? `(${digits}` : "";
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function PhoneInput({
  defaultValue = "",
  name,
  placeholder = "(00) 00000-0000",
}: Readonly<PhoneInputProps>) {
  const [value, setValue] = useState(() => formatPhone(defaultValue));

  return (
    <input
      autoComplete="tel"
      className={inputClassName}
      inputMode="numeric"
      maxLength={15}
      name={name}
      onChange={(event) => setValue(formatPhone(event.target.value))}
      placeholder={placeholder}
      value={value}
    />
  );
}
