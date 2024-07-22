import React, { useState } from 'react';
import { Button } from '@/app/(components)/Button';
import { Challenge } from '@/lib/challenges/challenge';

export default function HintBox({ challenge }: { challenge: Challenge }) {
  const [hintIndex, setHintIndex] = useState<number | undefined>(undefined)
  const maxHintIndex = challenge.numberOfHints - 1

  if (hintIndex === undefined) {
    return (
    <div className="flex flex-row rounded border border-teal-900 p-3 mt-5">
      <h3 className="flex grow justify-center px-3 text-center">
        <p>Do you need a hint?</p>
      </h3>
      <Button label={'>'} loading={false} onClick={() => setHintIndex(0)}/>
    </div>
    )
  }

  return (
    <div className="flex flex-row rounded border border-teal-900 p-3 mt-5 grid-cols-3">
      {hintIndex > 0 && <Button label={'<'} loading={false} onClick={() => setHintIndex(hintIndex - 1)} />}
      <h3 className="flex grow justify-center px-3 text-center">{challenge.renderHint(hintIndex)}</h3>
      {hintIndex < maxHintIndex && <Button label={'>'} loading={false} onClick={() => setHintIndex(hintIndex + 1)} />}
    </div>
  );
}