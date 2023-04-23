import { z } from "zod";

export const RegisterFormSchema = z.object({
  email: z
    .string()
    .min(3, "E-mail obrigatório")
    .email("Forneça um e-mail válido"),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres."),
  name: z.string().min(5, "Forneça seu nome completo."),
});
