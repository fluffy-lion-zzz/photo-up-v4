import app from 'firebase/app'
import 'firebase/auth'

export const doRegister = (email, password) => {
    
    console.log('Register - Email: '+email+ ' ' + password);
    app.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) =>
    {
        alert('user account created')
        console.log(user)
        // return true
        
    }).catch((error) => {
        alert("user cannot be created")
        console.log(error)
    })
}

export const getProfileData = () => {
    let user = app.auth().currentUser;
    if(user != null){
        // console.log(' user = ', user)
        return user
    } else {
        alert("there is not authenticated user")
    }
}

export const doLogOut = () => {
    app.auth().signOut().then(() =>{
        console.log('user signed out')
    }).catch((error) => {
        console.log(error)
    })
}
