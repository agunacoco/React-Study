import React, { Component } from 'react';

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

// export를 해주면 TOC.js 파일을 사용하는 쪽에서 TOC라는 클래스를 사용할 수 있게 된다.
export default TOC;