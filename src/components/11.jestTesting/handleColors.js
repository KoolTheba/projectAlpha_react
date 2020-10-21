function handleColors (){
    const colors = ['yellow', 'red', 'blue']

    const removeColorFromArray = (array, color) => array.filter(element => element !== color)
      
    return removeColorFromArray(colors, 'blue')
}

export default handleColors