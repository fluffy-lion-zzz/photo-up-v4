import React, { useEffect } from 'react'

import app from 'firebase/app'
import 'firebase/storage'



export const GetMeta = () => {
    const storage = app.storage()
    const storageRef = storage.ref('test/akira.jpg')
    let meta = storageRef.getMetadata()
                .then((metadata) => {
                    console.log(metadata)
                })
}