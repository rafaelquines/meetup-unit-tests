import { GenericLogger } from './../interfaces/lib/generic-logger.interface';
import { injectable } from 'inversify';
import * as winston from 'winston';

@injectable()
export class AppLogger implements GenericLogger {
  private readonly currentLogger: winston.Logger;
  private tag = '';

  private readonly message = (info: any) => (
    typeof info.message === 'object'
      ? JSON.stringify(info.message)
      : info.message
  )

  constructor() {
    this.currentLogger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.printf(info => `${info.timestamp} ${info.level}${this.tag ? ` [${this.tag}]` : ``}: ${this.message(info)}`),
      ),
      level: 'info',
      transports: [
        new winston.transports.Console(),
      ],
    });
  }

  info(message: any, tag?: string): void {
    this.setTag(tag);
    this.currentLogger.info(message);
  }

  warning(message: any, tag?: string): void {
    this.setTag(tag);
    this.currentLogger.warn(message);
  }

  error(message: any, tag?: string): void {
    this.setTag(tag);
    this.currentLogger.error(message);
  }

  private setTag(tag?: string) {
    this.tag = tag || '';
  }

  instance(): winston.Logger {
    return this.currentLogger;
  }
}
