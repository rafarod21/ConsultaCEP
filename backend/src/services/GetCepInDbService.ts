import { getCustomRepository } from 'typeorm';
import { CepsRepositories } from '../repositories/CepsRepositories';

class GetCepInDbService {
  async execute(cep: string) {
    const cepsRepositories = getCustomRepository(CepsRepositories);

    const cepAlreadyExists = await cepsRepositories.findOne({ cep });

    if (cepAlreadyExists) {
      return cepAlreadyExists;
    }

    return null;
  }
}

export { GetCepInDbService };
