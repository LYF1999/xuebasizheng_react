import { combineReducers } from "redux";
import exercise from "./exercise";
import { ExerciseUIState } from './exercise';


export interface UIState {
  exercise: ExerciseUIState,
}

export default combineReducers({
  'exercise': exercise,
})