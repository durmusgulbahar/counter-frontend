  const apiUrl = 'https://api.durmusgulbahar.dev'
export const getValue = async () => {
    const data = await fetch(
        `${apiUrl}/api/value`
    )
    const d = await data.json();
    console.log(d);
    return d.value;
}
