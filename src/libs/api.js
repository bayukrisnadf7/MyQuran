export const getResponseQuran = async (source) => {
    const response = await fetch(`${process.env.API_BASE_URL}/${source}`)
    const quran = await response.json()
    return quran
}