import React, { Component } from 'react';
import BoardService from '../../service/BoardService';

class WriteBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        
    }

    saveBoard = (e) => {
        e.preventDefault();
        let Board = { title : this.state.title, content: this.state.content };
        BoardService.addBoard(Board)
            .then((res) => {
                this.props.history.push('/askboard');
            })
    }

    onChange = (e) => 
        this.setState({ [e.target.name] : e.target.value });

    render() {
        return(
            <div className="r">
                <h1>질문 게시판 쓰기</h1>
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
                    <button className="btn2" onClick={this.saveBoard}>글쓰기</button>
                </form>
            </div>
        );
    }
}

export default WriteBoard;