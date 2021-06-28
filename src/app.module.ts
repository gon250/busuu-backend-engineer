import { HttpModule, Module } from "@nestjs/common";
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
    controllers: [],
    providers: []
})
export class AppModule {}
