import { Challenge } from '@/lib/challenges/challenge';
import dependencies from '@/lib/challenges/challenge-2/dependencies';
import initialCode from '@/lib/challenges/challenge-2/initialCode';
import {
  accessibilityHintDescribesButtonAction,
  accessibilityLabelsDescribeLocationAndOpeningHours,
  allStoresHaveAccessibilityHints,
  allStoresHaveAccessibilityLabels
} from '@/lib/challenges/challenge-2/steps';

const challenge: Challenge = {
  index: 2,
  title: 'What does it do?',
  description:
    "Screen readers automatically read out the text content of an element. Sometimes, particularly for interactive elements, that's not clear enough messaging to the user - you may want to tweak the way things are grouped or read out, or give the user extra context about certain actions.",
  steps: [
    allStoresHaveAccessibilityLabels,
    accessibilityLabelsDescribeLocationAndOpeningHours,
    allStoresHaveAccessibilityHints,
    accessibilityHintDescribesButtonAction
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
