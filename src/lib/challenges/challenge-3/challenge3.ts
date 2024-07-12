import { Challenge } from '@/lib/challenges/challenge';
import initialCode from '@/lib/challenges/challenge-3/initialCode';
import dependencies from '@/lib/challenges/challenge-3/dependencies';
import {
  allButtonsAre48By48Step,
  allIconsAre24By24Step,
  containsAccessibilityStateStep
} from '@/lib/challenges/challenge-3/steps';

const challenge: Challenge = {
  index: 3,
  title: 'Scaling it up!',
  steps: [
    containsAccessibilityStateStep,
    allIconsAre24By24Step,
    allButtonsAre48By48Step
  ],
  challengeSnack: {
    codeChangesDelay: 500,
    files: {
      'App.tsx': {
        type: 'CODE',
        contents: initialCode
      }
    },
    dependencies
  }
};

export default challenge;
