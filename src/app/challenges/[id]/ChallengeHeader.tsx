import React from 'react';
import { Challenge } from '@/lib/challenges/challenge';

export default function ChallengeHeader({challenge} : {challenge: Challenge}) {

  return (
    <div className=" flex mb-5 justify-start">
      <h2>
        Challenge {challenge?.index}: {challenge?.title}
      </h2>
    </div>
  );
}
