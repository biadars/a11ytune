import { Challenge } from '@/lib/challenges/challenge';
import initialCode from '@/lib/challenges/challenge-4/initialCode';
import dependencies from '@/lib/challenges/challenge-3/dependencies';
import {
  errorIsAnnouncedToScreenReaderStep,
  labelNotDuplicatedOnScreenReaderStep,
  placeholderNotBeingUsedAsLabelStep,
  textInputHasAccessibilityLabelStep
} from '@/lib/challenges/challenge-4/steps';

const challenge: Challenge = {
  index: 4,
  title: 'Form feedback',
  steps: [
    placeholderNotBeingUsedAsLabelStep,
    textInputHasAccessibilityLabelStep,
    labelNotDuplicatedOnScreenReaderStep,
    errorIsAnnouncedToScreenReaderStep
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
