import * as React from 'react';
import { Spin } from 'antd';

class Loading extends React.Component {
  render() {
    return (
      <Spin style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    )
  }
}

export default Loading;