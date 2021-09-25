import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('ceps')
class Cep {
  @PrimaryColumn()
  cep: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;
}

export { Cep };
