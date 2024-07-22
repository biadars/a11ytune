import { findAllButtonComponents } from '@/lib/challenges/codeFinders';
import { ChallengeStep } from '@/lib/challenges/challenge';

export const containsAnAccessibilityLabelForEachStore = (code: string) => {
  const allButtons = findAllButtonComponents(code);
  return allButtons.every((button) =>
    button.match(/accessibilityLabel\s*=\s*[{"'`].*["'`}]/gm)
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
  const allLabels = storeButton.match(/accessibilityLabel\s*=\s*{?\s*["'`].*["'`]\s*}?/gm);
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

export const containsAccessibilityHintForEachStore = (code: string) => {
  const allButtons = findAllButtonComponents(code);
  return allButtons.every((button) =>
    button.match(/accessibilityHint\s*=\s*{?\s*["'`].*["'`]\s*}?/gm)
  );
};

export const accessibilityHintReferencesAction = (code: string) => {
  const allButtons = findAllButtonComponents(code);
  if (allButtons.length === 0 || !allButtons[0]) {
    return false;
  }
  const storeButton = allButtons[0];
  const allHints = storeButton.match(/accessibilityHint\s*=\s*{?\s*["'`].*["'`]\s*}?/gm);
  if (!allHints) {
    return false;
  }

  const accessibilityHint = allHints[0].toLowerCase();
  return (
    accessibilityHint.includes('opens') ||
    accessibilityHint.includes('shows') ||
    accessibilityHint.includes('displays') ||
    accessibilityHint.includes('navigates')
  );
};

export const allStoresHaveAccessibilityLabels: ChallengeStep = {
  successMessage: 'Found accessibility label for each store',
  failureMessage: 'Could not find accessibility label for each store',
  test: containsAnAccessibilityLabelForEachStore
};

export const accessibilityLabelsDescribeLocationAndOpeningHours: ChallengeStep =
  {
    successMessage: 'Accessibility label mentions address and opening hours',
    failureMessage:
      'Accessibility label does not mention address and opening hours',
    test: accessibilityLabelReferencesLocationAndOpeningTimes
  };

export const allStoresHaveAccessibilityHints: ChallengeStep = {
  successMessage: 'Found accessibility hint for each store',
  failureMessage: 'Could not find accessibility hint for each store',
  test: containsAccessibilityHintForEachStore
};

export const accessibilityHintDescribesButtonAction: ChallengeStep = {
  successMessage: 'Accessibility hint describes button action',
  failureMessage: 'Accessibility hint does not describe button action',
  test: accessibilityHintReferencesAction
};
