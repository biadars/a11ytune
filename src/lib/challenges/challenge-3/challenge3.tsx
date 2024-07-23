import React from 'react';
import { Challenge, Hint } from '@/lib/challenges/challenge';
import initialCode from '@/lib/challenges/challenge-3/initialCode';
import dependencies from '@/lib/challenges/challenge-3/dependencies';
import {
  allButtonsAre48By48Step,
  allIconsAre24By24Step,
  containsAccessibilityStateStep
} from '@/lib/challenges/challenge-3/steps';

const renderExtraContent = () => {
  return (
    <>
      <p>
        <b>
          Why the odd mathsy TouchableOpacity approach and not{' '}
          <a href="https://dev.to/rushi-patel/increase-touchable-area-of-button-in-react-native-3hek">
            hitslop
          </a>
        </b>{' '}
        At the time of writing, hitSlop does not get picked up by Robo tests or
        the Android Accessibility Scanner, so you may get lots of false
        positives in your accessibility testing. We found we&apos;d risk
        ignoring real issues if we had too many of these false positives, which
        lead us to TouchableOpacity.
      </p>
      <p>
        The other interesting thing about these +/-b is that they are based on
        icons. One of the accessibility technologies you should be supporting is
        handling larger text gracefully. If you have a look in your device
        settings and enlarge your text, you&apos;ll notice the icons stay the
        same size. This is particularly weird on the previous screen when they
        were more integrated with the displayed text. If you&apos;re up for an
        extra challenge, you can try scaling your icons along with your text
        (more maths! have a look at{' '}
        <a href="https://reactnative.dev/docs/pixelratio">PixelRatio</a>)
      </p>
    </>
  );
};

const hints: Hint[] = [
  {message: "When the minus button is disabled, is there a non-visual cue to tell the user?"},
  {message: "\"hitSlop\" isn't the most reliable method for increasing the size of buttons (more on this later!). Is there another way you can do this?"},
  {message: "This is the only challenge where you'll need to edit the CSS."},
  {message: "The CSS you will need to change is in the \"quantityButton\" styling."},
  {message: "The minus icon is wrapped in a transparent button, you want to make the button 48x48 pixels."},
  {message: "The icon itself should still look the same. Have a look on your device, does your icon move when you edit the padding?"},
  {message: "You'll need to use the margin to counteract any padding you've added."}
]

const challenge: Challenge = {
  index: 3,
  title: 'Scaling it up!',
  description:
    'Two things are at play in this challenge: making sure all users know when an element is enabled or disabled, as well as making buttons large enough for them to be easy to tap on small devices by users with mobility issues. Careful though, the design team insists you cannot change the visible size of the buttons, the +/- icons have to stay unchanged!',
  renderExtraContent,
  steps: [
    containsAccessibilityStateStep,
    allIconsAre24By24Step,
    allButtonsAre48By48Step
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
