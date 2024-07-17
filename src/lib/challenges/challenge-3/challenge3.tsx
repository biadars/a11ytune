import React from 'react';
import { Challenge } from '@/lib/challenges/challenge';
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
