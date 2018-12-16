import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { selectStateToCourseCollection, fetchCoursesCreator, CourseCollectionState } from '../model/course/courseCollection';
import { Card, List } from 'antd';
import Loading from '../components/Loading';
import { Course } from '../interface/json';
import { selectCourseCreator } from '../model/ui/exercise';
import { RouteComponentProps } from 'react-router';

interface HomePageOwnProps {
  courseCollection: CourseCollectionState,
}

class HomePage extends React.Component<DispatchProp & HomePageOwnProps & RouteComponentProps> {

  componentDidMount() {
    this.props.dispatch(fetchCoursesCreator())
  }

  onSelect = (courseId: string) => {
    this.props.dispatch(selectCourseCreator(courseId))
    this.props.history.push('/sections')
  }

  render() {
    if (this.props.courseCollection.loading) return <Loading />

    return (
      <Card title="课程列表">
        <List size="default" dataSource={this.props.courseCollection.courses} renderItem={(item: Course) => (
          <div onClick={() => this.onSelect(item.id.toString())}>
            <List.Item>{item.name}</List.Item>
          </div>
        )}>
        </List>
      </Card>
    )
  }
}

export default connect(selectStateToCourseCollection)(HomePage)