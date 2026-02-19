const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3"

export async function fetchByName(name) {
  try {
    const response = await fetch(`${BASE_URL}/searchplayers.php?p=${name}`)

    if (!response.ok) {
      throw new Error("Ошибка запроса")
    }

    const data = await response.json()
    return data.player

  } catch (error) {
    console.error("API ERROR:", error)
    throw error
  }
}
