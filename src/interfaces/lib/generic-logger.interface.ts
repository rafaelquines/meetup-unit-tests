import * as winston from 'winston';

export interface GenericLogger {
  info(message: any, tag?: string): void;
  warning(message: any, tag?: string): void;
  error(message: any, tag?: string): void;
  instance(): winston.Logger;
}
