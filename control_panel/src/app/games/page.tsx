'use client'

import { useForm, FormProvider, useFieldArray } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'

import GameCard from '../components/game-card'
import type { PastMatchProps } from '../components/game-card'
import MatchTranslations from '../components/matchTranslations'
import MatchEventFields from '../components/matchEventField'
import { matchSchema, FormMatchProps } from '../lib/validations/matchSchema'

export default function PastMatchForm() {
  const [data, setData] = useState<PastMatchProps[]>([])

  const methods = useForm<FormMatchProps>({
    resolver: zodResolver(matchSchema),
    defaultValues: {
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
    },
  })

  const { handleSubmit, reset } = methods

  useEffect(() => {
    fetch('http://localhost:3000/pastmatches/pastMatches?locale=uz')
      .then((res) => res.json())
      .then(setData)
  }, [])

  const onSubmit = async (formData: FormMatchProps) => {
    const res = await fetch('http://localhost:3000/pastmatches/pastMatches', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      alert('Матч успешно добавлен')
      reset()
    } else {
      alert('Ошибка при добавлении матча')
    }
  }

  return (
    <FormProvider {...methods}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-10"
      >
        <section className="flex flex-col gap-5">
          {data.map((match, idx) => (
            <GameCard key={idx} match={match} />
          ))}
        </section>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-4 bg-slate-800 rounded-xl border"
        >
          <label className="block">
            Дата и время матча
            <input
              type="datetime-local"
              {...methods.register('matchDate')}
              className="mt-1 block w-full p-2 rounded bg-slate-700 text-white"
            />
            {methods.formState.errors.matchDate && (
              <p className="text-red-400 text-sm">
                {methods.formState.errors.matchDate.message}
              </p>
            )}
          </label>

          <div className="flex gap-4">
            <input
              type="number"
              {...methods.register('homeTeamScore', { valueAsNumber: true })}
              placeholder="Счёт (наши)"
              className="w-full p-2 rounded bg-slate-700 text-white"
            />
            <input
              type="number"
              {...methods.register('awayTeamScore', { valueAsNumber: true })}
              placeholder="Счёт (соперника)"
              className="w-full p-2 rounded bg-slate-700 text-white"
            />
          </div>

          <label className="flex items-center gap-2">
            <input type="checkbox" {...methods.register('isHomeGame')} />
            Это домашняя игра?
          </label>

          <MatchTranslations />
          <MatchEventFields />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded"
          >
            Создать матч
          </button>
        </form>
      </motion.div>
    </FormProvider>
  )
}
