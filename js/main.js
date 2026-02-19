import { fetchByName } from "./api.js"
import { renderPlayers } from "./render.js"

const searchInput = document.getElementById("search")
const sportFilter = document.getElementById("sport-filter")
const judoBtn = document.getElementById("judo-btn")
const cards = document.getElementById("cards")
const loader = document.getElementById("loader")

let currentPlayers = []

async function loadPlayers(name) {
  try {
    loader.classList.remove("hidden")

    const players = await fetchByName(name)
    currentPlayers = players || []
    renderPlayers(currentPlayers, cards)

  } catch {
    cards.innerHTML = "<h2>Ошибка загрузки</h2>"
  } finally {
    loader.classList.add("hidden")
  }
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.trim()
  if (value.length > 2) {
    loadPlayers(value)
  }
})

sportFilter.addEventListener("change", () => {
  const selectedSport = sportFilter.value

  if (!selectedSport) {
    renderPlayers(currentPlayers, cards)
    return
  }

  const filtered = currentPlayers.filter(
    player => player.strSport === selectedSport
  )

  renderPlayers(filtered, cards)
})

judoBtn.addEventListener("click", () => {
  loadPlayers("Judo")
})
