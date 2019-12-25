import { Course } from '../domain/course';
import config from '../config.json';
import http from './httpService';

export function getCourses() {
  return http.get(config.coursesEndpoint);
}

export function postCourse(course: Course) {
  return http.post(config.coursesEndpoint, course);
}

