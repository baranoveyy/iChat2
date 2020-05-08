interface Auth {
  isLoggedIn?: boolean;
  cognitoUser?;
}

type AuthState = Readonly<Auth>;

export default AuthState;
