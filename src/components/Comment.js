import React, { Component } from 'react';


class Comment extends Component {

    render(){
        const {children, author} = this.props


        return(
            <div className="comment">
            <h4>{children}</h4>
            <p>{author}</p>
            </div>
        )
    }
}

export default Comment;