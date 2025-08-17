import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(2, { message: "Deve ter pelo menos 2 caracteres" }).max(100, { message: "Deve ter no máximo 100 caracteres" }),
  email: z.email({ message: "Deve ser um e-mail válido" }),
  experience_level: z.enum(['iniciante', 'basico', 'intermediario', 'avancado'], { message: "Deve ser um nível de experiência válido" }),
  project_idea: z.string().max(500, { message: "Deve ter no máximo 500 caracteres" }),
});

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;

export type RegistrationSchemaErrorType = z.core.$ZodFlattenedError<RegistrationSchemaType>;

export type FormState = {
  data?: RegistrationSchemaType;
  errors?: RegistrationSchemaErrorType;
};