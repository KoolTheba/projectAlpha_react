import React, { Suspense } from 'react'

const SimpleTodos = React.lazy(() => import('../18.hooks/SimpleTodos'))

function MyLazyRendererComponent(){
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <SimpleTodos />
            </Suspense>
        </>
    )
}

export default MyLazyRendererComponent