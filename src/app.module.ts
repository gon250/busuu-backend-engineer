import { HttpModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";

import { enviroments } from "./enviroments";
import config from "./config";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./users/users.module";
import { ExercisesModule } from "./exercises/exercises.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: enviroments[process.env.NODE_ENV] || ".env",
            load: [config],
            isGlobal: true
        }),
        HttpModule,
        UsersModule,
        ExercisesModule,
        DatabaseModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
