import { Challenge } from '../challenge';
import dependencies from './dependencies';
import initialCode from './initialCode';
import {
  containsAccessibilityHeadingRole,
  containsHeadingRole,
  containsLinkRole,
  containsButtonRole
} from '@/lib/challenges/challenge-1/steps';

const challenge: Challenge = {
  index: 1,
  title: 'What is it?',
  description:
    "When creating web content, you often get some screen reader support for free by just using the right HTML element (e.g. your headings are <h> tags, and the screen reader understands that). React Native components often aren't mapped the same way, so you have to describe what they do to the screen reader.",
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
