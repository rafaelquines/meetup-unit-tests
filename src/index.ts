import 'reflect-metadata';
import { getApp, getLogger } from './bootstrap/inversify.config';

getApp().start();

getLogger().info('Finished');
