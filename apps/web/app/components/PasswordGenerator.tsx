'use client';

import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Password, PasswordOptions } from '../../../../shared';

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(12);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<Password>({ password: '' });

  const generatePassword = async () => {
    // Call the API to generate password
    const response = await fetch(
      'http://localhost:8081/api/password/generate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          length,
          useNumbers,
          useSymbols,
        } as PasswordOptions),
      }
    );
    const data = await response.json();
    console.log(data);
    setPassword(data);
  };

  return (
    <div>
      <TextField
        label="Length"
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
          />
        }
        label="Include Numbers"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={useSymbols}
            onChange={(e) => setUseSymbols(e.target.checked)}
          />
        }
        label="Include Symbols"
      />
      <Button variant="contained" onClick={generatePassword}>
        Generate Password
      </Button>
      <div>
        <h3>Generated Password:</h3>
        <p>{password.password}</p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
