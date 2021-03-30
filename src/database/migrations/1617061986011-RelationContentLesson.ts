import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationContentLesson1617061986011
  implements MigrationInterface {
  name = 'RelationContentLesson1617061986011';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "contents" ADD "lessonId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "contents" ADD CONSTRAINT "UQ_87fa34627ff1511113d3c6f1d0e" UNIQUE ("lessonId")`,
    );
    await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
    await queryRunner.query(
      `ALTER TABLE "class" ADD "name" character varying(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "class" ADD CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "contents" ADD CONSTRAINT "FK_87fa34627ff1511113d3c6f1d0e" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contents" DROP CONSTRAINT "FK_87fa34627ff1511113d3c6f1d0e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "class" DROP CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd"`,
    );
    await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
    await queryRunner.query(
      `ALTER TABLE "class" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "contents" DROP CONSTRAINT "UQ_87fa34627ff1511113d3c6f1d0e"`,
    );
    await queryRunner.query(`ALTER TABLE "contents" DROP COLUMN "lessonId"`);
  }
}
