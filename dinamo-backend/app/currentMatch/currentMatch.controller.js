const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getCurrentMatch = async (req, res) => {
    const currentMatch = await prisma?.currentMatch?.findMany();
    res.json(currentMatch)
}

const postCurrentMatch = async (req, res) => {
    try {
        const { homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, homeTeamScore, awayTeamScore } = req.body

        
    } catch (error) {
        
    }
}

const updateCurrentMatch = async (req, res) => {

}

const deleteCurrentMatch = async (req, res) => {

}

module.exports = { getCurrentMatch, postCurrentMatch, updateCurrentMatch, deleteCurrentMatch};