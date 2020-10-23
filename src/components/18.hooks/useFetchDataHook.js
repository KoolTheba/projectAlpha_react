import { useState, useEffect } from "react"

function useFetchDataHook(url) {
    const [quotes, setQuotes] = useState([])

    const apiCall = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setQuotes(data)
    }

    useEffect(() => {
        apiCall(url)
    }, [url])

    return quotes
}

export default useFetchDataHook

