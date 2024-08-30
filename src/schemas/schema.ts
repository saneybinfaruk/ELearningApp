import z from 'zod';

export const registerSchema = z.object({
  fullName: z.string().min(3, {message: 'Minimum 3 character required!'}),
  email: z.string().email({message: 'Valid email required!'}),
  password: z.string().min(4, {message: 'Minimum 4 character required!'}),
});

export type RegisterFormField = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email({message: 'Valid email required!'}),
  password: z.string().min(4, {message: 'Minimum 4 character required!'}),
});

export type LoginFormField = z.infer<typeof registerSchema>;

export const resetPasswordSchema = z.object({
  email: z.string().email({message: 'Valid email required!'}),

  currentPassword: z
    .string()
    .min(4, {message: 'Minimum 4 character required!'}),
  newPassword: z.string().min(4, {message: 'Minimum 4 character required!'}),
  confirmPassword: z
    .string()
    .min(4, {message: 'Minimum 4 character required!'}),
});
export type ResetPasswordFormField = z.infer<typeof resetPasswordSchema>;
