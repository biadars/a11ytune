import { Challenge, ChallengeStepResult } from '@/lib/challenges/challenge';

export default function getChallengeResults(
  challenge: Challenge,
  code: string
): ChallengeStepResult[] {
  const resultsToDisplay: ChallengeStepResult[] = [];
  let foundError = false;

  challenge.steps.forEach((step) => {
    if (step.test(code)) {
      if (!foundError) {
        resultsToDisplay.push({ message: step.successMessage, passed: true });
      }
    } else {
      if (!foundError) {
        resultsToDisplay.push({ message: step.failureMessage, passed: false });
      }
      foundError = true;
    }
  });

  return resultsToDisplay;
}
