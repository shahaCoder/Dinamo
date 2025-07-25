'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayerCard } from "../components/player-card";



export default function PlayersPage() {
  type Player = {
  id: number;
  photoUrl: string;
  firstName: string;
  lastName: string;
  position: string;
  nationality: string;
};

const [players, setPlayers] = useState<Player[]>([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/players/getPlayers")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Players</h1>
        <Link
          href="/players/newplayer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Player
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {players?.map((i) => (
    <div key={i.id}>
      <PlayerCard
        {...i}
        onDelete={handleDelete}
      />
    </div>
  ))}
</div>
      )}
    </div>
  );

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this player?")) return;

    await fetch(`http://localhost:3001/api/players/${id}`, {
      method: "DELETE",
    });

    setPlayers(players.filter((p) => p.id !== id));
  }
}
