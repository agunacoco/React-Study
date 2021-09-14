import React, { Component } from 'react';
import './App.css';

class Subject extends Component {

  // render 함수는 UI를 사용할 때 필연적으로 눈에 보이는 화면을 구성해주는 렌더링이 필요하다.
  // 렌더링이란 서버로부터 HTML 파일을 받아 브라우저에 뿌려주는 과정.
  // 리액트에서는 render 함수가 바로 그 역할을 하고 있다.
  render() { // render 함수
    return ( // 컴포넌트를 만들 때는 하나의 최상위 태그로 시작해야한다.(vue와 같다)
      <header>
        <h1>Web</h1>
        world wide web!
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      // nav 태그는 목적지로 이동할 수 있도록 링크를 별도로 모아둔 영역이다.
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      // 독립적으로 구성된 글을 표시한다.
      // 본문과 별개로 구성되어 다른 영역에 영향을 주거나 받지 않고 독립적으로 배포되거나 재사용할 수 있다.
      < article >
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article >
    );
  }
}

class App extends Component {
  render() {
    return ( // 언어는 jsx라고 한다. 자동으로 자바스크립트 언어로 컴파일된다.
      <div className="App" >
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
