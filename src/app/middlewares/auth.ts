import { JwtPayload } from 'jsonwebtoken';

import jwt from 'jsonwebtoken';

import { NextFunction, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { TUserRole } from '../modules/user/user.interface';
import catchAsync from '../utils/catchAsync';
import AppError from '../error/AppError';
import { User } from '../modules/user/user.model';
import config from '../config';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;
   
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized!');
    }
    //verify token
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
 

    const { role, email } = decoded;
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(
        new AppError(StatusCodes.NOT_FOUND, 'Invalid token or user not found'),
      );
    }

    const isUserExists = await User.findOne({ email });
    if (!isUserExists) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Invalid token or user not found')
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized !');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};
export default auth;
