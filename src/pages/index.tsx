import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { selectStateToCourseCollection, fetchCoursesCreator } from '../model/course/courseCollection';


class HomePage extends React.Component<DispatchProp> {

  componentDidMount() {
    this.props.dispatch(fetchCoursesCreator())
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect(selectStateToCourseCollection)(HomePage)