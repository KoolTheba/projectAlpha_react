const checkCorrectWord = (str) => {
    const word = 'zamarro'
    return str.trim().toLowerCase().localeCompare(word) === 0
}

export default checkCorrectWord

