import React, { Component } from 'react';

class TOC extends Component {

    // component의 render 함수가 실행될지 결정할 수 있도록 하는 함수가 shouldComponentUpdate()다.
    // shouldComponentUpdate 함수는 false나 true을 리턴해야한다.
    // 두개의 매개변수를 갖도록 되어있다.

    shouldComponentUpdate(newProps, newState) {
        console.log("===> TOC render should");
        // newProps.data는 바뀐 값을 알 수 있고,  this.props.data는 현재 값을 알 수 있다.
        // return 값이 true면 render가 되고 false면 render가 호출되지 않는다.
        // 만약 app.js에서 <CreateContent>의 데이터를 concat이 아닌 push를 하면
        // 원본의 데이터 값이 바뀌기 때문에 계속 false가 리턴된다.
        if (this.props.data === newProps.data) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        console.log("TOC render")
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/" + data[i].id}
                        // data-id={data[i].id}
                        onClick={function (id, e) {
                            e.preventDefault();

                            // event 객체에 target이라는 이벤트가 발생한 태그를 알 수 있는 속성이 있다.
                            // target 안에 dataset 속성이 있는데 
                            // 위에 data-id의 -앞에 있는 접두사 data를 통해서 dataset에 접근할 수 있다.
                            // dataset에 접근하면 지정해준 data-id이름처럼 id라는 속성이 생기고
                            // id 속성에 각 a태그의 id가 있다.
                            // this.props.onChangePage(e.target.dataset.id);
                            this.props.onChangePage(id);

                            // 위처럼 data-id={data[i].id}를 해도 되지만 
                            // bind()의 두번째 인자로 보낼 수 있다.
                            // 입력한 인자는 onClick 함수의 첫번째 매개변수로 넣어준다.
                            // 기존에 존재한 onClick 함수의 event 매개변수는 뒤로 밀린다. 
                        }.bind(this, data[i].id)}
                    >{data[i].title}</a>
                </li >
            );
            i = i + 1;
        }
        return (
            // nav 태그는 목적지로 이동할 수 있도록 링크를 별도로 모아둔 영역이다.
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

// export를 해주면 TOC.js 파일을 사용하는 쪽에서 TOC라는 클래스를 사용할 수 있게 된다.
export default TOC;