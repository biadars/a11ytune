import { describe, expect, it } from '@jest/globals';
import {
  containsAccessibilityHeadingRole,
  containsButtonRole,
  containsHeadingRole,
  containsLinkRole,
  containsListRole
} from '@/app/challenges/challenge-1/steps';

describe('steps', () => {
  describe('containsHeadingRole', () => {
    it("Returns false if there is no 'Who are we' text", () => {
      // then
      expect(
        containsHeadingRole.test('<Text> A different heading</Text>')
      ).toBeFalsy();
    });

    it("Returns false if 'Who are we' has no role", () => {
      // then
      expect(containsHeadingRole.test('<Text>Who are we</Text>')).toBeFalsy();
    });

    it("Returns false if 'Who are we' has a different role", () => {
      // then
      expect(
        containsHeadingRole.test('<Text role="button">Who are we</Text>')
      ).toBeFalsy();
    });

    it("Returns true if 'Who are we' has heading role", () => {
      // then
      expect(
        containsHeadingRole.test(`<Text role="heading">Who are we</Text>`)
      ).toBeTruthy();
    });
  });

  describe('containsAccessibilityHeadingRole', () => {
    it("Returns false if there is no 'Who are we' text", () => {
      // then
      expect(
        containsAccessibilityHeadingRole.test(
          '<Text> A different heading</Text>'
        )
      ).toBeFalsy();
    });

    it("Returns false if 'Who are we' has no accessibility role", () => {
      // then
      expect(
        containsAccessibilityHeadingRole.test('<Text>Who are we</Text>')
      ).toBeFalsy();
    });

    it("Returns false if 'Who are we' has a different accessibility role", () => {
      // then
      expect(
        containsAccessibilityHeadingRole.test(
          '<Text accessibilityRole="button">Who are we</Text>'
        )
      ).toBeFalsy();
    });

    it("Returns true if 'Who are we' has heading accessibility role", () => {
      // then
      expect(
        containsAccessibilityHeadingRole.test(
          `<Text accessibilityRole="heading">Who are we</Text>`
        )
      ).toBeTruthy();
    });
  });

  describe('containsListRole', () => {
    it('Returns false if there is no list', () => {
      // then
      expect(containsListRole.test(`<Text>Not a real list</Text>`)).toBeFalsy();
    });

    it('Returns false if the list has no role', () => {
      // given
      const list = `<FlatList
          data={[
            {key: 'Leeds'},
            {key: 'Liverpool'},
            {key: 'Manchester'}
          ]}
          renderItem={({item}) => <Text style={styles.bodyText}>{\`\\u2022 \${item.key}\`}</Text>}
        />`;

      // then
      expect(containsListRole.test(list)).toBeFalsy();
    });

    it('Returns false if the list has a role but no accessibilityRole', () => {
      // given
      const list = `<FlatList role="list"
          data={[
            {key: 'Leeds'},
            {key: 'Liverpool'},
            {key: 'Manchester'}
          ]}
          renderItem={({item}) => <Text style={styles.bodyText}>{\`\\u2022 \${item.key}\`}</Text>}
        />`;

      // then
      expect(containsListRole.test(list)).toBeFalsy();
    });

    it('Returns false if the list has an accessibilityRole but no role', () => {
      // given
      const list = `<FlatList accessibilityRole="list"
          data={[
            {key: 'Leeds'},
            {key: 'Liverpool'},
            {key: 'Manchester'}
          ]}
          renderItem={({item}) => <Text style={styles.bodyText}>{\`\\u2022 \${item.key}\`}</Text>}
        />`;

      // then
      expect(containsListRole.test(list)).toBeFalsy();
    });

    it('Returns true if the list has both an accessibilityRole and role', () => {
      // given
      const list = `<FlatList role="list" accessibilityRole="list"
          data={[
            {key: 'Leeds'},
            {key: 'Liverpool'},
            {key: 'Manchester'}
          ]}
          renderItem={({item}) => <Text style={styles.bodyText}>{\`\\u2022 \${item.key}\`}</Text>}
        />`;

      // then
      expect(containsListRole.test(list)).toBeTruthy();
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
      expect(containsLinkRole.test(link)).toBeFalsy();
    });

    it("Returns false if the 'here' link has no roles", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')}>
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRole.test(link)).toBeFalsy();
    });

    it("Returns false if the 'here' link has a role but no accessibility role", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')} role="link">
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRole.test(link)).toBeFalsy();
    });

    it("Returns false if the 'here' link has an accessibility role but no role", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')} accessibilityRole="link">
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRole.test(link)).toBeFalsy();
    });

    it("Returns true if the 'here' link has both a role and an accessibilityRole", () => {
      // given
      const link = `
        <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')} role="link" accessibilityRole="link">
          <Text style={[styles.bodyText, styles.link]}>here</Text>
        </TouchableOpacity>`;

      // then
      expect(containsLinkRole.test(link)).toBeTruthy();
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
      expect(containsButtonRole.test(button)).toBeFalsy();
    });

    it("Returns false if the 'Browse our records' button has no roles", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRole.test(button)).toBeFalsy();
    });

    it("Returns false if the 'Browse our records' button has a role but no accessibility role", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton} role="button">
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRole.test(button)).toBeFalsy();
    });

    it("Returns false if the 'Browse our records' button has an accessibility role but no role", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton} accessibilityRole="button">
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRole.test(button)).toBeFalsy();
    });

    it("Returns true if the 'Browse our records' button has both a role and an accessibilityRole", () => {
      // given
      const button = `
        <TouchableOpacity style={styles.primaryButton} role="button" accessibilityRole="button">
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>`;

      // then
      expect(containsButtonRole.test(button)).toBeTruthy();
    });
  });
});
