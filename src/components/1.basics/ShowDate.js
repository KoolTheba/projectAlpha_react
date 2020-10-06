import React from 'react'

const date = new Date()

const ShowDate = () => <span>Date: {date.toLocaleTimeString()}</span>

export default ShowDate