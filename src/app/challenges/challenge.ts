import { SnackOptions } from 'snack-sdk';

export type ChallengeStep = {
  successMessage: string;
  failureMessage: string;
  test: (code: string) => boolean;
};

export type ChallengeStepResult = {
  message: string;
  passed: boolean;
};

export type Challenge = {
  index: number;
  title: string;
  challengeSnack: SnackOptions;
  steps: ChallengeStep[];
};

export function runChallengeSteps(challenge: Challenge, code: string) {
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
