import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { AppState } from '../../model/index';
import { RouteComponentProps } from 'react-router';

interface SectionIndexOwnProps {
  selectedCourseId: string;
}

class SectionIndex extends React.PureComponent<SectionIndexOwnProps & DispatchProp & RouteComponentProps> {
  componentDidMount() {
    if(!this.props.selectedCourseId) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect((state: AppState) => ({
  selectedCourseId: state.ui.exercise.selectedCourseId,
}))(SectionIndex)