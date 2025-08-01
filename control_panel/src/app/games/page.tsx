// 'use client'
// import * as React from "react";
// import { useEffect, useState } from "react";
// export interface IAppProps {}

// type Match = {
//   opponent: string;
//   matchDate: string;
//   stadium: string;
//   isHomeGame: boolean;

// };

// export default function App(props: IAppProps) {
// //   const [matches, setMatches] = useState<Match[]>([]);

// //   useEffect(() => {
// //   async function fetchData() {
// //     try {
// //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/matches/upcomingMatches`);
// //       const data = await res.json();
// //       setMatches(data);
// //     } catch (error) {
// //       console.error('Failed to fetch matches:', error);
// //     }
// //   }

// //   fetchData();
// // }, []);

//   return (
//     <div>
//       <h1>Добавить грядущюю игру</h1>
//       <div>
        
//       </div>
//     </div>
//   );
// }

'use client'

import { useState } from 'react'
import GameCard from '../components/game-card'

export default function PastMatchForm() {
  const [formData, setFormData] = useState({
    matchDate: '',
    isHomeGame: true,
    homeTeamScore: 0,
    awayTeamScore: 0,
    opponentLogo: '',
    translations: [
      { locale: 'ru', opponent: '', stadium: '', league: '', referee: '' },
      { locale: 'uz', opponent: '', stadium: '', league: '', referee: '' },
      { locale: 'en', opponent: '', stadium: '', league: '', referee: '' },
    ],
    events: [],
  })

  const [event, setEvent] = useState({
    minute: '',
    type: 'goal',
    team: 'home',
    playerName: '',
    assistName: '',
    subIn: '',
    subOut: '',
  })

  const addEvent = () => {
    setFormData((prev: any) => ({
      ...prev,
      events: [...prev.events, event],
    }))
    setEvent({ minute: '', type: 'goal', team: 'home', playerName: '', assistName: '', subIn: '', subOut: '' })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // const res = await fetch('http://localhost:3000/pastMatches', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    console.log(formData);
    

    // if (res.ok) {
    //   alert('Матч успешно добавлен')
    // } else {
    //   alert('Ошибка')
    // }
  }
  

  return (
    <div>
      <GameCard match={formData} />
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <label htmlFor="matchDate">Выберите дату и время</label>
      <input
        type="datetime-local"
        id="matchDate"
        value={formData.matchDate}
        onChange={e => setFormData({ ...formData, matchDate: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Счёт (наши)"
          value={formData.homeTeamScore}
          onChange={e => setFormData({ ...formData, homeTeamScore: +e.target.value })}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Счёт (соперника)"
          value={formData.awayTeamScore}
          onChange={e => setFormData({ ...formData, awayTeamScore: +e.target.value })}
          className="border p-2"
        />
      </div>

      {formData.translations.map((t, idx) => (
        <div key={t.locale} className="border p-2 rounded bg-gray-50">
          <p className="font-bold">{'Информация об игре на ' + t.locale.toUpperCase()}</p>
          <input placeholder={'Название команды соперника на ' + t.locale} className="border p-1 w-full" value={t.opponent} onChange={e => {
            const copy = [...formData.translations]
            copy[idx].opponent = e.target.value
            setFormData({ ...formData, translations: copy })
          }} />
          <input placeholder={'Название стадиона на ' + t.locale} className="border p-1 w-full" value={t.stadium} onChange={e => {
            const copy = [...formData.translations]
            copy[idx].stadium = e.target.value
            setFormData({ ...formData, translations: copy })
          }} />
          <input placeholder={'Название лиги на ' + t.locale} className="border p-1 w-full" value={t.league} onChange={e => {
            const copy = [...formData.translations]
            copy[idx].league = e.target.value
            setFormData({ ...formData, translations: copy })
          }} />
          <input placeholder={'ФИО судьи на ' + t.locale} className="border p-1 w-full" value={t.referee} onChange={e => {
            const copy = [...formData.translations]
            copy[idx].referee = e.target.value
            setFormData({ ...formData, translations: copy })
          }} />
        </div>
      ))}

      <hr />
      <p className="font-bold">Добавить событие</p>
      <div className="grid grid-cols-2 gap-2">
        <div className='flex flex-col'>
          <label htmlFor="">Минута на которой произошло событие</label>
        <input placeholder="10" value={event.minute} onChange={e => setEvent({ ...event, minute: e.target.value })} className="border p-1" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Тип события</label>
        <select value={event.type} id='type' onChange={e => setEvent({ ...event, type: e.target.value })} className="border p-1">
          <option value="goal">Гол</option>
          <option value="substitution">Замена</option>
          <option value="yellow_card">ЖК</option>
          <option value="red_card">КК</option>
        </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Команда из-за которой произошло событие</label>
          <select value={event.team} onChange={e => setEvent({ ...event, team: e.target.value })} className="border p-1">
          <option value="home">Наша команда</option>
          <option value="away">Соперник</option>
        </select>
        </div>
        {
          event.type == 'goal' ? <div className='flex flex-col'>
          <label htmlFor="">Имя игрока</label>
          <input placeholder="Игрок" value={event.playerName} onChange={e => setEvent({ ...event, playerName: e.target.value })} className="border p-1" />
        </div> : null
        }
        {
          event.type == 'goal' && (<input placeholder="Имя игрока который стал ассистом" value={event.assistName} onChange={e => setEvent({ ...event, assistName: e.target.value })} className="border p-1" />)
        }
        {
          event.type == 'substitution' ? <div className='flex flex-col gap-2'><input placeholder="Имя игрока который вышел на поле" value={event.subIn} onChange={e => setEvent({ ...event, subIn: e.target.value })} className="border p-1" /> <input placeholder="Имя игрока которого заменили" value={event.subOut} onChange={e => setEvent({ ...event, subOut: e.target.value })} className="border p-1" /></div> : null
        }
      </div>
      <button type="button" onClick={addEvent} className="bg-blue-500 text-white px-4 py-2 rounded">
        + Добавить событие
      </button>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full mt-4">Создать матч</button>
    </form>
    </div>
  )
}
