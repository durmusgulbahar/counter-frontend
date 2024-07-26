  const apiUrl = 'https://api.durmusgulbahar.dev'
export const decreaseRequest = async () => {
    const data = await   fetch(`${apiUrl}/api/decrease`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache:"no-store"
        
    })
    console.log(data)
}
