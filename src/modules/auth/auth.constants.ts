export const ForgotPasswordEmailExpiry = 30 * 60; // 30minutes
export const AccountRecoveryEmailExpiry = 30 * 60; // 30minutes

export type TForgotPasswordCache = { code: string; userId: number; phone?: string; email?: string }; // data stored in cache for forgot password
