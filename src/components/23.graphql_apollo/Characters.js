import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from './queries'

const Characters = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS)

    if(loading) return 'Loading data...'
    if(error) return 'Error getting data!'

    return(
        <>
            <h2>Rick and Morty cool characters</h2>
            {data && data.characters.results.map(e => (
                <div key={e.id}>
                    <p>Hi! I'm {e.name} and I'm {e.species}</p>
                    <img 
                        src={e.image} 
                        alt={`${e.name} pic`}
                        style={{ width: '7rem', borderRadius: '10%'}}
                    />
                </div>
            ))}
        </>
    )
}

export default Characters