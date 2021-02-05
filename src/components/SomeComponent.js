import React from 'react'

import { FirebaseContext } from './Firebase'

const SomeComponent = () => (

    // return <h1> text compo</h1>
    <FirebaseContext.Consumer>
        {firebase => {
            return (
            <div>access to firebase</div>
            )
        }}
    </FirebaseContext.Consumer>
)

export default SomeComponent