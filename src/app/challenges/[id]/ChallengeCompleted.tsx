import React from 'react';
import { Challenge } from '@/lib/challenges/challenge';
import Link from 'next/link';
import getNextChallengeId from '@/lib/challenges/getNextChallengeId';

export const ChallengeCompleted = ({ challenge }: { challenge: Challenge }) => {
  const nextChallengeId = getNextChallengeId(challenge);

  return (
    <div>
      <div className="mb-10">
        Well done, you&apos;ve completed{' '}
        {nextChallengeId != undefined ? 'this' : 'the final'} challenge!
      </div>
      {nextChallengeId != undefined && (
        <Link
          href={`/challenges/${nextChallengeId}`}
          className="rounded shadow bg-teal-800 hover:bg-teal-900 border border-teal-900 p-3 text-sm mb-10">
          Go to next challenge
        </Link>
      )}
      <div className="mb-8 mt-10">{challenge.renderExtraContent()}</div>
    </div>
  );
};
