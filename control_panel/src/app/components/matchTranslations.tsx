'use client'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { FormMatchProps } from '../types/matchTypes'
import { motion } from 'framer-motion'

export default function MatchTranslations() {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormMatchProps>()

  const { fields } = useFieldArray({
    control,
    name: 'translations',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {fields.map((field, idx) => (
        <div key={field.id} className="bg-slate-800 p-4 rounded shadow">
          <p className="font-bold text-white mb-2">
            Перевод на языке: {watch(`translations.${idx}.locale`)?.toUpperCase()}
          </p>

          <input
            {...register(`translations.${idx}.opponent`)}
            placeholder="Название команды соперника"
            className="border p-2 w-full rounded"
          />
          {errors.translations?.[idx]?.opponent && (
            <p className="text-red-400 text-sm">
              {errors.translations[idx].opponent?.message}
            </p>
          )}

          <input
            {...register(`translations.${idx}.stadium`)}
            placeholder="Название стадиона"
            className="border p-2 w-full rounded mt-2"
          />
          <input
            {...register(`translations.${idx}.league`)}
            placeholder="Название лиги"
            className="border p-2 w-full rounded mt-2"
          />
          <input
            {...register(`translations.${idx}.referee`)}
            placeholder="ФИО судьи"
            className="border p-2 w-full rounded mt-2"
          />
        </div>
      ))}
    </motion.div>
  )
}
