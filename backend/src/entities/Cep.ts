import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('ceps')
class Cep {
  @PrimaryColumn()
  cep: string;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  ibge: string;

  @Column()
  gia: string;

  @Column()
  ddd: string;

  @Column()
  siafi: string;
}

export { Cep };
