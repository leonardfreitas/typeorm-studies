import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationLessonContent1617062571070
  implements MigrationInterface {
  name = 'RelationLessonContent1617062571070';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "lessons" ADD "classeId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "lessons" ADD CONSTRAINT "FK_59fbe91c4ef1fd80b30f070b715" FOREIGN KEY ("classeId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lessons" DROP CONSTRAINT "FK_59fbe91c4ef1fd80b30f070b715"`,
    );
    await queryRunner.query(`ALTER TABLE "lessons" DROP COLUMN "classeId"`);
  }
}
