import React from 'react';
import { Challenge } from '@/lib/challenges/challenge';
import initialCode from '@/lib/challenges/challenge-4/initialCode';
import dependencies from '@/lib/challenges/challenge-3/dependencies';
import {
  errorIsAnnouncedToScreenReaderStep,
  labelNotDuplicatedOnScreenReaderStep,
  placeholderNotBeingUsedAsLabelStep,
  textInputHasAccessibilityLabelStep
} from '@/lib/challenges/challenge-4/steps';

const renderExtraContent = () => {
  return (
    <>
      <p>
        <b>What&apos;s wrong with the placeholder as label?</b> It saves you
        some space, but ultimately has a few issues:
      </p>
      <ul className="list-disc ml-5 mt-5 mb-10">
        <li>
          Some screen readers won&apos;t read it out (this is a problem with web
          screen readers rather than mobile but good practice to carry across)
        </li>
        <li>
          Once you start typing, they&apos;re gone - if you wanted to reference
          them to check your input, you can&apos;t
        </li>
      </ul>
      See more in the{' '}
      <a href="https://www.w3.org/WAI/tutorials/forms/instructions/#:~:text=%3E-,Placeholder%20text,when%20users%20start%20entering%20text.">
        W3C guidance for forms
      </a>
    </>
  );
};
const challenge: Challenge = {
  index: 4,
  title: 'Form feedback',
  description:
    "You'll likely implement some kind of form in your application sooner or later! Make sure labels and errors are clearly announced and associated with the right input.",
  steps: [
    placeholderNotBeingUsedAsLabelStep,
    textInputHasAccessibilityLabelStep,
    labelNotDuplicatedOnScreenReaderStep,
    errorIsAnnouncedToScreenReaderStep
  ],
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
  }
};

export default challenge;
