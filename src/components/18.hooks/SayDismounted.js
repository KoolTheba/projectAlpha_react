import React, {useEffect} from 'react'

const SayDismounted = () => {
    useEffect(() => {
        return () => {
            console.log('Im dismounted!!!')
        }
    }, [])

    return(
        <>
        <p>2. Say Dismounted!! (check the console)</p>
        </>
    )
}

export default SayDismounted