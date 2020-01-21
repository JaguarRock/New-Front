import React from 'react';


const AskBoard = ({ history }) => {
    return (
        <div className="r">
            <h1>질문게시판</h1>
            <div className="rr">
                <button className="btn1" onClick={() => { history.push('/write') }}>
                    글쓰기
            </button>
            </div>
        </div>
    );
};
export default AskBoard;