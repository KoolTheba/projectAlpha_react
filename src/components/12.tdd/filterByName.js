const filterByName = (name, arr) => [...arr].filter(e => name.toLowerCase() === e.name.toLowerCase())

export default filterByName