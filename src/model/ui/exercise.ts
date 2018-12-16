import { AppState } from '../index';
enum ExerciseUIActionType {
  SELECT_COURSE = 'ui/exercise/SELECT_COURSE',
  SELECT_SECTION = 'ui/exercise/SELECT_SECTION',
}

export interface ExerciseUIState {
  selectedCourseId: string;
  selectedSectionKey: string;
}

interface ExerciseUIAction {
  type: ExerciseUIActionType,
  courseId?: string,
  sectionKey?: string,
}

export default function (state: ExerciseUIState = { selectedCourseId: '', selectedSectionKey: '' }, action: ExerciseUIAction): ExerciseUIState {
  switch(action.type) {
    case ExerciseUIActionType.SELECT_COURSE:
      return {...state, selectedCourseId: action.courseId }
    case ExerciseUIActionType.SELECT_SECTION:
      return {...state, selectedSectionKey: action.sectionKey }
    default:
      return state
  }
}

export function selectCourseCreator(courseId: string): ExerciseUIAction {
  return {
    type: ExerciseUIActionType.SELECT_COURSE,
    courseId,
  }
}

export function selectSectionCreator(sectionKey: string): ExerciseUIAction {
  return {
    type: ExerciseUIActionType.SELECT_SECTION,
    sectionKey,
  }
}
