import {
  findAllButtonComponents,
  findAllIconComponents,
  findTouchableOpacityOpeningTag
} from '@/lib/challenges/codeFinders';
import { ChallengeStep } from '@/lib/challenges/challenge';

const containsAccessibilityState = (code: string) => {
  const allButtons = findAllButtonComponents(code);
  if (allButtons.length === 0) {
    return false;
  }

  const minusButton = allButtons[0];
  if(!minusButton) {
    return false
  }
  const touchableOpacityOpeningTag = findTouchableOpacityOpeningTag(minusButton)
  return !!touchableOpacityOpeningTag?.match(
    /accessibilityState\s*=\s*{\s*\(?\s*{\s*disabled:\s*\(?\s*quantity\s*===\s*0\s*\)?\s*}\s*\)?\s*}/gm
  );
};

const iconIs24By24 = (iconCode: string) => {
  const iconSize = iconCode.match(/size=\{(\d+)}/);
  return iconSize && iconSize?.length === 2 && iconSize[1] === '24';
};

const allIconsAre24By24 = (code: string) => {
  const allIcons = findAllIconComponents(code);
  return allIcons.every(iconIs24By24);
};

const touchableOpacityIs48By48 = (code: string) => {
  const touchableOpacityStyles = code.match(/quantityButton: \{[\s?\S]*?}/gm);
  if (touchableOpacityStyles?.length !== 1) {
    return false;
  }

  const touchableOpacityStyle = touchableOpacityStyles[0];
  const touchableOpacityStyleHas24Padding =
    touchableOpacityStyle.match(/padding:\s*12/)?.length === 1;
  const touchableOpacityStyleHasNegative24Margin =
    touchableOpacityStyle.match(/margin:\s-12/)?.length === 1;

  return (
    touchableOpacityStyleHas24Padding &&
    touchableOpacityStyleHasNegative24Margin
  );
};

export const containsAccessibilityStateStep: ChallengeStep = {
  successMessage: 'Found accessibility disabled state',
  failureMessage: 'Could not find accessibility disabled state',
  test: containsAccessibilityState
};

export const allIconsAre24By24Step: ChallengeStep = {
  successMessage: 'All icons are 24x24 pixels',
  failureMessage:
    'Not all icons are 24x24 pixels! The design team insists the icon size remains unchanged.',
  test: allIconsAre24By24
};

export const allButtonsAre48By48Step: ChallengeStep = {
  successMessage: 'All buttons are 48x48 pixels',
  failureMessage:
    'Not all buttons are 48x48 pixels, users may struggle to tap the right area to activate the button',
  test: touchableOpacityIs48By48
};
