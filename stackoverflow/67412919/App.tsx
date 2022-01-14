import { Grid } from './Grid';
import React from 'react';
import { RiskSelector } from './RiskSelector';
import { Portfolio } from './Portfolio';

const home = 'http://localhost:3000/home.png';

export function App(): JSX.Element {
  const [step, setStep] = React.useState(0);
  return (
    <main>
      <Grid centerAlign>
        <button id="home-button" onClick={() => setStep(0)}>
          <img src={home} alt="home button" />
        </button>
        <h1>Financial Advisor</h1>
      </Grid>
      {step === 0 && <RiskSelector continue={() => setStep(1)} />}
      {step === 1 && <Portfolio />}
    </main>
  );
}
