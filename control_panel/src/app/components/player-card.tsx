import Image from 'next/image';
import * as React from 'react';

type PlayerCardProps = {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  position: string;
  nationality: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export function PlayerCard({
  id,
  firstName,
  lastName,
  photoUrl,
  position,
  nationality,
  onEdit,
  onDelete,
}: PlayerCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 w-full max-w-sm shadow-md hover:shadow-lg hover:ring-2 hover:ring-slate-600 transition duration-200 flex flex-col justify-between">
  <div className="flex items-center gap-4 mb-4">
    <Image
      src={photoUrl || "/default-player.png"}
      alt={`${firstName} ${lastName}`}
      width={72}
      height={72}
      className="rounded-full object-cover border-2 border-slate-600 shadow-sm"
    />
    <div>
      <h2 className="text-xl font-bold text-white leading-tight">
        {firstName} {lastName}
      </h2>
      <p className="text-sm text-slate-400">
        {position} • {nationality}
      </p>
    </div>
  </div>
  <div className="flex gap-2 mt-auto">
    <button
      onClick={() => onEdit(id)}
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-md transition"
    >
      Обновить
    </button>
    <button
      onClick={() => onDelete(id)}
      className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-md transition"
    >
      Удалить
    </button>
  </div>
</div>
  );
}