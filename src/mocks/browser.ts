import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

//dodaj handlers i rejestrujesz aktywuj service worker

export const worker = setupWorker(...handlers);
