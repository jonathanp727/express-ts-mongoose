import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';

import config from '../config';
import logger from '../loaders/logger';
import UserModel from '../models/user/query';
import createUser, { User } from '../models/user';

async function signUp(name: string, email: string, role: string, password: string) {
  try {
    const salt = randomBytes(32);
    const hashedPassword = await argon2.hash(password, { salt });

    const user = await UserModel.create(
      createUser(name, email, role, hashedPassword, salt.toString('hex'))
    );

    const token = generateToken(user);

    /**
     * @TODO This is not the best way to deal with this
     * There should exist a 'Mapper' layer
     * that transforms data from layer to layer
     * but that's too over-engineering for now
     */
    Reflect.deleteProperty(user, 'password');
    Reflect.deleteProperty(user, 'salt');

    return { user, token };
  } catch (e) {
    logger.error('%o', e);
    throw e;
  }
}

async function signIn(email: string, password: string) {
  const user = await UserModel.findByEmail(email);
  if (!user) {
    throw new Error('User not registered');
  }
  const validPassword = await argon2.verify(user.passwordHash, password);
  if (validPassword) {
    const token = generateToken(user);
    Reflect.deleteProperty(user, 'password');
    Reflect.deleteProperty(user, 'salt');
    return { user, token };
  } else {
    throw new Error('Invalid Password');
  }
}

function generateToken(user: User) {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  return jwt.sign(
    {
      _id: user._id,           // Used in `isAuth` middleware
      name: user.name,
      exp: exp.getTime() / 1000,
    },
    config.jwtSecret,
  );
}

export default {
  signUp,
  signIn,
};
