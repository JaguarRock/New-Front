import React from 'react';
import { Component } from 'react';
import BoardService from '../../service/BoardService';

class EditAskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            title : '',
            content : ''
        }
        this.loadBoard = this.loadBoard.bind(this);
        this.saveBoard = this.saveBoard.bind(this);
    }

    componentDidMount() {
        this.loadBoard();
    }

    loadBoard() {
        BoardService.fetchBoardById(window.localStorage.getItem("id"))
            .then((res) => {
                let Board = res.data.result;
                this.setState({
                    id : Board.id,
                    title : Board.title,
                    content : Board.content
                })
            });
    }

    saveBoard = (e) => {
        e.preventDefault();
        let Board = { id: this.state.id, title : this.state.title, content: this.state.content };
        BoardService.editBoard(Board)
            .then((res) => {
                this.props.history.push('/askboard');
            });
    }

    onChange = (e) => 
        this.setState({ [e.target.name] : e.target.value });

    render() {
        return (
            <div className="r">
                <center><h1>질문 게시판 글 수정</h1></center>
                <form>
                    <div className="form-group">
                        <label>Board title :</label>
                        <input type="text" placeholder="title" name="title" className="form-control"
                         value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Board content :</label>
                        <input type="text" placeholder="content" name="content" className="form-control"
                         value={this.state.content} onChange={this.onChange}/>
                    </div>
                    <button className="btn2" onClick={this.saveBoard}>수정</button>
                </form>
            </div>
        )
    }
}

export default EditAskBoard;