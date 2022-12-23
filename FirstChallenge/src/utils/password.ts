import bcrypt from "bcryptjs";
const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
const comparePassword = async (password: string, encryptedPassword: string) => {
    return await bcrypt.compare(password, encryptedPassword);
};
export {
    encryptPassword,
    comparePassword
}