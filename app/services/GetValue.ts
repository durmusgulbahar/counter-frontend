
export const getValue = async () => {
    const data = await fetch(
        'http://localhost:4000/api/value'
    )
    const d = await data.json();
    console.log(d);
    return d.value;
}
