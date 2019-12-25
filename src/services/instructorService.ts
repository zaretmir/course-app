import config from '../config.json';
import http from './httpService';

export function getInstructors() {
  return http.get(config.instructorsEndpoint);
}
