import { useState } from "react";
import { useEffect } from "react";

import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signOut,
} from "firebase/auth";
import popupSuccess from "../popup/popupSuccess";
import popupError from "../popup/popupError";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  /* -------------------------------------------------------------------------- */
  /*                                  PROVIDERS                                 */
  /* -------------------------------------------------------------------------- */
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  /* -------------------------------------------------------------------------- */
  /*                              UPDATE USER INFO                              */
  /* -------------------------------------------------------------------------- */
  const updateUserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((err) => {
        popupError(err.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                             CREATE NEW ACCOUNT                             */
  /* -------------------------------------------------------------------------- */
  const createNewAccount = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserInfo(name);
        setUser(result.user);
        // save user to the database
        saveUser(email, name, "POST");
        window.location.pathname = "/form/signin";
        logOut(false);
        popupSuccess("new");
      })
      .catch((err) => {
        popupError(err.message);
      });

    setLoading(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                        SIGN IN WITH EMAIL & PASSWORD                       */
  /* -------------------------------------------------------------------------- */
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* -------------------------------------------------------------------------- */
  /*                         SIGN IN WITH SOCIAL ACCOUNT                        */
  /* -------------------------------------------------------------------------- */
  const signInWithSocial = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 USER LOGOUT                                */
  /* -------------------------------------------------------------------------- */
  const logOut = (isfalse) => {
    signOut(auth)
      .then(() => {
        popupSuccess("logout", isfalse);
      })
      .catch((err) => {
        popupError(err.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                               ON AUTH CHANGE                               */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(
      auth,
      (user) => {
        setLoading(true);
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }

        setLoading(false);
      },
      [auth]
    );

    return () => unsubscribed;
  }, [auth]);

  /* -------------------------------------------------------------------------- */
  /*                             ADD NEW USER TO DB                             */
  /* -------------------------------------------------------------------------- */
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://young-journey-72414.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  /* -------------------------------------------------------------------------- */
  /*                               ADMIN PRESENCE                               */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    axios
      .get(`https://young-journey-72414.herokuapp.com/users/${user?.email}`)
      .then((data) => setAdmin(data.data.admin));
  }, [user?.email]);

  return {
    user,
    admin,
    saveUser,
    setUser,
    loading,
    setLoading,
    createNewAccount,
    signInWithEmail,
    signInWithSocial,
    facebookProvider,
    twitterProvider,
    googleProvider,
    logOut,
  };
};

export default useFirebase;
