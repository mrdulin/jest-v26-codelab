import { useState } from 'react';

type Steps = 'sending' | 'verifying';

export const useStep = () => {
  const [step, setStep] = useState<Steps>('sending');

  const changeStep = (newStep: Steps) => setStep(newStep);

  return { step, changeStep };
};
