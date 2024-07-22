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
  numberOfHints: number;
  renderHint: (hintIndex: number) => React.JSX.Element;
  renderExtraContent: () => React.JSX.Element;
};

export type Hint = {
  message: string;
  link?: string;
}
