import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCeps1632271301847 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ceps',
        columns: [
          {
            name: 'cep',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'complement',
            type: 'varchar',
          },
          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'state',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ceps');
  }
}
