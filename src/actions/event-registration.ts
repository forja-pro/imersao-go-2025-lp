// @ts-nocheck
'use server'

import { FormState, registrationSchema, RegistrationSchemaErrorType, RegistrationSchemaType } from "@/types";
import { supabase } from "@/lib/supabase"
import z from "zod";

export async function registerEvent (initialState: FormState, formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = registrationSchema.safeParse(data);

  if (!result.success) {
    return {
      data: data as RegistrationSchemaType,
      errors: z.flattenError(result.error),
    };
  }

  await supabase.from('inscricoes-imersao-go').insert({
    name: data.name,
    email: data.email,
    experience_level: data.experience_level,
    project_idea: data.project_idea,
  })

  return {
    data: {} as RegistrationSchemaType,
    errors: {} as RegistrationSchemaErrorType
  }
};
