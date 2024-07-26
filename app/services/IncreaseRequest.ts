  const apiUrl = 'https://api.durmusgulbahar.dev'
export const increaseRequest = async () => {
    const data = await   fetch(`${apiUrl}/api/increase`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache:"no-store"
    })
    console.log(data)
}
