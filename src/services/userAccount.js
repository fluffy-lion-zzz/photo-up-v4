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

// const updateProfile = () => {
//     var user = firebase.auth().currentUser
//     if(user != null){
//     user.updateProfile({
//     displayName: "updated name"
//     })

//     user.updateEmail("test@updated.com").then(() => {
//         alert('email updated');
//     }).catch((error) => {
//         alert('email not updated');
//     })
    
//     }else{
//     alert('there is no user')
//     }
// }
// const verifyUser = () => {
//     let user = firebase.auth().currentUser;
//     user.sendEmailVerification().then(() => {
//         alert('email sent')
//     }).catch('email not sent')
// }

// const deleteUser = () => {
//     let user = firebase.auth().currentUser;
//     user.delete().then(() => {
//         alert('user deleted')
//     }).catch((error) => {
//         alert('user not deleted')
//     })
// }

// const resetPassword = () => {
//     let user = firebase.auth().currentUser;
//     firebase.auth().sendPasswordResetEmail(user.email).then
//         (() => {
//             alert('email sent')
//         }).catch('email not sent')
// }

// const msg = () => {
//     console.log('hello there')
// }