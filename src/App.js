import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

// 실제로 자바스크립트 언어는 아니다.
// 언어는 jsx라고 한다. 자동으로 자바스크립트 언어로 컴파일된다.
class App extends Component {

  constructor(props) {
    // 컴포넌트가 실행될 때 render함수보다 먼저 실행.
    // 컴포넌트를 초기화시켜주는 코드는 constructor안에 적어준다. 
    // constructor 안에서는 밑에 코드처럼 state 값을 바꾸면 되지만
    // component가 생성된 이후에 동적으로 state의 값을 바꿀려면 
    // this.setState({ 
    //   ... : ~
    // });
    // 위 처럼 setState 함수를 사용해 그 안에 state 값을 바꿔야 한다.
    super(props);
    this.max_content_id = 3;
    // state 값을 초기화
    this.state = {
      mode: 'read',
      content_id: 0,
      subject: { title: 'Agunacoco', subtitle: "What an adorable life is it?" },
      welcome: { title: "Welcome", desc: "Hello, React" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "CSS is HyperText..." },
        { id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT is HyperText..." },
      ]
    }
  }

  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {

      for (var i = 0; i < this.state.contents.length; i++) {
        if (this.state.content_id === this.state.contents[i].id) {
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
      }
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>
    } else if (this.state.mode === "create") {

      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id + 1;

        // push와 concat의 차이
        // 배열에 push를 이용해서 값을 추가하면 원본의 값이 바뀌지만
        // concat을 이용해 값을 추가하면 원본의 값이 바뀌지 않고 새로운 복제본을 만들어서 그 본제본을 바꾼다.

        // this.state.contents.push(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // )

        // 왜 여기서는 setState를 쓰지 않고 this.state로 바로 접근을 하냐면
        // 원본의 값을 바꾸는 것이 아닌 복제본을 생성해 값을 바꿀거
        // var _contents = this.state.contents.concat(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // )

        // 만약 push를 이용해서 배열에 값을 추가한다면
        // Array.from()을 이용해 this.state.content를 복제한다.
        // 복제한 newContents에 그냥 push로 원하는 값을 입력한다. 
        var newContents = Array.from(this.state.contents);
        newContents.push({ id: this.max_content_id, title: _title, desc: _desc });
        this.setState({ // 값을 수정할 때
          contents: newContents,
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === "update") {

      _article = <UpdateContent onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id + 1;

        var newContents = Array.from(this.state.contents);
        newContents.push({ id: this.max_content_id, title: _title, desc: _desc });
        this.setState({ // 값을 수정할 때
          contents: newContents,
        })
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    console.log("App render");

    // render 함수의 this는 App component를 가르킨다.
    console.log('render', this);
    return (
      <div className="App" >
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.subtitle}
          onChangePage={function () {
            this.setState({
              mode: "welcome"
            });
          }.bind(this)}
        ></Subject>
        {/* 
        //Subject component
        <header> 
          <h1><a href="/" onClick={function (e) {
            // function(e){}처럼 매개변수 e는 event다.
            console.log(e);
            // preventDefault()는 새로고침이 되지 않는다.
            e.preventDefault();
            // debugger는 브라우저가 실행을 멈춘다.
            // sources에서 보기 쉽게 되어 있다. 
            // debugger;

            // 오류 발생
            // component가 이미 생성된 이후에 동적으로 state의 값을 바꿀 때는 밑에 방법을 하면 안된다.  
            // this.state.mode = "welcome";
            // this는 App component를 뜻하는데 function안에서의 this는 undefined다.
            // function 안에 this를 사용할 수 없다.  
            // 해결법 : 함수가 끝난 중괄호 뒤에 .bind(this)를 해주면 컴포넌트(this)를 사용할 수 있게 된다.   

            // this.state를 지정할 수 있는 유일한 공간은 바로 constructor이다.
            this.setState({ // state를 변경할 때 여기서 입력.
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.subtitle}
        </header> 
        */}
        <TOC onChangePage={function (id) {
          this.setState({
            mode: 'read',
            content_id: Number(id),
          });
        }.bind(this)}
          data={this.state.contents}></TOC>

        {/* onChangMode라는 이벤트를 Control에 정의. */}
        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode,
          })
        }.bind(this)}></Control>
        {this.getContent}
      </div >
    );
  }
}
export default App;
