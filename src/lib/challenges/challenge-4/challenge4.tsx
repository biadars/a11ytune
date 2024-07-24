import React from 'react';
import { Challenge, Hint } from '@/lib/challenges/challenge';
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

const hints: Hint[] = [
  {message: "The placeholder will disappear when you start typing. Make sure there's still something to tell the user what the text input is for."},
  {message: "It doesn't have to be anything fancy, a text component will do."},
  {message: "We don't want the screen reader to read out the label for the text input twice."},
  {message: "You can hide text elements from the screen reader to prevent duplication."},
  {message: "The React Native properties for hiding components are different on iOS and Android, so you'll need to handle both."},
  {message: "Have a look through the React Native AMA Guidelines for forms.", link:"https://commerce.nearform.com/open-source/react-native-ama/guidelines/forms"},
  {message: "When you submit the form empty the app displays an error. Would a screen reader be alerted that the error has appeared without navigating to it? Try running it on your phone to check."},
  {message: "Can you make sure the user is alerted to the error on both Android and iOS? If you've come across \"accessibilityLiveRegion\", that only fixes the problem on Android. You might want to have a look at \"AccessibilityInfo\".", link: "https://reactnative.dev/docs/accessibilityinfo"},
  {message: "Your solution should use a combination of the \"announceForAccessibility\" function and a \"useEffect\"."}
]

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
  }
};

export default challenge;
