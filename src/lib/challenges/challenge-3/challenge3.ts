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
  description:
    'Two things are at play in this challenge: making sure all users know when an element is enabled or disabled, as well as making buttons large enough for them to be easy to tap on small devices by users with mobility issues. Careful though, the design team insists you cannot change the visible size of the buttons, the +/- icons have to stay unchanged!',
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
