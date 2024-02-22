import { ApiController, Get } from 'core/decorators';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';

class HealthCheckResponseDto {
  @ApiProperty()
  message: string;
}

@ApiController({ path: '/', tag: 'App' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get({ description: 'Health Check', path: '', response: HealthCheckResponseDto })
  getHello() {
    return { message: this.appService.getHello() };
  }
}
