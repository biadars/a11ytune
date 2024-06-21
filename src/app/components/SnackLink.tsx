import QRCode from 'qrcode.react';
import React from 'react';

export type SnackLinkProps = {
  isOnline: boolean;
  link: string;
};

export default function SnackLink({ isOnline, link }: SnackLinkProps) {
  return (
    <div className="w-1/2 flex flex-col justify-items-end  min-h-60">
      <div className="mb-5 text-right">
        <h3>Run it on your phone</h3>
      </div>
      <div className="flex justify-end">
        {isOnline ? <QRCode value={link} /> : undefined}
      </div>
    </div>
  );
}
