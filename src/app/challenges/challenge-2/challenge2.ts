import { Challenge } from '@/app/challenges/challenge';
import initialCode from '@/app/challenges/challenge-1/initialCode';
import dependencies from '@/app/challenges/challenge-1/dependencies';

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