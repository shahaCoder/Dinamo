import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface IAppProps {
}

export function PlayerCard (item: any) {
    
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 w-full max-w-sm border">
      <div className="flex items-center gap-4">
        <Image
          src={item?.photoUrl || "/default-player.png"}
          alt={`${item?.firstName} ${item?.lastName}`}
          width={64}
          height={64}
          className="rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {item?.firstName} {item?.lastName}
          </h2>
          <p className="text-sm text-gray-500">
            {item?.position} &bull; {item?.nationality}
          </p>
        </div>
      </div>
    </div>
  );
}
