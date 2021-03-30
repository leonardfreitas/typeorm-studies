import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationClassStudent1617063163727
  implements MigrationInterface {
  name = 'RelationClassStudent1617063163727';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "students_classes_class" ("studentsId" uuid NOT NULL, "classId" uuid NOT NULL, CONSTRAINT "PK_6c9fa128abc4fe84619fd294c36" PRIMARY KEY ("studentsId", "classId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fc2654b4a4e000025506e5fa24" ON "students_classes_class" ("studentsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_eeb2f58f146a8880ca9a243715" ON "students_classes_class" ("classId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "students_classes_class" ADD CONSTRAINT "FK_fc2654b4a4e000025506e5fa24c" FOREIGN KEY ("studentsId") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "students_classes_class" ADD CONSTRAINT "FK_eeb2f58f146a8880ca9a243715c" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "students_classes_class" DROP CONSTRAINT "FK_eeb2f58f146a8880ca9a243715c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "students_classes_class" DROP CONSTRAINT "FK_fc2654b4a4e000025506e5fa24c"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_eeb2f58f146a8880ca9a243715"`);
    await queryRunner.query(`DROP INDEX "IDX_fc2654b4a4e000025506e5fa24"`);
    await queryRunner.query(`DROP TABLE "students_classes_class"`);
  }
}
