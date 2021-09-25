import { EntityRepository, Repository } from 'typeorm';
import { Cep } from '../entities/Cep';

@EntityRepository(Cep)
class CepsRepositories extends Repository<Cep> {}

export { CepsRepositories };
