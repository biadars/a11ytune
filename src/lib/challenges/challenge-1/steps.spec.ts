import { describe, expect, it } from '@jest/globals';
import {
  containsBothRoleAndAccessibilityRoleForHeaderStep,
  containsButtonRoleStep,
  containsHeaderRoleStep,
  containsLinkRoleStep
} from '@/lib/challenges/challenge-1/steps';

describe('steps', () => {
  describe.skip('containsHeadingRole', () => {
    it("Returns false if there is no 'Who are we' text", () => {
      // then
      expect(
        containsHeaderRoleStep.test('<Text> A different heading</Text>')
      ).toBeFalsy();
    });

    it("Returns false if 'Who are we' has no role", () => {
      // then
      expect(
        containsHeaderRoleStep.test('<Text>Who are we</Text>')
      ).toBeFalsy();
    });

    it("Returns false if 'Who are we' has a different role", () => {
      // then
      expect(
        containsHeaderRoleStep.test('<Text role="button">Who are we</Text>')
      ).toBeFalsy();
    });

    it("Returns true if 'Who are we' has heading role", () => {
      // then
      expect(
        containsHeaderRoleStep.test(`<Text role="heading">Who are we</Text>`)
      ).toBeTruthy();
    });
  });

  describe.skip('containsAccessibilityHeadingRole', () => {
    it("Returns false if there is no 'Who are we' text", () => {
      // then
      expect(
        containsBothRoleAndAccessibilityRoleForHeaderStep.test(
          '<Text> A different heading</Text>'
        )
      ).toBeFalsy();
    });

    it("Returns false if 'Who are we' has no accessibility role", () => {
      // then
      expect(
        containsBothRoleAndAccessibilityRoleForHeaderStep.test(
          '<Text>Who are we</Text>'
        )
      ).toBeFalsy();
    });

    it("Returns false if 'Who are we' has a different accessibility role", () => {
      // then
      expect(
        containsBothRoleAndAccessibilityRoleForHeaderStep.test(
          '<Text accessibilityRole="button">Who are we</Text>'
        )
      ).toBeFalsy();
    });

    it("Returns true if 'Who are we' has heading accessibility role", () => {
      // then
      expect(
        containsBothRoleAndAccessibilityRoleForHeaderStep.test(
          `<Text accessibilityRole="heading">Who are we</Text>`
        )
      ).toBeTruthy();
    });
  });

  describe('containsLinkRole', () => {
    it("Returns false if there is no 'here' link", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')}>
          <Text style={[styles.bodyText, styles.link]}>other text</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRoleStep.test(link)).toBeFalsy();
    });

    it("Returns false if the 'here' link has no roles", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')}>
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRoleStep.test(link)).toBeFalsy();
    });

    it("Returns false if the 'here' link has a role but no accessibility role", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')} role="link">
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRoleStep.test(link)).toBeFalsy();
    });

    it("Returns false if the 'here' link has an accessibility role but no role", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')} accessibilityRole="link">
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRoleStep.test(link)).toBeFalsy();
    });

    it("Returns true if the 'here' link has both a role and an accessibilityRole", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')} role="link" accessibilityRole="link">
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRoleStep.test(link)).toBeTruthy();
    });
  });

  describe('browseHasButtonRole', () => {
    it("Returns false if there is no 'Browse our records' button", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Other text</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRoleStep.test(button)).toBeFalsy();
    });

    it("Returns false if the 'Browse our records' button has no roles", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRoleStep.test(button)).toBeFalsy();
    });

    it("Returns false if the 'Browse our records' button has a role but no accessibility role", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton} role="button">
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRoleStep.test(button)).toBeFalsy();
    });

    it("Returns false if the 'Browse our records' button has an accessibility role but no role", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton} accessibilityRole="button">
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRoleStep.test(button)).toBeFalsy();
    });

    it("Returns true if the 'Browse our records' button has both a role and an accessibilityRole", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton} role="button" accessibilityRole="button">
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRoleStep.test(button)).toBeTruthy();
    });
  });
});
