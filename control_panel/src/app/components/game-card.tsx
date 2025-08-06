'use client'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateModal from "./updateModal";


export type PastMatchTranslation = {
  locale: string;
  opponent: string;
  stadium: string;
  referee?: string;
  league?: string;
};

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
  id: number;
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
  translations: PastMatchTranslation[];
};

type Props = {
  match: PastMatchProps;
};




const GameCard: React.FC<Props> = ({ match }) => {
    const [open, setOpen] = useState<boolean>(false);
const [value, setValue] = useState<string>("");
const notify = () => toast("Игра успешно удалена!");
const [isEditOpen, setIsEditOpen] = useState(false);


const deleteGame = (id: number) => {
    fetch(`http://localhost:3000/pastmatches/${id}`, {
        method: 'DELETE'
    })
}
const handleSave = async (updatedMatch: PastMatchProps) => {
  await fetch(`http://localhost:3000/pastmatches/editPastMatches/${updatedMatch.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedMatch),
  })
console.log(updatedMatch);


  toast.success('Матч обновлён!');
  setIsEditOpen(false);
  // 🔁 можно добавить обновление списка матчей, если нужно
};

  return (
    <div className="bg-slate-800 rounded-xl shadow-md p-4 space-y-3 border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
            {new Date(match.matchDate).toLocaleString()}
          </p>
          <h2 className="text-xl font-bold text-[#3e7bf6]">
            {match.isHomeGame ? ` Dinamo vs ${match.opponent}` : match.opponent + ' vs Dinamo' }
          </h2>
          <p className="text-sm text-slate-100">Стадион: {match.stadium}</p>
          <p className="text-sm text-slate-100">Судья: {match.referee}</p>
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
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition"
          onClick={() => (setValue("Обновить данные"), setIsEditOpen(true))}
        >
          Обновить данные
        </button>
        <button
          className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm transition"
          onClick={() => (setValue("Удалить данные"), setOpen(true))}
        >
          Удалить игру
        </button>
      </div>
      {/* {
        open ? <div className="fixed inset-0 bg-gray-500/50 z-50 flex items-center justify-center" onClick={() => setOpen(false)}>
        {
         <div onClick={e => e.stopPropagation()} className="w-auto p-10 z-50 bg-white rounded fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{value === "Обновить данные" ? <h1>Обновдение данных</h1> : <div className="flex flex-col gap-4 items-center"><h1>Вы уверены что хотите удалить данные?</h1> <div className="w-full gap-4 flex justify-between items-center"><button onClick={() => (deleteGame(match?.id), setOpen(false), notify())} className="w-full p-4 border-1 bg-blue-200">Да</button> <button onClick={() => setOpen(false)} className="w-full p-4 border-1 bg-blue-200">Отмена</button></div></div>}</div>
      } 
      </div> : null
      } */}
  {open && (
  <div
    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
    onClick={() => setOpen(false)}
  >
    <div
      className="bg-slate-800 text-white p-6 rounded-xl w-[90%] max-w-md shadow-xl border border-slate-700 animate-modal-fade-in"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-lg font-semibold mb-4 text-center">
        Вы уверены, что хотите удалить данные?
      </h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            deleteGame(match.id)
            setOpen(false)
            notify()
          }}
          className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition text-white"
        >
          Да
        </button>
        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-500 transition text-white"
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
)}
{isEditOpen && (
  <UpdateModal
    match={match}
    onClose={() => setIsEditOpen(false)}
    onSave={handleSave}
  />
)}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
    
  );
};

export default GameCard;

