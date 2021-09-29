import React, { Component } from 'react';

class TOC extends Component {
    render() {
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