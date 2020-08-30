/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 29_WhenUseArrowFunctions.js para ver el resultado en la consola */

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${this.teamName}`
    })
  }
}

console.log(team.teamSummary())
