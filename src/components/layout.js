import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Layout extends React.PureComponent {
  render() {
    return (
      <div
        onDragOver={(ev) => ev.preventDefault()} // 이미지를 임의의 곳에 Drop할 때 브라우저 리다이렉트 방지
        onDrop={(ev) => ev.preventDefault()}
        onContextMenu={(ev) => ev.preventDefault()}
      >
        <main id="main" className="main">
          {this.renderChildren()}
        </main>
      </div>
    );
  }

  renderChildren() {
    return (
      <div id="content" className="content">
        {React.Children.only(this.props.children)}
      </div>
    );
  }
}

export default withRouter(connect(null)(Layout));
