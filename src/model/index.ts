import { combineReducers } from "redux";
import course from "./course";
import { CourseState } from './course/index';
import ui from "./ui";
import { UIState } from './ui/index';


export interface AppState {
  course: CourseState,
  ui: UIState,
}

export default combineReducers({
  course,
  ui,
})