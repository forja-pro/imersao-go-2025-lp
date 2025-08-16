import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  experience_level: z.enum(['iniciante', 'basico', 'intermediario', 'avancado']),
  project_idea: z.string().min(10).max(500),
});

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;

export type RegistrationSchemaErrorType = z.core.$ZodFlattenedError<typeof registrationSchema>;