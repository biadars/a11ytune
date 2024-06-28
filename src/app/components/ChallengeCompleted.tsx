import { useChallenges } from '@/app/challenges/useChallenges';
import React from 'react';
import { Button } from '@/app/components/Button';

export const ChallengeCompleted = () => {
  const { progressToNextChallenge } = useChallenges();

  return <div>
    <div>Well done, you've completed this challenge!</div>
    <Button label="Go to next challenge" loading={false} onClick={progressToNextChallenge}/>
  </div>
};