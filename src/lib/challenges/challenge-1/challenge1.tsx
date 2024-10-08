import React from 'react';
import { Challenge, Hint } from '../challenge';
import dependencies from './dependencies';
import initialCode from './initialCode';
import {
  containsBothRoleAndAccessibilityRoleForHeaderStep,
  containsHeaderRoleStep,
  containsLinkRoleStep,
  containsButtonRoleStep
} from '@/lib/challenges/challenge-1/steps';

const renderExtraContent = () => {
  return (
    <>
      <p>Why both role and accessibilityRole?</p>
      <ul className="list-disc ml-5 mt-5 mb-10">
        <li>
          accessibilityRole leads to the role being read out for the component
        </li>
        <li>
          role allows the user to cycle through headings (using the VoiceOver
          rotor on iOS or the 3 finger swipe on Android)
        </li>
        <li>
          role should also do this for links, but under the current version of
          React Native (0.74) it is not getting picked up
        </li>
        <li>
          Theoretically role should take precedence, but this isn&apos;t always
          the case, so we recommend just using both
        </li>
      </ul>
      <p>
        Have a look through the list of available roles, there are quite a few.
        Some of them are only applicable per platform - for example, only
        Android will read out the list role.
      </p>
    </>
  );
};

const hints: Hint[] = [
  {message: "Have a look at the \"Accessibility\" section of the React Native docs.", link:"https://reactnative.dev/docs/accessibility"},
  {message: "There's two ways to describe a component's role to the screen reader. You may need to add both!"},
  {message: "Have a look at all of the roles which a component could have. We want to make sure any we've used are described."},
  {message: "The two different role descriptions take slightly different names for a heading (annoyingly!). Check the docs to make sure you're using the correct one for each."}
]

const challenge: Challenge = {
  index: 1,
  title: 'What is it?',
  description:
    "When creating web content, you often get some screen reader support for free by just using the right HTML element (e.g. your headings are <h> tags, and the screen reader understands that). React Native components often aren't mapped the same way, so you have to describe what they do to the screen reader.",
  renderExtraContent,
  steps: [
    containsHeaderRoleStep,
    containsBothRoleAndAccessibilityRoleForHeaderStep,
    containsLinkRoleStep,
    containsButtonRoleStep
  ],
  hints: hints,
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
