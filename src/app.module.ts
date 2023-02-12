import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: '12345',
      database: 'nestdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
