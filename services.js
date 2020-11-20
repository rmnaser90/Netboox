const urllib = require('urllib')
class APImanager {
    constructor() {
        this.data = []
    }

    getPlayers() {
        urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', (err, data, res) => {
            const allPlayers = JSON.parse(data).league.standard
            const filteredPlayers = allPlayers.filter(p => {
                if (p.isActive) {
                    const playerCurrentTeamID = p.teams[p.teams.length - 1].teamId
                    if (this.teamToIDs[playerCurrentTeamID]) {
                        return true
                    }
                }
            })
            this.data = filteredPlayers
        })
    }

    loadTeamPlayers(team) {

        const teamID = this.idsToTeams[team]
        const teamPlayers = this.data.filter(p => p.teams[p.teams.length - 1].teamId == teamID)
        return teamPlayers
    }
}

module.exports = APImanager

