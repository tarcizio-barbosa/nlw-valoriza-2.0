import { hashSync } from 'bcryptjs';

class PasswordService {
  hashPassword(userPassword: string) {
    const encryptedPassword = hashSync(userPassword, 8);

    return encryptedPassword;
  }
}

export { PasswordService };
