import { secondCheckStatus } from './utils';

export async function checkUp(app, heart, beats: number, iterations: number): Promise<void> {
  heart.createEvent(beats, { countTo: iterations }, async (count, last) => {
    const secondCheck = await secondCheckStatus();
    if (!secondCheck) {
      app.quit();
    }
  });
}
