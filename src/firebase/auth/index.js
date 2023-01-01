import {
    createUserWithEmailAndPassword,
    EmailAuthProvider,
    getAuth,
    onAuthStateChanged,
    reauthenticateWithCredential,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    updateProfile,
  } from "firebase/auth";
  import { failRequest, returnSuccessObjectWithMessage, successRequest } from "src/helpers";
  import { addUser, deleteUser } from "src/store/slices/auth";
  import firebase from "../firebase";

  const { auth } = firebase;

  const signIn = async ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = async ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (dataObj) => {
    return updateProfile(auth.currentUser, {
      displayName: dataObj.displayName,
    });
  };
  const sendVerificationEmail = (user = null) => {
    const u = user ? user : auth.currentUser;
    return sendEmailVerification(u);
  };

  const logout = async () => {
    return signOut(auth);
  };

  const verifyAuth = (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(deleteUser());
      }
    });
  };

  const updateUserPassword = async ({ current: userProvidedPassword, password: newPassword }) => {
    const credential = EmailAuthProvider.credential(auth.currentUser.email, userProvidedPassword);
    return reauthenticateWithCredential(auth.currentUser, credential)
      .then(() => {
        return updatePassword(auth.currentUser, newPassword)
          .then(() => {
            return successRequest("Password updated successfully");
          })
          .catch((error) => {
            return failRequest(error.code);
          });
      })
      .catch((error) => {
        return failRequest(error.code);
      });
  };

  const sendEmailToResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        return successRequest(
          "We have sent an email to your email address. Please check your inbox and follow the instructions to reset your password."
        );
      })
      .catch((err) => {
        failRequest(err.code);
      });
  };

  const cacheCurrentUser = async (usr, dispatch) => {
    const user = usr || auth.currentUser;
    if (!user) return;
    const idToken = await user.getIdTokenResult();
    const cachedUserData = {
      email: user.email,
      id: user.uid,
      name: user.displayName,
      admin: idToken.claims.admin,
      emailVerified: user.emailVerified,
    };
    dispatch(addUser(cachedUserData));
  };
  const authentication = {
    signIn,
    logout,
    verifyAuth,
    register,
    sendVerificationEmail,
    updateUserPassword,
    sendEmailToResetPassword,
    updateUserProfile,
    cacheCurrentUser,
  };

  export default authentication;
