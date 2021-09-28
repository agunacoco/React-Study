import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

// 실제로 자바스크립트 언어는 아니다.
// 언어는 jsx라고 한다. 자동으로 자바스크립트 언어로 컴파일된다.
class App extends Component {

  constructor(props) {
    // 컴포넌트가 실행될 때 render함수보다 먼저 실행.
    // 컴포넌트를 초기화시켜주는 코드는 constructor안에 적어준다. 
    super(props);
    // state 값을 초기화
    this.state = {
      mode: 'welcome',
      subject: { title: 'Agunacoco', subtitle: "What an adorable life is it?" },
      welcome: { title: "Welcome", desc: "Hello, React" },
      content: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "CSS is HyperText..." },
        { id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT is HyperText..." },
      ]
    }
  }

  render() {
    return (
      <div className="App" >
        <Subject title={this.state.subject.title} subtitle={this.state.subject.subtitle}></Subject>
        <Subject title="React" subtitle="World wide codding!"></Subject>
        <TOC data={this.state.content}></TOC>
        <Content title="JAVA" sub="Java is HyperText Markup Language."></Content>
        <Content title="HTML" sub="Html is HyperText Markup Language."></Content>
      </div >
    );
  }
}
export default App;
