import {
  findAllButtonComponents,
  findAllTextComponents
} from '@/lib/challenges/codeFinders';
import { ChallengeStep } from '@/lib/challenges/challenge';

const whoAreWeHasHeadingRole = (code: string) => {
  const textEntries = findAllTextComponents(code);
  const findUsHeading = textEntries.find((entry) =>
    entry.includes('Who are we')
  );
  return !!findUsHeading?.match(/role={?["']heading["']}?/gm);
};

const whoAreWeHasHeadingAccessibilityRole = (code: string) => {
  const textEntries = findAllTextComponents(code);
  const findUsHeading = textEntries.find((entry) =>
    entry.includes('Who are we')
  );
  return !!findUsHeading?.match(/accessibilityRole={?["']heading["']}?/gm);
};

const hereHasLinkRole = (code: string) => {
  const buttons = findAllButtonComponents(code);
  const hereLink = buttons.find((entry) => entry.includes('here'));
  return (
    !!hereLink?.match(/role={?["']link["']}?/gm) &&
    !!hereLink?.match(/accessibilityRole={?["']link["']}?/gm)
  );
};

const browseHasButtonRole = (code: string) => {
  const buttons = findAllButtonComponents(code);
  const browseButton = buttons.find((entry) =>
    entry.includes('Browse our records')
  );
  return (
    !!browseButton?.match(/role={?["']button["']}?/gm) &&
    !!browseButton?.match(/accessibilityRole={?["']button["']}?/gm)
  );
};

export const containsHeadingRole: ChallengeStep = {
  successMessage: "Found 'Who are we' heading",
  failureMessage: "Could not find 'Who are we' heading",
  test: whoAreWeHasHeadingRole
};
export const containsAccessibilityHeadingRole: ChallengeStep = {
  successMessage: 'Found heading accessibility role',
  failureMessage: 'Could not find heading accessibility role',
  test: whoAreWeHasHeadingAccessibilityRole
};

export const containsLinkRole: ChallengeStep = {
  successMessage: 'Found link to more info',
  failureMessage: 'Could not find link to more info',
  test: hereHasLinkRole
};

export const containsButtonRole: ChallengeStep = {
  successMessage: "Found 'Browse our records' button",
  failureMessage: "Could not find 'Browse our records' button",
  test: browseHasButtonRole
};
