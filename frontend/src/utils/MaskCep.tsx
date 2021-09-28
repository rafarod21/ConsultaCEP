import { forwardRef } from 'react';
import NumberFormat from 'react-number-format';

interface NumberFormatCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const MaskCep = forwardRef(function NumberFormatCustom(
  props: NumberFormatCustomProps,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format='#####-###'
      mask='_'
    />
  );
});
