import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("Create render");
        return (
            <article>
                <h2>Create</h2>
                <form action="/create" method="post"
                    // submit 버튼을 눌렀을 때 submit 버튼을 포함하고 있는 form태그에 이벤트를 설정하면 이 이벤트가 실행된다. 
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }.bind(this)}>
                    <input type="text" name="title" placeholder="title"></input><br />
                    <textarea placeholder="desc" name="desc"></textarea><br />
                    <button type="submit">Submit</button>
                </form>
            </article >
        );
    }
}

export default CreateContent;
