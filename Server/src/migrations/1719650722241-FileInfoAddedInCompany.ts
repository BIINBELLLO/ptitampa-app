import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class FileInfoAddedInCompany1719650722241 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("company", new TableColumn({
        name: "fileSize",
        type: "float",
        isNullable: false,
        default: 0.0
    }));

    await queryRunner.addColumn("company", new TableColumn({
        name: "filePath",
        type: "varchar",
        isNullable: true
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn("company", "fileSize");
      await queryRunner.dropColumn("company", "fileName");
      await queryRunner.dropColumn("company", "filePath");
  }
}