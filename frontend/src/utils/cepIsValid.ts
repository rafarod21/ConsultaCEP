export function cepIsValid(cep: string) {
  const validacep = /^[0-9]{8}$/;

  if (validacep.test(cep)) return true;
  return false;
}
