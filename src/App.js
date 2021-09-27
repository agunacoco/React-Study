import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

// 실제로 자바스크립트 언어는 아니다.
// 언어는 jsx라고 한다. 자동으로 자바스크립트 언어로 컴파일된다.
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Subject title="Agunacoco" subtitle="What an adorable life is it?"></Subject>
        <Subject title="React" subtitle="World wide codding!"></Subject>
        <TOC></TOC>
        <Content title="JAVA" sub="Java is HyperText Markup Language."></Content>
        <Content title="HTML" sub="Html is HyperText Markup Language."></Content>
      </div >
    );
  }
}
export default App;
