import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

export default function InjectSwagger(app: INestApplication) {
  app.use(
    '/swagger',
    basicAuth({
      users: { swagger_user: process.env.SWAGGER_PASSWORD },
      challenge: true,
    })
  );

  const v1Options = new DocumentBuilder()
    .setTitle('Boilerplate')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        description: 'API Authorization',
        name: 'authorization',
        in: 'header',
      },
      'authorization'
    )
    .setDescription(`<a href='swagger-json'>Import Collection</a>`)
    .build();

  const v1Document = SwaggerModule.createDocument(app, v1Options);

  SwaggerModule.setup('swagger', app, v1Document, {
    customSiteTitle: 'Boilerplate Swagger',
    // customfavIcon: 'https://dev-rxpak-admin.appnofy.com/assets/haughtons-logo-32046255.png',
  });
}
