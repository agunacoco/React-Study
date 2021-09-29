import React, { Component } from 'react';

class Subject extends Component {

    // render 함수는 UI를 사용할 때 필연적으로 눈에 보이는 화면을 구성해주는 렌더링이 필요하다.
    // 렌더링이란 서버로부터 HTML 파일을 받아 브라우저에 뿌려주는 과정.
    // 리액트에서는 render 함수가 바로 그 역할을 하고 있다.
    render() { // render 함수
        return ( // 컴포넌트를 만들 때는 하나의 최상위 태그로 시작해야한다.(vue와 같다)
            <header>
                <h1><a href="/">{this.props.title}</a></h1>
                {this.props.subtitle}
            </header>
        );
    }
}

export default Subject;