import { Challenge } from '../challenge';
import dependencies from './dependencies';
import initialCode from './initialCode';
import {
  containsAccessibilityHeadingRole,
  containsHeadingRole,
  containsLinkRole,
  containsButtonRole
} from '@/app/challenges/challenge-1/steps';

const challenge: Challenge = {
  index: 1,
  title: 'What is it?',
  steps: [
    containsHeadingRole,
    containsAccessibilityHeadingRole,
    containsLinkRole,
    containsButtonRole
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
