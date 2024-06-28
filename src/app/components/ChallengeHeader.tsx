import { useChallenges } from '../challenges/useChallenges';
import React from 'react';

export default function ChallengeHeader() {
  const { currentChallenge } = useChallenges();

  return (
    <div className=" flex mb-5 justify-start">
      <h2>
        Challenge {currentChallenge?.index}: {currentChallenge?.title}
      </h2>
    </div>
  );
}
