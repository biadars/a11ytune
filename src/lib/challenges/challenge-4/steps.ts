import {
  findAllTextComponents,
  findAllTextInputs
} from '@/lib/challenges/codeFinders';
import { ChallengeStep } from '@/lib/challenges/challenge';

const getPostCodeInput = (code: string) => {
  const allTextInputs = findAllTextInputs(code);
  if (allTextInputs.length < 1) {
    return undefined;
  }

  return allTextInputs[0];
};

const getSeparateLabel = (code: string) => {
  const allTextComponents = findAllTextComponents(code);
  return allTextComponents.find((text) => text.includes('Enter your postcode'));
};

const textInputHasAccessibilityLabel = (code: string) => {
  const postCodeInput = getPostCodeInput(code);
  return !!postCodeInput?.match(
    /accessibilityLabel\s*=\s*{?\s*["'`]Enter your postcode["'`]\s*}?/gm
  );
};

const labelHiddenOnAndroidScreenReader = (code: string) => {
  const label = getSeparateLabel(code);
  return !!label?.match(/importantForAccessibility\s*=\s*{?\s*['"`]no["'`]\s*}?/gm);
};

const labelHiddenOniOSScreenReader = (code: string) => {
  const label = getSeparateLabel(code);
  return !!label?.match(/accessibilityElementsHidden\s*=\s*{?\s*['"`]true['"`]\s*}?/gm);
};

const errorIsAnnouncedToScreenReader = (code: string) => {
  const matchingEffects =
    code.match(
      /useEffect\(\s*\(\)\s*=>\s*{[\s\S]+\}\s*,\s*\[\s*formError\s*]\s*\)/gm
    ) ?? [];
  if (matchingEffects.length < 1) {
    return false;
  }

  const errorEffect = matchingEffects[0];
  const ifBlocks = errorEffect?.match(
    /if\s*\(\s*formError\s*\)\s*\{[\s\S]+}/gm
  );
  if (!ifBlocks || ifBlocks.length < 1) {
    return false;
  }

  return (
    !!ifBlocks[0]?.match(
      /AccessibilityInfo\.announceForAccessibility\([\s\S]+\)/gm
    ) ||
    !!ifBlocks[0]?.match(
      /AccessibilityInfo\.announceForAccessibilityWithOptions\([\s\S]+\)/gm
    )
  );
};

export const placeholderNotBeingUsedAsLabelStep: ChallengeStep = {
  successMessage:
    'Placeholder not being used as label, found separate label text.',
  failureMessage:
    'Placeholder is being used as label, could not find separate label text',
  test: (code) => !!getSeparateLabel(code)
};

export const textInputHasAccessibilityLabelStep: ChallengeStep = {
  successMessage: 'Found accessibility label associated with text input',
  failureMessage:
    'Could not find accessibility label associated with text input',
  test: textInputHasAccessibilityLabel
};

export const labelNotDuplicatedOnScreenReaderStep: ChallengeStep = {
  successMessage: 'Input label not duplicated by screen reader',
  failureMessage: 'Input label is being duplicated by the screen reader',
  test: (code) =>
    labelHiddenOnAndroidScreenReader(code) && labelHiddenOniOSScreenReader(code)
};

export const errorIsAnnouncedToScreenReaderStep: ChallengeStep = {
  successMessage: 'Error is announced by screen reader',
  failureMessage: 'Error is not announced by screen reader',
  test: errorIsAnnouncedToScreenReader
};
