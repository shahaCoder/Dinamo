'use client'

import { useEffect, useState } from 'react'
import { MatchEvent, PastMatchProps } from './game-card'

type EditMatchModalProps = {
  match: PastMatchProps;
  onClose: () => void;
  onSave: (updatedMatch: PastMatchProps) => void;
};

export default function updateModal({ match, onClose, onSave }: EditMatchModalProps) {
  const [formData, setFormData] = useState<PastMatchProps>(match)

  useEffect(() => {
    setFormData(match)
  }, [match])

  const handleChange = (field: keyof PastMatchProps, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleEventChange = (
    index: number,
    field: 'minute' | 'type' | 'team' | 'playerName' | 'assistName' | 'subbedIn' | 'subbedOut',
    value: string
  ) => {
    const newEvents = [...formData.events]
    ;(newEvents[index] as any)[field] = value
    setFormData((prev) => ({ ...prev, events: newEvents }))
  }

  const handleTranslationChange = (
    idx: number,
    field: 'opponent' | 'stadium' | 'referee' | 'league',
    value: string
  ) => {
    const updatedTranslations = [...formData.translations]
    updatedTranslations[idx][field] = value
    setFormData((prev) => ({ ...prev, translations: updatedTranslations }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center" onClick={onClose}>
      <div
        className="bg-slate-800 text-white p-6 rounded-xl w-[90%] max-w-3xl shadow-xl border border-slate-700 animate-modal-fade-in overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Редактировать матч</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Дата матча
            <input
              type="datetime-local"
              className="mt-1 block w-full bg-slate-700 text-white p-2 rounded"
              value={formData.matchDate}
              onChange={(e) => handleChange('matchDate', e.target.value)}
            />
          </label>

          <div className="flex gap-2">
            <input
              type="number"
              className="w-1/2 bg-slate-700 text-white p-2 rounded"
              placeholder="Наш счёт"
              value={formData.homeTeamScore}
              onChange={(e) => handleChange('homeTeamScore', +e.target.value)}
            />
            <input
              type="number"
              className="w-1/2 bg-slate-700 text-white p-2 rounded"
              placeholder="Счёт соперника"
              value={formData.awayTeamScore}
              onChange={(e) => handleChange('awayTeamScore', +e.target.value)}
            />
          </div>

          <label className="block">
            Это домашняя игра?
            <input
              type="checkbox"
              className="ml-2"
              checked={formData.isHomeGame}
              onChange={(e) => handleChange('isHomeGame', e.target.checked)}
            />
          </label>

          {/* Translations */}
          {formData?.translations?.map((t, idx) => (
            <div key={idx} className="bg-slate-700 p-4 rounded mt-4 space-y-2">
              <h4 className="font-bold text-white">Перевод: {t.locale.toUpperCase()}</h4>
              <input
                className="input"
                placeholder="Команда соперника"
                value={t.opponent}
                onChange={(e) => handleTranslationChange(idx, 'opponent', e.target.value)}
              />
              <input
                className="input"
                placeholder="Стадион"
                value={t.stadium}
                onChange={(e) => handleTranslationChange(idx, 'stadium', e.target.value)}
              />
              <input
                className="input"
                placeholder="Судья"
                value={t.referee || ''}
                onChange={(e) => handleTranslationChange(idx, 'referee', e.target.value)}
              />
              <input
                className="input"
                placeholder="Лига"
                value={t.league || ''}
                onChange={(e) => handleTranslationChange(idx, 'league', e.target.value)}
              />
            </div>
          ))}

          {/* EVENTS */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mt-6">События</h3>
            {formData.events.map((event, index) => (
              <div key={index} className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-slate-700 p-3 rounded">
                <input
                  className="bg-slate-600 text-white p-1 rounded"
                  placeholder="Минута"
                  value={event.minute}
                  onChange={(e) => handleEventChange(index, 'minute', e.target.value)}
                />
                <select
                  className="bg-slate-600 text-white p-1 rounded"
                  value={event.type}
                  onChange={(e) => handleEventChange(index, 'type', e.target.value)}
                >
                  <option value="goal">Гол</option>
                  <option value="substitution">Замена</option>
                  <option value="yellow_card">ЖК</option>
                  <option value="red_card">КК</option>
                </select>
                <select
                  className="bg-slate-600 text-white p-1 rounded"
                  value={event.team}
                  onChange={(e) => handleEventChange(index, 'team', e.target.value)}
                >
                  <option value="home">Наша команда</option>
                  <option value="away">Соперник</option>
                </select>
                {(event.type === 'goal' || event.type === 'yellow_card' || event.type === 'red_card') && (
                  <input
                    className="bg-slate-600 text-white p-1 rounded col-span-2"
                    placeholder="Имя игрока"
                    value={event.playerName || ''}
                    onChange={(e) => handleEventChange(index, 'playerName', e.target.value)}
                  />
                )}
                {event.type === 'goal' && (
                  <input
                    className="bg-slate-600 text-white p-1 rounded col-span-2"
                    placeholder="Ассистент"
                    value={event.assistName || ''}
                    onChange={(e) => handleEventChange(index, 'assistName', e.target.value)}
                  />
                )}
                {event.type === 'substitution' && (
                  <>
                    <input
                      className="bg-slate-600 text-white p-1 rounded"
                      placeholder="Вышел на поле"
                      value={event.subbedIn || ''}
                      onChange={(e) => handleEventChange(index, 'subbedIn', e.target.value)}
                    />
                    <input
                      className="bg-slate-600 text-white p-1 rounded"
                      placeholder="Заменён"
                      value={event.subbedOut || ''}
                      onChange={(e) => handleEventChange(index, 'subbedOut', e.target.value)}
                    />
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Сохранить
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-md"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
