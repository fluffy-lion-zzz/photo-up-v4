import app from 'firebase/app'
import 'firebase/auth'

export const doRegister = (email, password, setNewUser) => {
    
    console.log('Register - Email: '+email+ ' ' + password);
    app.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) =>
    {
        alert('user account created')
        console.log(user)
        setNewUser(user)
        // return true
        
    }).catch((error) => {
        let message = error.message
        alert(`user cannot be created\n${message}`)
        console.log(error)
    })
}

export const getProfileData = () => {
    let user = app.auth().currentUser;
    if(user != null){
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
