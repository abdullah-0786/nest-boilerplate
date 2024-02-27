// import { ApiController, CurrentUser, Get, Post } from 'core/decorators';
// import { AuthService } from './auth.service';
// import { Body, Req, UseGuards } from '@nestjs/common';
// import { ApiSecurity } from '@nestjs/swagger';
// import JwtLogoutGuard from './jwt-logout.guard';
// import JwtRefreshGuard from './jwt-refresh.guard';

// @ApiController({ tag: 'auth', path: '/auth' })
// export class AuthController {
//   constructor(private _authService: AuthService) {}

//   @Post({ auth: false, path: 'user/login', description: 'Login to the application', response: LoggedinResponseDTO })
//   userLogin(@Body() data: LoginRequestDTO): Promise<LoggedinResponseDTO> {
//     return this._authService.UserLogin(data);
//   }

//   @Post({ auth: false, path: 'admin/login', description: 'Login to the application', response: LoggedinResponseDTO })
//   adminLogin(@Body() data: LoginRequestDTO): Promise<LoggedinResponseDTO> {
//     return this._authService.AdminLogin(data);
//   }

//   @ApiSecurity('authorization')
//   @UseGuards(JwtLogoutGuard)
//   @Get({ auth: false, path: 'logout', description: 'Logout from application', response: MessageResponseDTO })
//   logout(@Req() req: Request, @CurrentUser('id') userId: number): Promise<MessageResponseDTO> {
//     const accessToken = ExtractTokenFromHeader(req);
//     return this._authService.Logout(userId, accessToken);
//   }

//   @Get({ path: 'logout/all', description: 'Logout of all devices', response: MessageResponseDTO })
//   logoutAll(@CurrentUser('id') userId: number): Promise<MessageResponseDTO> {
//     return this._authService.LogoutAll(String(userId));
//   }

//   /** to be changed
//    * access token in header and refresh token in body
//    **/
//   @UseGuards(JwtRefreshGuard)
//   @Get({ auth: false, path: 'refresh-token', description: 'Refresh tokens', response: LoggedinResponseDTO })
//   refreshTokens(@CurrentUser() user: TCacheUserData): Promise<LoggedinResponseDTO> {
//     return this._authService.RefreshTokens(user, query.accessToken);
//   }

//   @Post({ auth: false, path: 'signup', description: 'Signup in the application', response: LoggedinResponseDTO })
//   signup(@Body() data: SignupRequestDTO): Promise<LoggedinResponseDTO> {
//     return this._authService.Signup(data);
//   }

//   @Post({
//     auth: false,
//     path: 'signup/verify',
//     description: 'Signup in the application',
//     response: MessageResponseDTO,
//   })
//   verifySignup(@Body() data: VerifySignupRequestDTO): Promise<MessageResponseDTO> {
//     return this._authService.VerifySignup(data);
//   }

//   @Post({
//     auth: false,
//     path: 'forgot-password',
//     description: 'will mail user otp to reset password',
//     response: ForgotPasswordVerificationDto,
//   })
//   forgotPassword(
//     @Body(new EmailPhoneTransformPipe('verification')) dto: ForgotPasswordDto
//   ): Promise<ForgotPasswordVerificationDto> {
//     return this._authService.ForgotPassword(dto);
//   }

//   @Post({
//     auth: false,
//     path: 'resend-otp',
//     description: 'will resend new otp code',
//     response: MessageResponseDTO,
//   })
//   resendOtp(@Body() dto: ResendOtpCodeDto): Promise<MessageResponseDTO> {
//     return this._authService.ResendOtpCode(dto);
//   }

//   @Post({
//     auth: false,
//     path: 'verify-otp',
//     description: 'will verify otp code from cache',
//     response: MessageResponseDTO,
//   })
//   verifyOtp(@Body() dto: VerifyOtpCodeDto): Promise<MessageResponseDTO> {
//     return this._authService.VerifyOtpCode(dto);
//   }

//   @Post({
//     auth: false,
//     path: 'reset-password',
//     description: 'for user to reset password',
//     response: MessageResponseDTO,
//   })
//   resetPassword(@Body() dto: ResetPasswordDto): Promise<MessageResponseDTO> {
//     return this._authService.ResetPassword(dto);
//   }
// }
