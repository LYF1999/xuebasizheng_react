import * as React from 'react';
import { Card, List } from 'antd';
import { connect, DispatchProp } from 'react-redux';

export enum ExerciseKey {
  NORMAL,
  RANDOM,
  REAL,
}

type ExerciseType = { label: string, key: number }; 

const ExerciseTypes: ExerciseType[] = [{
  label: '普通练习',
  key: ExerciseKey.NORMAL,
}, {
  label: '随机练习',
  key: ExerciseKey.RANDOM,
}, {
  label: '模拟考场',
  key: ExerciseKey.REAL,
}]

class ExerciseIndex extends React.PureComponent<DispatchProp> {
  render() {
    return(
      <Card title="练习类型">
        <List dataSource={ExerciseTypes} renderItem={(item: ExerciseType) => (
          <div>
            <List.Item>{item.label}</List.Item>
          </div>
        )} />
      </Card>
    )
  }
}

export default connect()(ExerciseIndex)