import {MigrationInterface, QueryRunner} from "typeorm";

export class Sync1615064043442 implements MigrationInterface {
    name = 'Sync1615064043442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`);
    }

}
