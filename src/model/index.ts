import { combineReducers } from "redux";
import course from "./course";
import { CourseState } from './course/index';


export interface AppState {
  course: CourseState,
}

export default combineReducers({
  course,
})