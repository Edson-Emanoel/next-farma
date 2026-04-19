"use client";

import type { FormEvent } from "react";
import { toast } from "react-toastify";
import type { ZodType } from "zod";

export function buildValidatedSubmitHandler<T extends Record<string, FormDataEntryValue>>(
  schema: ZodType<T>,
) {
  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as T;
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      toast.error("Verifique os campos obrigatórios.");
      return;
    }

    toast.success("Formulário enviado com sucesso.");
  };
}
