import { KeyboardEvent, useEffect, useState } from 'react';

import { Button, TextField, LinearProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { MaskCep } from '../../utils/MaskCep2';
import { cepIsValid } from '../../utils/cepIsValid';

import { api } from '../../services/api';

import './styles.scss';

type CepProps = {
  cep: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

const errorMessagesCep = {
  incomplete: 'CEP incompleto',
  notExist: 'O CEP informado não existe',
};

const states = new Map([
  ['AC', 'Acre'],
  ['AL', 'Alagoas'],
  ['AP', 'Amapá'],
  ['AM', 'Amazonas'],
  ['BA', 'Bahia'],
  ['CE', 'Ceará'],
  ['DF', 'Distrito Federal'],
  ['ES', 'Espírito Santo'],
  ['GO', 'Goías'],
  ['MA', 'Maranhão'],
  ['MT', 'Mato Grosso'],
  ['MS', 'Mato Grosso do Sul'],
  ['MG', 'Minas Gerais'],
  ['PA', 'Pará'],
  ['PB', 'Paraíba'],
  ['PR', 'Paraná'],
  ['PE', 'Pernambuco'],
  ['PI', 'Piauí'],
  ['RJ', 'Rio de Janeiro'],
  ['RN', 'Rio Grande do Norte'],
  ['RS', 'Rio Grande do Sul'],
  ['RO', 'Rondônia'],
  ['RR', 'Roraíma'],
  ['SC', 'Santa Catarina'],
  ['SP', 'São Paulo'],
  ['SE', 'Sergipe'],
  ['TO', 'Tocantins'],
]);

export const Home: React.FC = () => {
  const [detailsCep, setDetailsCep] = useState<CepProps>();
  const [inputCep, setInputCep] = useState('');
  const [errorInputCep, setErrorInputCep] = useState(false);
  const [currentErrorMessageCep, setCurrentErrorMessageCep] = useState(
    errorMessagesCep.incomplete
  );
  const [loading, setLoading] = useState(false);

  async function handleGetCep() {
    setLoading(true);
    if (cepIsValid(inputCep)) {
      try {
        const response = await api.get(`/ceps`, {
          params: {
            cep: inputCep,
          },
        });
        const cepInfo: CepProps = response.data;

        cepInfo.cep = inputCep.slice(0, 5) + '-' + inputCep.slice(5);

        const state = states.get(cepInfo.uf);
        if (state) cepInfo.uf = `${state} (${cepInfo.uf})`;

        setDetailsCep(cepInfo);
      } catch (error) {
        setErrorInputCep(true);
        setCurrentErrorMessageCep(errorMessagesCep.notExist);
        setDetailsCep(undefined);
      }
    } else {
      setErrorInputCep(true);
      setCurrentErrorMessageCep(errorMessagesCep.incomplete);
      setDetailsCep(undefined);
    }

    setLoading(false);
  }

  const onKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleGetCep();
    }
  };

  useEffect(() => {
    setDetailsCep(undefined);
    setInputCep('');
    setErrorInputCep(false);
    setLoading(false);
  }, []);

  return (
    <div className='search-cep-page'>
      {loading && <LinearProgress className='loading' />}
      <div className='page-title'>
        <h1>BUSCA CEP</h1>
        <span>Deseja saber mais sobre seu CEP? Pesquise agora!!</span>
      </div>
      <div className='search-cep-content'>
        <div className='search-cep-interations'>
          <TextField
            label='CEP'
            variant='outlined'
            color='primary'
            value={inputCep}
            onChange={(event) => setInputCep(event.target.value)}
            InputProps={{ inputComponent: MaskCep as any }}
            error={errorInputCep}
            helperText={errorInputCep ? currentErrorMessageCep : ''}
            onFocus={() => setErrorInputCep(false)}
            onKeyUp={onKeyUp}
          />
          <Button
            type='submit'
            variant='contained'
            onClick={handleGetCep}
            endIcon={<SendIcon />}
            disabled={loading}
          >
            Pesquisar CEP
          </Button>
        </div>

        <div className='search-cep-data'>
          {!loading && detailsCep && (
            <>
              <h1>
                CEP <strong>{detailsCep.cep}</strong>
              </h1>
              <span>
                Logradouro: <strong>{detailsCep.street}</strong>
              </span>
              <span>
                Complemento: <strong>{detailsCep.complement}</strong>
              </span>
              <span>
                Bairro: <strong>{detailsCep.neighborhood}</strong>
              </span>
              <span>
                Localidade: <strong>{detailsCep.city}</strong>
              </span>
              <span>
                Estado: <strong>{detailsCep.uf}</strong>
              </span>
              <span>
                IBGE: <strong>{detailsCep.ibge}</strong>
              </span>
              <span>
                GIA: <strong>{detailsCep.gia}</strong>
              </span>
              <span>
                DDD: <strong>{detailsCep.ddd}</strong>
              </span>
              <span>
                SIAFI: <strong>{detailsCep.siafi}</strong>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
