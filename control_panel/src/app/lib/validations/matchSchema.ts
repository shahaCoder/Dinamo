// lib/validations/matchSchema.ts
import { z } from 'zod'

export const translationSchema = z.object({
  locale: z.enum(['ru', 'uz', 'en']),
  opponent: z.string().min(1, 'Введите имя соперника'),
  stadium: z.string().min(1, 'Введите стадион'),
  league: z.string().min(1, 'Введите лигу'),
  referee: z.string().min(1, 'Введите имя судьи'),
})

export const eventSchema = z.object({
  minute: z.string().min(1, 'Введите минуту'),
  type: z.enum(['goal', 'substitution', 'yellow_card', 'red_card']),
  team: z.enum(['home', 'away']),
  playerName: z.string().optional(),
  assistName: z.string().optional(),
  subIn: z.string().optional(),
  subOut: z.string().optional(),
})

export const matchSchema = z.object({
  matchDate: z.string().min(1, 'Введите дату матча'),
  isHomeGame: z.boolean(),
  homeTeamScore: z.number().int().min(0),
  awayTeamScore: z.number().int().min(0),
  opponentLogo: z.string().optional(),
  translations: z.array(translationSchema).min(1),
  events: z.array(eventSchema)
})

export type FormMatchProps = z.infer<typeof matchSchema>
