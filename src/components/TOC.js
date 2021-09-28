import React, { Component } from 'react';

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li >);
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