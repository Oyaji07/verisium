"use client";

import React from "react";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { FormItem, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  description?: string;
  type?: "text" | "email" | "password" | "file";
}

export default function FormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "",
  description,
  type = "text",
}: FormFieldProps<T>) {
  const id = String(name); // ✅ stable across SSR/CSR

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <Label htmlFor={id} className="label">{label}</Label>
          <FormControl>
            <Input id={id} type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

