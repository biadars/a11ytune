'use client';
import ChallengeEditor from '@/app/challenges/[id]/ChallengeEditor';
import React from 'react';
import ChallengeHeader from '@/app/challenges/[id]/ChallengeHeader';
import fetchChallengeById from '@/lib/challenges/fetchChallengeById';

export default function Home({ params }: { params: { id: string } }) {
  // const codeContainsAccessibilityLabel = useMemo(() => {
  //     return (files['App.tsx'].contents as string).includes('accessibilityLabel')
  // }, [files])
  const challenge = fetchChallengeById(parseInt(params.id));

  return (
    <>
      <header className="flex flex-col w-full p-7 bg-gradient-to-b from-teal-900 to-cyan-950 items-center">
        <h1 className="font-bold font-mono text-gray-100 text-lg">A11yTune</h1>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-cyan-950 text-gray-100 font-mono">
        <div className="w-2/3">
          <ChallengeHeader challenge={challenge} />
          <ChallengeEditor challenge={challenge} />

          {/*<div className="z-10 max-w-5xl w-full flex flex-row items-center min-h-20">*/}
          {/*    Your code {codeContainsAccessibilityLabel ? 'is': 'is not'} accessible*/}
          {/*</div>*/}
        </div>
      </main>
    </>
  );
}
