import { createContext } from 'react'

import 'firebase/auth'

// const defaultUser = { loggedIn: false, email: "" };
const UserContext = createContext({});
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext







