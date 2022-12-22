import { UserInterface } from "../types/UserInterface";
import { ResponseUserInterface } from "../types/ResponseUserInterface";
import { User } from "../models/UserModel";
import { encryptPassword, comparePassword } from "../utils/password";
import { generate } from "../utils/token";

const checkUserExist = async ({ email }: any) => {
  const user = await User.findOne({ where: { email: email } });
  return user;
};

const registerNewUser = async ({ email, password, name }: UserInterface) => {
  if (!email || !password || !name)
    return {
      status: false,
      message: "the user data is not defined",
      user: null,
    } as ResponseUserInterface;
  const userExist = await checkUserExist({ email: email });
  if (userExist)
    return {
      status: false,
      message: "the user already exists",
      user: null,
    } as ResponseUserInterface;
  const hashedPassword = await encryptPassword(password);
  const registerNewUser = await User.create({
    email,
    password: hashedPassword,
    name,
  });
  return {
    status: true,
    message: "Successfully registered user",
    user: registerNewUser,
  } as ResponseUserInterface;
};
const loginUser = async ({ email, password }: UserInterface) => {
  if (!email || !password)
    return {
      status: false,
      message: "the user data is not defined",
      user: null,
    } as ResponseUserInterface;
  const user = await checkUserExist({ email: email });
  if (!user)
    return {
      status: false,
      message: "the user does not exist",
      user: null,
    } as ResponseUserInterface;
  const checkPassword = await comparePassword(password, user.password);
  return {
    status: checkPassword,
    message: checkPassword
      ? "Successfully logged in"
      : "Incorrect password",
    user: checkPassword ? user : null,
    token: checkPassword
      ? generate({ id: user.id, name: user.name, email: user.email })
      : null,
  } as ResponseUserInterface;
};

export { registerNewUser, loginUser };
