import app from 'firebase/app'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectID: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

class Firebase {
        constructor() {
        app.initializeApp(config)
    }
}

export default Firebase

// const config = {
//     apiKey: "AIzaSyBSPXFRnINbijBUR5Q4kZbkeuACRqHHErY",
//     authDomain: "photoupv4.firebaseapp.com",
//     projectID: "photoupv4",
//     storageBucket: "photoupv4.appspot.com",
//     messagingSenderId: "4914798488",
//     appId: "1:4914798488:web:b3f7286a718fc1182215ed"
// }