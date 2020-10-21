const getPriceColor = price => {
    if(price <= 15) return 'green'
    if(price <= 25) return 'orange'
    return 'red'
}

export default getPriceColor