import React from 'react';
import { Challenge, Hint } from '@/lib/challenges/challenge';
import dependencies from '@/lib/challenges/challenge-2/dependencies';
import initialCode from '@/lib/challenges/challenge-2/initialCode';
import {
  accessibilityHintDescribesButtonAction,
  accessibilityLabelsDescribeLocationAndOpeningHours,
  allStoresHaveAccessibilityHints,
  allStoresHaveAccessibilityLabels
} from '@/lib/challenges/challenge-2/steps';

const renderExtraContent = () => {
  return (
    <>
      <p>Some extra notes on accessibility labels:</p>
      <ul className="list-disc ml-5 mt-5 mb-10">
        <li>
          This is also used by some voice control apps to determine the voice
          command for interacting with an element, so you should closely align
          it to the displayed text
        </li>
        <li>
          Best practice for this is to keep them concise, with no punctuation
        </li>
      </ul>
      <p>And on accessibility hints:</p>
      <ul className="list-disc ml-5 mt-5 mb-10">
        <li>
          This is read out by default on Android, but needs to be configured on
          iOS - check your settings, specifically Accessibility &gt; VoiceOver
          &gt; Verbosity &gt; Speak Hints
        </li>
        <li>
          You don&apos;t always need to use these, only when the label of the
          component does not make it clear enough what the component does, and
          you want to provide more context to the user
        </li>
        <li>
          As opposed to labels, these should be capitalised and contain
          punctuation
        </li>
      </ul>
    </>
  );
};

const hints: Hint[] = [
  {message: "Have you looked at \"accessibilityLabel\"?"},
  {message: "Try testing that your label is read out by a screen reader on a real device."},
  {message: "Have you made sure the accessibility label is on an interactive component?"},
  {message: "Have you added an \"accessibilityHint\" that describes what the button does?"}
]

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
  hints: hints,
  renderExtraContent,
  challengeSnack: {
    codeChangesDelay: 500,
    files: {
      'App.tsx': {
        type: 'CODE',
        contents: initialCode
      }
    },
    dependencies
  },
  requiresUserDefinedStrings: true
};

export default challenge;
