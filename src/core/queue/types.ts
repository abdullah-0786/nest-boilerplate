/** Bull Queue interfaces */
export enum BullQueueConsumer {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  CRON = 'CRON',
}

export enum BullQueueJobs {
  SEND_FORGOT_PASSWORD_EMAIL = 'SEND_FORGOT_PASSWORD_EMAIL',
  SEND_ACCOUNT_RECOVERY_EMAIL = 'SEND_ACCOUNT_RECOVERY_EMAIL',
  SEND_SIGNUP_EMAIL = 'SEND_SIGNUP_EMAIL',
  SUBADMIN_WELCOME_EMAIL = 'SUBADMIN_WELCOME_EMAIL',
  SEND_CONTACTUS_EMAIL = 'SEND_CONTACTUS_EMAIL',
  SEND_SMS = 'SEND_SMS',
  UPDATE_EXCHANGE_RATE = 'UPDATE_EXCHANGE_RATE',
}

export interface ForgotPasswordEmailArgs {
  email: string;
  code: string;
  fullname: string;
  duration: string;
}

export interface SignupEmailArgs {
  email: string;
  fullname: string;
  contactUsEmail: string;
}

export interface ContactUsEmailArgs {
  from: string;
  to: string;
  fullname: string;
  message: string;
}

export interface AccountRecoveryEmailArgs {
  email: string;
  fullname: string;
  link: string;
  duration: string;
}

export interface SubAdminWelcomeEmailArgs {
  fullname: string;
  email: string;
  password: string;
}

export interface EmailArgsMap {
  [BullQueueJobs.SEND_FORGOT_PASSWORD_EMAIL]: ForgotPasswordEmailArgs;
  [BullQueueJobs.SEND_ACCOUNT_RECOVERY_EMAIL]: AccountRecoveryEmailArgs;
  [BullQueueJobs.SEND_SIGNUP_EMAIL]: SignupEmailArgs;
  [BullQueueJobs.SEND_CONTACTUS_EMAIL]: ContactUsEmailArgs;
  [BullQueueJobs.SUBADMIN_WELCOME_EMAIL]: SubAdminWelcomeEmailArgs;
}
