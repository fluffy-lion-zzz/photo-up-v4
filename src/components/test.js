import React from 'react'

import { FirebaseContext } from './firebase/firebase'

const TestComponent = () => {
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>access to firebase</div>
        }}
    </FirebaseContext.Consumer>
}

export default TestComponent