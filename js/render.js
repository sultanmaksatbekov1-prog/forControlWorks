export function renderPlayers(players, container) {
  container.innerHTML = ""

  if (!players || players.length === 0) {
    container.innerHTML = "<h2>Ничего не найдено</h2>"
    return
  }

  players.forEach(player => {
    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
      <img src="${player.strThumb || ''}" alt="">
      <h3>${player.strPlayer}</h3>
      <p>${player.strSport}</p>
      <p>${player.strNationality}</p>
    `

    container.append(card)
  })
}
