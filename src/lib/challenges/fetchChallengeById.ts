import allChallenges from '@/lib/challenges/allChallenges';
import { Challenge } from '@/lib/challenges/challenge';

export default function fetchChallengeById(id: number) {
  const challenge = allChallenges.find((challenge: Challenge) => challenge.index === id);
  if (challenge) {
    return challenge;
  }

  throw new Error(`Cannot find challenge with ID ${id}`);
}