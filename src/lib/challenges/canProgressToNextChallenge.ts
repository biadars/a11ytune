import { Challenge } from '@/lib/challenges/challenge';
import getChallengeResults from '@/lib/challenges/getChallengeResults';

export default function canProgressToNextChallenge(challenge: Challenge, code: string) {
  const results = getChallengeResults(challenge,code);
  return results && !results.some(result => !result.passed);
}