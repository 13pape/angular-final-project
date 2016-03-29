"use strict";

app.factory("authFactory", (firebaseURL) => {
  let ref = new Firebase(firebaseURL);

  return {
    /*
      Determine if the client is authenticated
     */
    isAuthenticated () {
      console.log("isAuthenticated called");
      let authData = ref.getAuth();

      if (authData) {
        console.log("yes, authdata", authData);
        return true;
      } else {
        console.log("no authdata");
        return false;
      }
    },
    /*
      Authenticate the client via Firebase
     */
    authenticate (credentials) {
      return new Promise((resolve, reject) => {
        ref.authWithPassword({
          "email": credentials.email,
          "password": credentials.password
        }, (error, authData) => {
          if (error) {
            reject(error);
          } else {
            console.log("authWithPassword method completed successfully");
            resolve(authData);
          }
        });
      });
    }
  };
});
