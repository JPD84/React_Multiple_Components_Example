import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
    render() {

        const commentNodes = this.props.data.map(comment => {
            return (
                <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
            )
        })
        return (
            <div className="comments-list">
                {commentNodes}
            </div> 

        );


    }

}

export default CommentList;