import { describe, expect, it } from '@jest/globals';
import {
  accessibilityHintReferencesAction,
  accessibilityLabelReferencesLocationAndOpeningTimes,
  containsAccessibilityHintForEachStore,
  containsAnAccessibilityLabelForEachStore
} from '@/lib/challenges/challenge-2/steps';

describe('containsAnAccessibilityRoleForEachStore', () => {
  it('Returns false if there are no accessibility labels', () => {
    // given
    const code = `<TouchableOpacity>A11yTune Leeds</TouchableOpacity>`;

    // then
    expect(containsAnAccessibilityLabelForEachStore(code)).toBeFalsy();
  });

  it('Returns false if one of the buttons is missing an accessibility label', () => {
    // given
    const code = `
      <TouchableOpacity accessibilityLabel="A11yTune Leeds">A11yTune Leeds</TouchableOpacity>
      <TouchableOpacity>A11yTune Manchester</TouchableOpacity>
    `;

    // then
    expect(containsAnAccessibilityLabelForEachStore(code)).toBeFalsy();
  });

  it('Returns true if all buttons have accessibility labels', () => {
    // given
    const code = `
      <TouchableOpacity accessibilityLabel="A11yTune Leeds">A11yTune Leeds</TouchableOpacity>
      <TouchableOpacity accessibilityLabel='A11yTune Manchester'>A11yTune Manchester</TouchableOpacity>
    `;

    // then
    expect(containsAnAccessibilityLabelForEachStore(code)).toBeTruthy();
  });
});

describe('accessibilityLabelReferencesLocationAndOpeningTimes', () => {
  it('Returns false if the store summary is missing an accessibility label', () => {
    // given
    const code = `<TouchableOpacity>A11yTuneLeeds</TouchableOpacity>`;

    // then
    expect(
      accessibilityLabelReferencesLocationAndOpeningTimes(code)
    ).toBeFalsy();
  });

  it('Returns false if the store summary contains an accessibility label that does not reference location', () => {
    // given
    const code = `<TouchableOpacity accessibilityLabel="Open 9AM-5PM">A11yTuneLeeds, 123 Example Street, 9AM-5PM</TouchableOpacity>`;

    // then
    expect(
      accessibilityLabelReferencesLocationAndOpeningTimes(code)
    ).toBeFalsy();
  });

  it('Returns false if the store summary contains an accessibility label that does not reference opening hours', () => {
    // given
    const code = `<TouchableOpacity accessibilityLabel="Address 123 Example Street">A11yTuneLeeds, 123 Example Street, 9AM-5PM</TouchableOpacity>`;

    // then
    expect(
      accessibilityLabelReferencesLocationAndOpeningTimes(code)
    ).toBeFalsy();
  });

  it('Returns true if the store summary contains an accessibility label specifying opening hours and location', () => {
    // given
    const code = `<TouchableOpacity accessibilityLabel="Address 123 Example Street, Open from 9AM to 5PM">A11yTuneLeeds, 123 Example Street, 9AM-5PM</TouchableOpacity>`;

    // then
    expect(
      accessibilityLabelReferencesLocationAndOpeningTimes(code)
    ).toBeTruthy();
  });
});

describe('containsAccessibilityHintForEachStore', () => {
  it('Returns false if there are no accessibility hints', () => {
    // given
    const code = `<TouchableOpacity>A11yTune Leeds</TouchableOpacity>`;

    // then
    expect(containsAccessibilityHintForEachStore(code)).toBeFalsy();
  });

  it('Returns false if one of the buttons is missing an accessibility hint', () => {
    // given
    const code = `
      <TouchableOpacity accessibilityHint="Opens store page">A11yTune Leeds</TouchableOpacity>
      <TouchableOpacity>A11yTune Manchester</TouchableOpacity>
    `;

    // then
    expect(containsAccessibilityHintForEachStore(code)).toBeFalsy();
  });

  it('Returns true if all buttons have accessibility hints', () => {
    // given
    const code = `
      <TouchableOpacity accessibilityHint="Opens store page">A11yTune Leeds</TouchableOpacity>
      <TouchableOpacity accessibilityHint='Opens store page'>A11yTune Manchester</TouchableOpacity>
    `;

    // then
    expect(containsAccessibilityHintForEachStore(code)).toBeTruthy();
  });
});

describe('accessibilityHintReferencesAction', () => {
  it('Returns false if accessibility hint does not reference an action', () => {
    // given
    const code = `<TouchableOpacity accessibilityHint="stuff">A11yTune Leeds</TouchableOpacity>`;

    // then
    expect(accessibilityHintReferencesAction(code)).toBeFalsy();
  });

  it('Returns true if accessibility hint contains the word opens', () => {
    // given
    const code = `<TouchableOpacity accessibilityHint="Opens store page">A11yTune Leeds</TouchableOpacity>`;

    // then
    expect(accessibilityHintReferencesAction(code)).toBeTruthy();
  });

  it('Returns true if accessibility hint contains the word shows', () => {
    // given
    const code = `<TouchableOpacity accessibilityHint="Shows store page">A11yTune Leeds</TouchableOpacity>`;

    // then
    expect(accessibilityHintReferencesAction(code)).toBeTruthy();
  });

  it('Returns true if accessibility hint contains the word Displays', () => {
    // given
    const code = `<TouchableOpacity accessibilityHint="Displays store page">A11yTune Leeds</TouchableOpacity>`;

    // then
    expect(accessibilityHintReferencesAction(code)).toBeTruthy();
  });
});
