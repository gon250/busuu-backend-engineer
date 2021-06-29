import { MigrationInterface, QueryRunner } from "typeorm";

export class init1624779213761 implements MigrationInterface {
    name = "init1624779213761";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "exercises" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, CONSTRAINT "PK_c4c46f5fa89a58ba7c2d894e3c3" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "exercises" ADD CONSTRAINT "FK_d05e8618f5b30e7eb49952a531b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "exercises" DROP CONSTRAINT "FK_d05e8618f5b30e7eb49952a531b"`
        );
        await queryRunner.query(`DROP TABLE "exercises"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
