import { combineReducers } from "redux";
import courseCollection from "./courseCollection";
import { CourseCollectionState } from './courseCollection';

export interface CourseState {
  courseCollection: CourseCollectionState,
}

export default combineReducers({
  courseCollection,
})