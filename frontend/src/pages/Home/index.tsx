import { useState } from 'react';

import { Button, TextField } from '@material-ui/core';

import { api } from '../../services/api';
import { MaskCEP } from '../../utils/MaskCEP';

type viaCepProps = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

const errorMessagesCEP = {
  incomplete: 'CEP incompleto',
  notExist: 'O CEP informado não existe',
};

export const Home: React.FC = () => {
  const [dataCEP, setDataCEP] = useState<viaCepProps>();
  const [inputCEP, setInputCEP] = useState('');
  const [errorInputCEP, setErrorInputCEP] = useState(false);
  const [currentErrorMessageCEP, setCurrentErrorMessageCEP] = useState(
    errorMessagesCEP.incomplete
  );

  async function handleGetCEP() {
    if (inputCEP.length === 8) {
      const cepDetails = await api.get(`/ceps`, {
        params: {
          cep: inputCEP,
        },
      });
      console.log(cepDetails);
      //   if ('erro' in cepDetails) {
      //     setErrorInputCEP(true);
      //     setCurrentErrorMessageCEP(errorMessagesCEP.notExist);
      //   }
      //   setDataCEP(cepDetails);
      // } else {
      //   setErrorInputCEP(true);
      //   setCurrentErrorMessageCEP(errorMessagesCEP.incomplete);
    }
  }

  return (
    <div className='App'>
      <br />
      <TextField
        label='CEP'
        variant='outlined'
        value={inputCEP}
        onChange={(event) => setInputCEP(event.target.value)}
        InputProps={{ inputComponent: MaskCEP as any }}
        error={errorInputCEP}
        helperText={errorInputCEP ? currentErrorMessageCEP : ''}
        onFocus={() => setErrorInputCEP(false)}
      />
      <br />
      <br />
      <Button type='submit' variant='contained' onClick={handleGetCEP}>
        Pegar dados do CEP
      </Button>
      <br />
      <br />
      <span>{dataCEP?.logradouro}</span>
    </div>
  );
};
