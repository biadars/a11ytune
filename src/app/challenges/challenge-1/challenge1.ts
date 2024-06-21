import { Challenge } from '../challenge';
import assets from './assets';
import dependencies from './dependencies';
import initialCode from './initialCode';
import {
  containsAccessibilityHeadingRole,
  containsHeadingRole,
  containsListRole,
  containsLinkRole,
  containsButtonRole
} from '@/app/challenges/challenge-1/steps';

const challenge: Challenge = {
  index: 1,
  title: 'What is it?',
  steps: [
    containsHeadingRole,
    containsAccessibilityHeadingRole,
    containsListRole,
    containsLinkRole,
    containsButtonRole
  ],
  challengeSnack: {
    codeChangesDelay: 500,
    files: {
      ...assets,
      'App.tsx': {
        type: 'CODE',
        contents: initialCode
      }
    },
    dependencies
  }
};

export default challenge;
