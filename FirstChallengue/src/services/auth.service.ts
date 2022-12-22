import { UserInterface } from "../types/UserInterface";
import { ResponseInterface } from "../types/ResponseInterface";
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
      message: "El usuario no esta definido",
      user: null,
    } as ResponseInterface;
  const userExist = await checkUserExist({ email: email });
  if (userExist)
    return {
      status: false,
      message: "El usuario ya existe en la base de datos",
      user: null,
    } as ResponseInterface;
  const hashedPassword = await encryptPassword(password);
  const registerNewUser = await User.create({
    email,
    password: hashedPassword,
    name,
  });
  return {
    status: true,
    message: "Resgistro exitoso",
    user: registerNewUser,
  } as ResponseInterface;
};
const loginUser = async ({ email, password }: UserInterface) => {
  if (!email || !password)
    return {
      status: false,
      message: "Datos de usuario no estan definidos",
      user: null,
    } as ResponseInterface;
  const user = await checkUserExist({ email: email });
  if (!user)
    return {
      status: false,
      message: "El usuario no existe",
      user: null,
    } as ResponseInterface;
  const checkPassword = await comparePassword(password, user.password);
  return {
    status: checkPassword,
    message: checkPassword
      ? "Sesion iniciada correctamente"
      : "Usuario o contraseña incorrectos",
    user: checkPassword ? user : null,
    token: checkPassword
      ? generate({ id: user.id, name: user.name, email: user.email })
      : null,
  } as ResponseInterface;
};

export { registerNewUser, loginUser };
