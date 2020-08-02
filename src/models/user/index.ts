export interface User {
  name: string;
  email: string;
  role: string;
  passwordHash: string;
  saltHex: string;
  _id?: string;
}

export interface UserTokenData {
  _id: string;
  role: string;
}

const createUser = (
  name: string,
  email: string,
  role: string,
  passwordHash: string,
  saltHex: string
): User => ({
  name,
  email,
  role,
  passwordHash,
  saltHex,
});

export default createUser;
