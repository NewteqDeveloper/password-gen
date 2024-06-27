'use client';

import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(12);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');

  const generatePassword = async () => {
    // Call the API to generate password
    const response = await fetch('/api/generate-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ length, includeNumbers, includeSymbols }),
    });
    const data = await response.json();
    setPassword(data.password);
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
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        }
        label="Include Numbers"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        }
        label="Include Symbols"
      />
      <Button variant="contained" onClick={generatePassword}>
        Generate Password
      </Button>
      <div>
        <h3>Generated Password:</h3>
        <p>{password}</p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
