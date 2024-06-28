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

