import { Request, Response } from 'express';
import { CreateCepInDbService } from '../services/CreateCepInDbService';
import { GetCepInDbService } from '../services/GetCepInDbService';

import { cepIsValid } from '../utils/cepIsValid';
import { myCache } from '../cache';

class GetCepController {
  async handle(request: Request, response: Response) {
    const cep = String(request.query.cep).trim();

    // if (!cepIsValid(cep)) {
    //   throw new Error('Incorrect CEP!');
    // }

    const getCepInDbService = new GetCepInDbService();
    const cepDetails = await getCepInDbService.execute(cep);
    if (cepDetails) {
      console.log('CEP pego no banco', cep);
      myCache.set(cepDetails.cep, cepDetails);
      return response.json(cepDetails);
    }

    const createInDbService = new CreateCepInDbService();
    const data = await createInDbService.execute(cep);
    if ('erro' in data) {
      return response.status(400).json({ error: 'CEP não existe' });
    }

    console.log('CEP pego da API e salvo no banco', cep);
    myCache.set(data.cep, data);
    return response.json(data);
  }
}

export { GetCepController };
