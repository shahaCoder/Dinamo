'use client'
import * as React from "react";
import { useEffect, useState } from "react";
export interface IAppProps {}

type Match = {
  opponent: string;
  matchDate: string;
  stadium: string;
  isHomeGame: boolean;

};

export default function App(props: IAppProps) {
//   const [matches, setMatches] = useState<Match[]>([]);

//   useEffect(() => {
//   async function fetchData() {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/matches/upcomingMatches`);
//       const data = await res.json();
//       setMatches(data);
//     } catch (error) {
//       console.error('Failed to fetch matches:', error);
//     }
//   }

//   fetchData();
// }, []);

  return (
    <div>
      <h1>Добавить грядущюю игру</h1>
      <div>
        
      </div>
    </div>
  );
}