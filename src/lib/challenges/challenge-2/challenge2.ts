import { Challenge } from '@/lib/challenges/challenge';
import dependencies from '@/lib/challenges/challenge-2/dependencies';
import initialCode from '@/lib/challenges/challenge-2/initialCode';

const challenge: Challenge = {
  index: 2,
  title: 'What does it do?',
  steps: [],
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
