import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';

const registerUser = catchAsync(async (req, res) => {
  const result = await UserServices.registerUserIntoDB(req?.body);
  res.status(200).json({
    success: true,
    message: 'User is Registered successfully',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUserIntoDB(req?.body);

  res.status(200).json({
    success: true,
    message: 'User is logged in successfully',
    data: {
      token: result.accessToken,
    },
  });
});

export const UserControllers = {
  registerUser,
  loginUser,
};
