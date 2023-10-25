"use client"
import * as React from 'react';
import {
    Unstable_NumberInput as BaseNumberInput,
    NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import {Box, styled} from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useProductStore} from "@/stores/productStore";

const NumberInput = React.forwardRef(function CustomNumberInput(
    props: NumberInputProps,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <BaseNumberInput
            slots={{
                root: StyledInputRoot,
                input: StyledInput,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    children: <AddIcon />,
                    className: 'increment',
                },
                decrementButton: {
                    children: <RemoveIcon />,
                },
            }}
            {...props}
            ref={ref}
        />
    );
});

export default function QuantityInput() {
    const [value, setValue] = React.useState<number>(1);

    const handleValueChange = (newValue: number) => {
        setValue(newValue);
        useProductStore.getState().setQuantity(newValue)
    }

    return (
        <Box sx={{mb:1, display:'inline-flex', justifyContent:'center', alignItems: 'center'}}>
            Amount:
            <NumberInput aria-label="Quantity Input" min={1} max={99} defaultValue={1} value={value}
                         onChange={(event, val) => handleValueChange(val === undefined ? 1 : val)}/>
        </Box>
    )
}


const blue = {
    100: '#daecff',
    200: '#b6daff',
    300: '#66b2ff',
    400: '#3399ff',
    500: '#007fff',
    600: '#0072e5',
    800: '#004c99',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledInputRoot = styled('div')(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
    ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 4px;
  margin: 0 4px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${theme.palette.primary.main};
  }

  &:focus {
    border-color: ${theme.palette.primary.main};;
    box-shadow: 0 0 0 3px ${theme.palette.primary.light};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 0;
  border-radius: 999px;
  color: ${theme.palette.primary.main};
  background: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.primary.light};
    cursor: pointer;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);