import React, { useState } from "react";

// type MatchEvent = {
//   minute: string;
//   type: "goal" | "substitution" | "yellow_card" | "red_card";
//   team: "home" | "away";
//   playerName?: string;
//   assistName?: string;
//   subIn?: string;
//   subOut?: string;
// };

// type PastMatchProps = {
//   matchDate: string;
//   homeTeamScore: number;
//   awayTeamScore: number;
//   isHomeGame: boolean;
//   opponentLogo?: string;
//   locale: string;
//   opponent: string;
//   stadium: string;
//   league: string;
//   referee: string;

//   events: MatchEvent[];
// };
// components/game-card.tsx

export type MatchEvent = {
  id?: number;
  pastMatchId?: number;
  minute: string;
  type: "goal" | "substitution" | "yellow_card" | "red_card";
  playerName?: string | null;
  assistName?: string | null;
  subbedIn?: string | null;
  subbedOut?: string | null;
  team: "home" | "away";
};

export type PastMatchProps = {
  id?: number;
  matchDate: string;
  isHomeGame: boolean;
  homeTeamScore: number;
  awayTeamScore: number;
  opponentLogo?: string;
  opponent: string;
  stadium: string;
  referee: string;
  league: string;
  tourNumber?: number | null;
  attendance?: number | null;
  events: MatchEvent[];
};

type Props = {
  match: PastMatchProps;
};

// const modalWindow = (text: string) => {
// }


const GameCard: React.FC<Props> = ({ match }) => {
    const [open, setOpen] = useState<boolean>(false);
const [value, setValue] = useState<string>("");
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-3 border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
            {new Date(match.matchDate).toLocaleString()}
          </p>
          <h2 className="text-xl font-bold text-[#0f2145]">
            FC Dinamo {match.isHomeGame ? "vs" : "—"} {match.opponent}
          </h2>
          <p className="text-sm text-gray-600">Стадион: {match.stadium}</p>
          <p className="text-sm text-gray-600">Судья: {match.referee}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-[#0f2145]">Счёт</p>
          <p className="text-2xl font-bold">
            {match.homeTeamScore} : {match.awayTeamScore}
          </p>
        </div>
      </div>

      {match.events?.length > 0 && (
        <div className="mt-4">
          <p className="text-md font-bold text-[#0f2145] mb-2">События матча</p>
          <ul className="space-y-1 text-sm text-gray-700">
            {match.events.map((e, idx) => (
              <li key={idx} className="border-b pb-1">
                <strong>{e.minute}′</strong> —
                {e.type === "goal" && (
                  <>
                    {" "}
                    Гол: {e.playerName}{" "}
                    {e.assistName && `(ассист: ${e.assistName})`} —{" "}
                    <em>{e.team === "home" ? "Наша" : "Соперник"}</em>
                  </>
                )}
                {e.type === "substitution" && (
                  <>
                    {" "}
                    Замена: {e.subbedOut} ⟶ {e.subbedIn} —{" "}
                    <em>{e.team === "home" ? "Наша" : "Соперник"}</em>
                  </>
                )}
                {e.type === "yellow_card" && (
                  <>
                    {" "}
                    ЖК: {e.playerName} —{" "}
                    <em>{e.team === "home" ? "Наша" : "Соперник"}</em>
                  </>
                )}
                {e.type === "red_card" && (
                  <>
                    {" "}
                    КК: {e.playerName} —{" "}
                    <em>{e.team === "home" ? "Наша" : "Соперник"}</em>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-5">
        <button
          className="border-1 rounded bg-blue-200"
          onClick={() => (setValue("Обновить данные"), setOpen(true))}
        >
          Обновить данные
        </button>
        <button
          className="border-1 rounded bg-blue-200"
          onClick={() => (setValue("Удалить данные"), setOpen(true))}
        >
          Удалить игру
        </button>
      </div>

      {
        open ? <div className="fixed inset-0 bg-gray-500/50 z-50 flex items-center justify-center" onClick={() => setOpen(false)}>
        {
         <div onClick={e => e.stopPropagation()} className="w-[300px] p-10 z-50 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{value === "Обновить данные" ? <h1>Обновдение данных</h1> : <h1>Вы уверены что хотите удалить данные?</h1>}</div> 
      } 
      </div> : null
      }
    </div>
  );
};

export default GameCard;
