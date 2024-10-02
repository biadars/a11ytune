import { findAllButtonComponents, findTouchableOpacityOpeningTag } from '@/lib/challenges/codeFinders';
import { ChallengeStep } from '@/lib/challenges/challenge';

export const containsAnAccessibilityLabelForEachStoreOnTouchableOpacity = (code: string) => {
  const allButtons = findAllButtonComponents(code);

  return allButtons.every((button) => {
    const touchableOpacityTag = findTouchableOpacityOpeningTag(button)
    if (!touchableOpacityTag) {
      return false
    }
    return touchableOpacityTag.match(/accessibilityLabel\s*=\s*[{"'`].*["'`}]/gm)
  }
  );
};

export const accessibilityLabelReferencesLocationAndOpeningTimes = (
  code: string
) => {
  const allButtons = findAllButtonComponents(code);
  if (allButtons.length === 0 || !allButtons[0]) {
    return false;
  }
  const storeButton = allButtons[0];
  const touchableOpacityTag = findTouchableOpacityOpeningTag(storeButton)
  if (!touchableOpacityTag) {
    return false
  }

  const allLabels = touchableOpacityTag.match(/accessibilityLabel\s*=\s*{?\s*["'`].*["'`]\s*}?/gm);
  if (!allLabels) {
    return false;
  }

  const accessibilityLabel = allLabels[0].toLowerCase();
  const accessibilityLabelContainsAddress =
    accessibilityLabel.includes('location') ||
    accessibilityLabel.includes('address');
  const accessibilityLabelContainsHours =
    accessibilityLabel.includes('open') || accessibilityLabel.includes('hours');

  return accessibilityLabelContainsAddress && accessibilityLabelContainsHours;
};

export const containsAccessibilityHintForEachStoreOnTouchableOpacity = (code: string) => {
  const allButtons = findAllButtonComponents(code);
  return allButtons.every((button) => {
    const touchableOpacityTag = findTouchableOpacityOpeningTag(button)
      if (!touchableOpacityTag) {
        return false
      }

    return touchableOpacityTag.match(/accessibilityHint\s*=\s*{?\s*["'`].*["'`]\s*}?/gm)
  }
  );
};

export const accessibilityHintReferencesAction = (code: string) => {
  const allButtons = findAllButtonComponents(code);
  if (allButtons.length === 0 || !allButtons[0]) {
    return false;
  }
  const storeButton = allButtons[0];
  const touchableOpacityTag = findTouchableOpacityOpeningTag(storeButton)
  if (!touchableOpacityTag) {
    return false
  }

  const allHints = touchableOpacityTag.match(/accessibilityHint\s*=\s*{?\s*["'`].*["'`]\s*}?/gm);
  if (!allHints) {
    return false;
  }

  const accessibilityHint = allHints[0].toLowerCase();
  return (
    accessibilityHint.includes('opens') ||
    accessibilityHint.includes('will open') ||
    accessibilityHint.includes('shows') ||
    accessibilityHint.includes('will show') ||
    accessibilityHint.includes('displays') ||
    accessibilityHint.includes('will display') ||
    accessibilityHint.includes('navigates') ||
    accessibilityHint.includes('will navigate')||
    accessibilityHint.includes('gives' && 'information')
  );
};

export const allStoresHaveAccessibilityLabels: ChallengeStep = {
  successMessage: 'Found accessibility label on the link for each store',
  failureMessage: 'Could not find accessibility label on the link for each store',
  test: containsAnAccessibilityLabelForEachStoreOnTouchableOpacity
};

export const accessibilityLabelsDescribeLocationAndOpeningHours: ChallengeStep =
  {
    successMessage: 'Accessibility label mentions address and opening hours',
    failureMessage:
      'Accessibility label does not mention address and opening hours',
    test: accessibilityLabelReferencesLocationAndOpeningTimes
  };

export const allStoresHaveAccessibilityHints: ChallengeStep = {
  successMessage: 'Found accessibility hint for link to each store',
  failureMessage: 'Could not find accessibility hint for link to each store',
  test: containsAccessibilityHintForEachStoreOnTouchableOpacity
};

export const accessibilityHintDescribesButtonAction: ChallengeStep = {
  successMessage: 'Accessibility hint describes button action',
  failureMessage: 'Accessibility hint does not describe button action',
  test: accessibilityHintReferencesAction
};
