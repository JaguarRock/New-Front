import React, { Component } from 'react';

class WriteBoard extends Component {
    render() {
        return(
            <div className="r">
                <h1>질문 게시판 쓰는 페이지</h1>
                <form>
                    <div className="form-group">
                        <label>Board title :</label>
                        <input type="text" placeholder="title" name="title" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Board content :</label>
                        <input type="text" placeholder="content" name="content" className="form-control"/>
                    </div>
                    <button className="btn2">글쓰기</button>
                </form>
            </div>
        );
    }
}

export default WriteBoard;