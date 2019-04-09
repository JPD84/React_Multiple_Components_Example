import React, { Component } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 1, author: "James", text: 'I love Custard' },
                { id: 2, author: "Kirsten", text: ' When am I due?' }
            ]
        }

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    }

    handleCommentSubmit(comment){
        comment.id = Date.now()
        const updatedComments = [...this.state.data,comment]
        this.setState({data: updatedComments})

    }

    render() {
        return (
            <div className="comment-box">
                <h2> Add a Comment </h2>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                <h2>Comment List</h2>
                <CommentList data={this.state.data} />
            </div>
        )
    }

}

export default CommentBox;