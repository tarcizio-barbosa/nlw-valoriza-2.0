import { compareSync, hashSync } from 'bcryptjs';

class PasswordService {
  hashPassword(userPassword: string) {
    const encryptedPassword = hashSync(userPassword, 8);

    return encryptedPassword;
  }
  checkPassword(encryptedPassword: string, userPassword: string) {
    const passwordMatch = compareSync(encryptedPassword, userPassword);

    return passwordMatch;
  }
}

export { PasswordService };
