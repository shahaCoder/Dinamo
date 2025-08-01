import React from "react";

type MatchEvent = {
  minute: string;
  type: "goal" | "substitution" | "yellow_card" | "red_card";
  team: "home" | "away";
  playerName?: string;
  assistName?: string;
  subIn?: string;
  subOut?: string;
};

type PastMatchProps = {
  matchDate: string;
  homeTeamScore: number;
  awayTeamScore: number;
  isHomeGame: boolean;
  translations: {
    locale: string;
    opponent: string;
    stadium: string;
    league: string;
    referee: string;
  }[];
  events: MatchEvent[];
};


type Props = {
  match: PastMatchProps;
};

const GameCard: React.FC<Props> = ({ match }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-3 border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{new Date(match.matchDate).toLocaleString()}</p>
          <h2 className="text-xl font-bold text-[#0f2145]">
            {/* {match.translations[0].opponent} — {match.translations[0].league} */}
  FC Dinamo {match.isHomeGame ? 'vs' : '—'} {match.translations[0].opponent}
          </h2>
          <p className="text-sm text-gray-600">Стадион: {match.translations[0].stadium}</p>
          <p className="text-sm text-gray-600">Судья: {match.translations[0].referee}</p>
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
                  <> Гол: {e.playerName} {e.assistName && `(ассист: ${e.assistName})`} — <em>{e.team === "home" ? "Наша" : "Соперник"}</em></>
                )}
                {e.type === "substitution" && (
                  <> Замена: {e.subOut} ⟶ {e.subIn} — <em>{e.team === "home" ? "Наша" : "Соперник"}</em></>
                )}
                {e.type === "yellow_card" && (
                  <> ЖК: {e.playerName} — <em>{e.team === "home" ? "Наша" : "Соперник"}</em></>
                )}
                {e.type === "red_card" && (
                  <> КК: {e.playerName} — <em>{e.team === "home" ? "Наша" : "Соперник"}</em></>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameCard;
