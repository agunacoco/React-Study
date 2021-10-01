import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("Create render");
        return (
            <article>
                <h2>Create</h2>
                <form action="/create_p" method="post"
                    // submit 버튼을 눌렀을 때 submit 버튼을 포함하고 있는 form태그에 이벤트를 설정하면 이 이벤트가 실행된다. 
                    onSubmit={function (e) {
                        e.preventDefault();
                        alert('Submit');
                    }.bind(this)} >
                    <input type="text" name="title" placeholder="title" />
                    <textarea name="desc" placeholder="content"></textarea>
                    <input type="submit">Submit</input>
                </form>
            </article >
        );
    }
}

export default CreateContent;
