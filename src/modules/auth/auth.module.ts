// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import DatabaseModule from 'database/database.module';
// import AppConfig from 'configs/app.config';
// import RedisModule from 'core/cache/redis.module';
// import QueueModule from 'core/queue/queue.module';

// @Module({
//     imports: [
//         DatabaseModule,
//         RedisModule,
//         QueueModule,
//         JwtModule.register({
//             global: true,
//             secret: AppConfig.JWT.SECRET_KEY,
//             signOptions: {
//                 expiresIn: AppConfig.JWT.TOKEN_EXPIRATION,
//             },
//         }),
//     ],
//   providers: [AuthService],
//   controllers: [AuthController]
// })
// export default class AuthModule {}
