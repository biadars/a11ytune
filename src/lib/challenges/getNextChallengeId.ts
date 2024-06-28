import { Challenge } from '@/lib/challenges/challenge';
import allChallenges from '@/lib/challenges/allChallenges';

export default function getNextChallengeId(challenge: Challenge) {
  const nextChallengeId = challenge.index + 1;
  const nextChallenge = allChallenges.find(challenge => challenge.index === nextChallengeId);
  if (nextChallenge) {
    return nextChallenge.index
  }

  return 100;
}