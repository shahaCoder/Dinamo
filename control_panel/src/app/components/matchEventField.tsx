'use client'

import { useFormContext, useFieldArray, useWatch } from 'react-hook-form'
import { FormMatchProps } from '../types/matchTypes'
import { motion } from 'framer-motion'

export default function MatchEventField() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormMatchProps>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'events',
  })

  const events = useWatch({ control, name: 'events' })

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">События матча</h2>

      {fields.map((field, idx) => {
        const type = events?.[idx]?.type

        return (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border p-3 rounded bg-slate-700 space-y-2"
          >
            <input
              placeholder="Минута"
              {...register(`events.${idx}.minute`)}
              className="input"
            />

            <select {...register(`events.${idx}.type`)} className="input">
              <option value="goal">Гол</option>
              <option value="substitution">Замена</option>
              <option value="yellow_card">ЖК</option>
              <option value="red_card">КК</option>
            </select>

            <select {...register(`events.${idx}.team`)} className="input">
              <option value="home">Наша команда</option>
              <option value="away">Соперник</option>
            </select>

            {(type === 'goal' || type === 'yellow_card' || type === 'red_card') && (
              <input
                placeholder="Имя игрока"
                {...register(`events.${idx}.playerName`)}
                className="input"
              />
            )}

            {type === 'goal' && (
              <input
                placeholder="Ассистент"
                {...register(`events.${idx}.assistName`)}
                className="input"
              />
            )}

            {type === 'substitution' && (
              <>
                <input
                  placeholder="Вышел на поле"
                  {...register(`events.${idx}.subIn`)}
                  className="input"
                />
                <input
                  placeholder="Заменён"
                  {...register(`events.${idx}.subOut`)}
                  className="input"
                />
              </>
            )}

            <button
              type="button"
              onClick={() => remove(idx)}
              className="text-red-400 underline text-sm"
            >
              Удалить
            </button>
          </motion.div>
        )
      })}

      <button
        type="button"
        onClick={() => append({ minute: '', type: 'goal', team: 'home' })}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        + Добавить событие
      </button>
    </div>
  )
}
