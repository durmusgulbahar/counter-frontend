export const decreaseRequest = async () => {
    const data = await   fetch('http://localhost:4000/api/decrease', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache:"no-store"
        
    })
    console.log(data)
}
