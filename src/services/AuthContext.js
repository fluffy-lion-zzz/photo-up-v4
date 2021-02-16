// import React, { createContext, useContext, useState, useEffect } from 'react'


// WORKING
import React, { useState, createContext, useEffect } from 'react'

import app from 'firebase/app'
import 'firebase/auth'




const defaultUser = { loggedIn: false, email: "" };
const UserContext = createContext({});
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext







