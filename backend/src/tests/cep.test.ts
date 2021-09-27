import { createConnection, getConnection } from 'typeorm';
import request from 'supertest';

import app from '../server';
import { cepIsValid } from '../utils/cepIsValid';

describe('Search CEP', () => {
  beforeAll(async () => {
    return await createConnection();
  });

  afterAll(async () => {
    return await getConnection().close();
  });

  it('Existing CEP should return the CEP data', async () => {
    const response = await request(app).get('/ceps?cep=87013210');

    expect(response.body).toHaveProperty('cep');
    expect(response.body).toHaveProperty('street');
    expect(response.body).toHaveProperty('complement');
    expect(response.body).toHaveProperty('neighborhood');
    expect(response.body).toHaveProperty('city');
    expect(response.body).toHaveProperty('uf');
    expect(response.body).toHaveProperty('ibge');
    expect(response.body).toHaveProperty('gia');
    expect(response.body).toHaveProperty('ddd');
    expect(response.body).toHaveProperty('siafi');
  });

  it('Not existing CEP should return message: CEP não existe', async () => {
    const response = await request(app).get('/ceps?cep=99999999');

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({ error: 'CEP não existe' });
  });
});

describe('Validation CEPs', () => {
  it('CEP in the correct format should return true', async () => {
    const cep = cepIsValid('12345678');

    expect(cep).toBe(true);
  });

  it('Length of CEP other than 8 should return false', async () => {
    const bigger = cepIsValid('123456789');
    const smaller = cepIsValid('1234567');
    const empty = cepIsValid('');

    expect(bigger).toBe(false);
    expect(smaller).toBe(false);
    expect(empty).toBe(false);
  });

  it("CEP that doesn't just have numbers should return false", async () => {
    const letters = cepIsValid('123a5678');
    const specialCharacters = cepIsValid('123#5678');

    expect(letters).toBe(false);
    expect(specialCharacters).toBe(false);
  });
});
