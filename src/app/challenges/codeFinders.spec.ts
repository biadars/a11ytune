import { describe, expect, it } from '@jest/globals';
import {
  findAllButtonComponents,
  findAllListComponents,
  findAllTextComponents
} from '@/app/challenges/codeFinders';

describe('codeFinders', () => {
  describe('findAllTextComponents', () => {
    it('Returns no matches if there are no <Text> tags', () => {
      // given
      const code = `<TouchableOpacity></TouchableOpacity>`;

      // then
      expect(findAllTextComponents(code)).toEqual([]);
    });

    it('Returns matching <Text> tags', () => {
      // given
      const code = `<Text>A11yTune</Text>`;

      // then
      expect(findAllTextComponents(code)[0]).toEqual('<Text>A11yTune</Text>');
    });

    it('Returns matching <Text> tags if there are multiple', () => {
      // given
      const code = `
        <Text>First</Text>>
        <Text>Second</Text>
      `;

      // when
      const matches = findAllTextComponents(code);

      // then
      expect(matches[0]).toEqual('<Text>First</Text>');
      expect(matches[1]).toEqual('<Text>Second</Text>');
    });
  });

  describe('findAllListComponents', () => {
    it('Returns no matches if there are no <FlatList> tags', () => {
      // given
      const code = `<Text>A11yTune</Text>`;

      // then
      expect(findAllListComponents(code)).toEqual([]);
    });

    it('Returns matching <FlatList> tag', () => {
      // given
      const code = `<FlatList
          data={[
            {key: 'Leeds'},
            {key: 'Liverpool'},
            {key: 'Manchester'}
          ]}
          renderItem={({item}) => <Text style={styles.bodyText}>{\`\\u2022 \${item.key}\`}</Text>}
        />`;

      // when
      const matches = findAllListComponents(code);

      // then
      expect(matches[0]).toEqual(code);
    });

    it('Returns multiple matching <FlatList> tags', () => {
      // given
      const firstList = `<FlatList
          data={[
            {key: 'Leeds'}
          ]}
          renderItem={({item}) => <Text style={styles.bodyText}>{\`\\u2022 \${item.key}\`}</Text>}
        />`;
      const secondList = `<FlatList
          data={[
            {key: 'Liverpool'},
            {key: 'Manchester'}
          ]}
          renderItem={({item}) => <Text style={styles.bodyText}>{\`\\u2022 \${item.key}\`}</Text>}
        />`;

      // when
      const matches = findAllListComponents(firstList + secondList);

      // then
      expect(matches[0]).toEqual(firstList);
      expect(matches[1]).toEqual(secondList);
    });
  });

  describe('findAllButtonComponents', () => {
    it('Returns no matches if there are no <TouchableOpacity> tags', () => {
      // given
      const code = `<Text></Text>`;

      // then
      expect(findAllButtonComponents(code)).toEqual([]);
    });

    it('Returns matching <TouchableOpacity> tags', () => {
      // given
      const code = `<TouchableOpacity><Text>A11yTune</Text></TouchableOpacity>`;

      // then
      expect(findAllButtonComponents(code)[0]).toEqual(
        '<TouchableOpacity><Text>A11yTune</Text></TouchableOpacity>'
      );
    });

    it('Returns matching <TouchableOpacity> tags if there are multiple', () => {
      // given
      const code = `
        <TouchableOpacity><Text>First</Text></TouchableOpacity>
        <TouchableOpacity><Text>Second</Text></TouchableOpacity>
      `;

      // when
      const matches = findAllButtonComponents(code);

      // then
      expect(matches[0]).toEqual(
        '<TouchableOpacity><Text>First</Text></TouchableOpacity>'
      );
      expect(matches[1]).toEqual(
        '<TouchableOpacity><Text>Second</Text></TouchableOpacity>'
      );
    });
  });
});
