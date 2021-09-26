import { response } from 'express';
import { getCustomRepository } from 'typeorm';
import { CepsRepositories } from '../repositories/CepsRepositories';
import { apiViaCEP } from './apiViaCEP';

class CreateCepInDbService {
  async execute(inputCep: string) {
    const cepsRepositories = getCustomRepository(CepsRepositories);

    const { data } = await apiViaCEP.get(`/${inputCep}/json/`);

    if ('erro' in data) {
      return data;
    }

    const cepDetails = cepsRepositories.create({
      cep: inputCep,
      street: data.logradouro,
      complement: data.complemento,
      neighborhood: data.bairro,
      city: data.localidade,
      uf: data.uf,
      ibge: data.ibge,
      gia: data.gia,
      ddd: data.ddd,
      siafi: data.siafi,
    });

    await cepsRepositories.save(cepDetails);

    return cepDetails;
  }
}

export { CreateCepInDbService };
