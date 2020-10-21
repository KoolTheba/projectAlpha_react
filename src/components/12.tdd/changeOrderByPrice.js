const changeOrderByPrice = (arr) => [...arr].sort((a, b) => a.price - b.price)

export default changeOrderByPrice