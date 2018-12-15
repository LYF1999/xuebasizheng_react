import { Course } from '../../interface/json';
import * as courseApi from '../../api/course';
import { put, takeLatest, call } from 'redux-saga/effects';
import { AppState } from '../index';
import { handleErr } from '../../util';
import { ResErr } from '../../util/index';

export enum CourseCollectionActionType {
  LOAD_FINISHED = 'course/courseCollection/LOAD_FINISHED',
  LOAD_STARTED = 'course/courseCollection/LOAD_STARTED',
  LOAD_REQ = 'course/courseCollection/LOAD_REQ',
  LOAD_FAILED = 'course/courseCollection/LOAD_FAILED',
}

export interface CourseCollectionAction {
  type: CourseCollectionActionType,
  courseCollection?: Course[],
  err?: any;
}

export interface CourseCollectionState {
  courses: Course[];
  loading: boolean;
  err?: ResErr,
}

export default function (state: CourseCollectionState = {
  courses: [],
  loading: false,
  err: null,
}, action: CourseCollectionAction): CourseCollectionState {
  switch (action.type) {
    case CourseCollectionActionType.LOAD_FINISHED:
      return { courses: action.courseCollection, loading: false }
    case CourseCollectionActionType.LOAD_STARTED:
      return { courses: [], loading: true }
    case CourseCollectionActionType.LOAD_FAILED:
      return { courses: [], loading: false, err: action.err }
    default:
      return state;
  }
}

function *fetchCourses() {
  yield put({ type: CourseCollectionActionType.LOAD_STARTED })
  try {
    const courses = yield call(courseApi.fetchCourses)
    yield put({ type: CourseCollectionActionType.LOAD_FINISHED, courseCollection: courses });
  } catch(err) {
    yield put({ type: CourseCollectionActionType.LOAD_FAILED, err: handleErr(err) })
  }
}

export function fetchCoursesCreator(): CourseCollectionAction {
  return { type: CourseCollectionActionType.LOAD_REQ }
}

export function selectStateToCourseCollection(state: AppState) {
  return {
    courseCollection: {
      ...state.course.courseCollection,
    }
  }
}

export function *saga() {
  yield takeLatest(CourseCollectionActionType.LOAD_REQ, fetchCourses)
}
