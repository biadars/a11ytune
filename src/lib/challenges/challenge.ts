import { SnackOptions } from 'snack-sdk';
import React from 'react';

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
  description: string;
  challengeSnack: SnackOptions;
  steps: ChallengeStep[];
  renderExtraContent: () => React.JSX.Element;
};
