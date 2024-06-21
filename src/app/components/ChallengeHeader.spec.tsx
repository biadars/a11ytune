import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';
import React from 'react';
import ChallengeHeader from '@/app/components/ChallengeHeader';

const mockChallenge = {
  index: 1,
  title: 'Correct labeling',
  challengeSnack: {},
  steps: []
};
jest.mock('../challenges/useChallenges.tsx', () => ({
  useChallenges: () => mockChallenge
}));

describe.skip('ChallengeHeader', () => {
  it('Displays current challenge number and title', () => {
    // given
    // when
    const { queryByText } = whenComponentIsRendered();

    // then
    expect(queryByText('1')).toBeTruthy();
    expect(queryByText('Correct labeling')).toBeTruthy();
  });

  const whenComponentIsRendered = () => {
    return render(<ChallengeHeader />);
  };
});
