import { useEffect, useState } from "react"
import initializaAuthentication from "../Pages/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    initializaAuthentication();

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).finally(() => setLoading(false));
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false);

            return () => unsubscribe;
        })
    }, []);


    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).finally(() => { setLoading(false) })
    };

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;