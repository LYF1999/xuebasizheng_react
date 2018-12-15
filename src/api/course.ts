import axios from 'axios';
import { Course } from '../interface/json';

export function fetchCourses() {
  return axios.get<Course[]>('/api/courses').then(res => res.data)
}