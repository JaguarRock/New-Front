import React from 'react';
import { Component } from 'react';
import BoardService from '../../service/BoardService';

class AskBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Boards: [],
            message: null
        }
        this.reloadBoardList = this.reloadBoardList.bind(this);
        this.addBoard = this.addBoard.bind(this);
        this.editBoard = this.editBoard.bind(this);
        this.deleteBoardList = this.deleteBoardList.bind(this);
    }

    componentDidMount() {
        this.reloadBoardList();
    }

    reloadBoardList() {
        BoardService.fetchBoard()
            .then((res) => {
                this.setState({ Boards: res.data.result })
            });
    }

    deleteBoardList(id) {
        BoardService.deleteBoard(id)
            .then(res => {
                this.setState({ Boards: this.state.Boards.filter(Board => Board.id !== id)})
            })
    }

    editBoard(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/editaskboards');
    }

    addBoard() {
        window.localStorage.removeItem("id");
        this.props.history.push('/writeaskboards');
    }

    render() {
        return (
            <div className="container">
                <center><h1>질문게시판</h1></center>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Boards.map(
                                    Board => 
                                        <tr key={Board.id}>
                                            <td>{Board.id}</td>
                                            <td>{Board.title}</td>
                                            <td>{Board.content}</td>
                                            <td>
                                                <button className="btn1" onClick={() => this.deleteBoardList(Board.id)}>삭제</button>
                                                <button className="btn1" onClick={() => this.editBoard(Board.id)}>수정</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="rr">
                    <button className="btn1" onClick={() => this.addBoard() }>글쓰기</button>
                </div>
            </div>
        );
    }
};
export default AskBoard;