import React, { useMemo, useState } from 'react';
import { Button } from '@/app/(components)/Button';
import { Challenge, Hint } from '@/lib/challenges/challenge';

const renderHint = (hints: Hint[], hintIndex: number) => {
  let hint;
  if (hintIndex < hints.length && hintIndex >= 0) {
    // eslint-disable-next-line security/detect-object-injection
    hint = hints[hintIndex];
  } else {
    throw "Error: Hint index out of range"
  }

  return (
    <>
      <p>
        {hint.message}
        {hint.link && <a href={hint.link}> {hint.link}</a>}
      </p>
    </>
  );
};

export default function HintBox({ challenge }: { challenge: Challenge }) {
  const [hintIndex, setHintIndex] = useState<number | undefined>(undefined)
  const maxHintIndex = useMemo(() => {
    return challenge.hints.length - 1
  }, [challenge]);

  return (
    <div className="flex flex-row rounded border border-teal-900 p-3 mt-5 grid-cols-3">
      {hintIndex !== undefined && hintIndex > 0 && (
        <Button
          label={'<'}
          loading={false}
          onClick={() => setHintIndex(hintIndex - 1)}
        />
      )}
      <h3 className="flex grow justify-center px-3 text-center">
        {hintIndex === undefined
          ? <p>Do you need a hint?</p>
          : renderHint(challenge.hints, hintIndex)
        }
      </h3>
      {(hintIndex === undefined || hintIndex < maxHintIndex) && (
        <Button
          label={'>'}
          loading={false}
          onClick={() =>
            setHintIndex(hintIndex === undefined ? 0 : hintIndex + 1)
          }
        />
      )}
    </div>
  );
}