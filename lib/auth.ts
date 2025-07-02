import { compare, hash } from 'bcrypt';

const SALT_ROUNDS = 12;

/**
 * Hashes a plain-text password.
 */
export async function hashPassword(password: string): Promise<string> {
  return await hash(password, SALT_ROUNDS);
}

/**
 * Verifies a plain password against a bcrypt hash.
 */
export async function verifyPassword(password: string, hashed: string): Promise<boolean> {
  return await compare(password, hashed);
}
