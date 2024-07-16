export const increaseRequest = async () => {
    const data = await   fetch('http://counter-app:4000/api/increase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache:"no-store"
    })
    console.log(data)
}
