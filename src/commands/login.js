// @flow
import * as options from '../utils/options';
import { BoltError } from '../utils/errors';

export type LoginOptions = {};

export function toLoginOptions(
  args: options.Args,
  flags: options.Flags
): LoginOptions {
  return {};
}

export async function login(opts: LoginOptions) {
  throw new BoltError('Unimplemented command "login"');
}
