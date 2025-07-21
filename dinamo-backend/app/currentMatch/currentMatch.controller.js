const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getCurrentMatch = async (req, res) => {
    const locale = req.query.locale || 'uz'
    try {
        const currentMatch = await prisma?.currentMatch?.findMany({
        include: {
            translations: {
                where: { locale },
                select: {
                    homeTeam: true,
                    awayTeam: true
                }
            }
        }
        
    });

    const transformed = currentMatch.map(i => {
        const translation = i.translations[0] || {}
        return { 
            ...i,
            ...translation,
            translations: undefined
        }
    })
    res.json(transformed)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ошибка при получении данных' })
        
    }
}

const postCurrentMatch = async (req, res) => {
    try {
        const { homeTeamLogo, awayTeamLogo, homeTeamScore, awayTeamScore, translations = [] } = req.body

        const newMatch = await prisma.currentMatch.create({
            data: {
                homeTeamLogo,
                awayTeamLogo,
                homeTeamScore,
                awayTeamScore,
                translations: {
                    create: translations.map(t => ({
                        locale: t.locale,
                        homeTeam: t.homeTeam || '',
                        awayTeam: t.awayTeam || ''
                    }))
                }
            }
        })

        res.json(newMatch)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ошибка при создании игры'})
        
    }
}

const deleteCurrentMatch = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        if(isNaN(id)) {
            return res.status(400).json({ error: 'Некорректный ID' })
        }

        const match = await prisma.currentMatch.findUnique({
            where: { id }
        })
        if(!match) {
            res.status(404).json({ error: 'Игра не найдена' })
        }
        await prisma.currentMatch.delete({ where: { id }})
        res.json({ message: 'Матч успешно удален' })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' })
    }
}
const updateCurrentMatch = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        if(isNaN(id)) {
            return res.status(400).json( { error: 'Некорректный ID' })
        }
        const currentMatch = await prisma.currentMatch.findUnique({ where: { id } })
        if(!currentMatch) return res.status(404).json({ error: 'Игра не найдена' })

            const {
                homeTeamLogo, 
                awayTeamLogo, 
                homeTeamScore, 
                awayTeamScore, 
                matchDate,
                translations = []
            } = req.body

            const currentMatchData = {
                homeTeamLogo, 
                awayTeamLogo, 
                homeTeamScore, 
                awayTeamScore, 
                matchDate
            }

            const cleanData = Object.fromEntries(
                Object.entries(currentMatchData).filter(([_, v]) => v !== undefined)
            )

            const updatedCurrentMatch = await prisma.currentMatch.update({
                where: { id },
                data: cleanData
            })

            for(const t of translations) {
                if(!t.locale) continue
                const existingTranslation = await prisma.currentMatchTranslation.findFirst({
                    where: {
                        currentMatchId: id,
                        locale: t.locale
                    }
                })
                if(existingTranslation) {
                    await prisma.currentMatchTranslation.update({
                        where: { id: existingTranslation.id },
                        data: {
                            ...(t.homeTeam && { homeTeam: t.homeTeam}),
                            ...(t.awayTeam && { awayTeam: t.awayTeam})
                        }
                    })
                } else {
                    await prisma.currentMatchTranslation.create({
                        data: {
                            locale: t.locale,
                            homeTeam: t.homeTeam || '',
                            awayTeam: t.awayTeam || '',
                            currentMatch: { connect: { id }
                            }
                        }
                    })
                }
            }

            res.json({ message: 'Игра успешно обновлёна',updatedCurrentMatch })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ошибка при обновлении игры' })
    }
}


module.exports = { getCurrentMatch, postCurrentMatch, updateCurrentMatch, deleteCurrentMatch};