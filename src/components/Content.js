import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            // 독립적으로 구성된 글을 표시한다.
            // 본문과 별개로 구성되어 다른 영역에 영향을 주거나 받지 않고 독립적으로 배포되거나 재사용할 수 있다.
            <article>
                <h2>{this.props.title}</h2>
                {this.props.sub}
            </article>
        );
    }
}

export default Content;
