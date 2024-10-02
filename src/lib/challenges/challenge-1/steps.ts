import {
  findAllButtonComponents,
  findAllTextComponents,
  findTouchableOpacityOpeningTag
} from '@/lib/challenges/codeFinders';
import { ChallengeStep } from '@/lib/challenges/challenge';

const whoAreWeHasHeadingRole = (code: string) => {
  const textEntries = findAllTextComponents(code);
  const findUsHeading = textEntries.find((entry) =>
    entry.includes('Who are we')
  );
  return !!findUsHeading?.match(/role\s*=\s*{?\s*["']header["']\s*}?/gm);
};

const whoAreWeHasHeadingAccessibilityRole = (code: string) => {
  const textEntries = findAllTextComponents(code);
  const findUsHeading = textEntries.find((entry) =>
    entry.includes('Who are we')
  );
  return !!findUsHeading?.match(
    /accessibilityRole\s*=\s*{?\s*["']header["']\s*}?/gm
  );
};

const hereHasLinkRole = (code: string) => {
  const buttons = findAllButtonComponents(code);
  const hereLink = buttons.find((entry) => entry.includes('here'));
  if (!hereLink) {
    return false;
  }
  const touchableOpacityTag = findTouchableOpacityOpeningTag(hereLink);
  return (
    !!touchableOpacityTag?.match(/role\s*=\s*{?\s*["']link["']\s*}?/gm) &&
    !!touchableOpacityTag?.match(
      /accessibilityRole\s*=\s*{?\s*["']link["']\s*}?/gm
    )
  );
};

const browseHasButtonRole = (code: string) => {
  const buttons = findAllButtonComponents(code);
  const browseButton = buttons.find((entry) =>
    entry.includes('Browse our records')
  );
  if (!browseButton) {
    return false;
  }
  const touchableOpacityTag = findTouchableOpacityOpeningTag(browseButton);
  return (
    !!touchableOpacityTag?.match(/role\s*=\s*{?\s*["']button["']\s*}?/gm) &&
    !!touchableOpacityTag?.match(
      /accessibilityRole\s*=\s*{?\s*["']button["']\s*}?/gm
    )
  );
};

export const containsHeaderRoleStep: ChallengeStep = {
  successMessage: "Found 'Who are we' header",
  failureMessage: "Could not find 'Who are we' header",
  test: (code) =>
    whoAreWeHasHeadingRole(code) || whoAreWeHasHeadingAccessibilityRole(code)
};

export const containsBothRoleAndAccessibilityRoleForHeaderStep: ChallengeStep =
  {
    successMessage: 'Header has both role and accessibility role',
    failureMessage: 'Header does not have both role and accessibility role',
    test: (code) =>
      whoAreWeHasHeadingRole(code) && whoAreWeHasHeadingAccessibilityRole(code)
  };

export const containsLinkRoleStep: ChallengeStep = {
  successMessage: 'Found link to more info',
  failureMessage: 'Could not find link to more info',
  test: hereHasLinkRole
};

export const containsButtonRoleStep: ChallengeStep = {
  successMessage: "Found 'Browse our records' button",
  failureMessage: "Could not find 'Browse our records' button",
  test: browseHasButtonRole
};
