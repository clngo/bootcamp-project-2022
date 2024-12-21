import React from 'react';

type IComment = {
    user: string;
    comment: string;
    time: Date;
}

type CommentProps = {
    comment: IComment;
}

// Function to format the time into a readable format
function parseCommentTime(time: Date) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return time.toLocaleString('en-US', options);
}

function Comment({ comment }: CommentProps) {
    return (
        <div style={styles.commentContainer}>
            <h4 style={styles.userName}>{comment.user}</h4>
            <p style={styles.commentText}>{comment.comment}</p>
            <span style={styles.commentTime}>{parseCommentTime(comment.time)}</span>
        </div>
    );
}
const styles = {
    commentContainer: {
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    userName: {
        fontSize: '1.2em',
        fontWeight: 'bold',
    },
    commentText: {
        fontSize: '1em',
        color: '#333',
    },
    commentTime: {
        fontSize: '0.9em',
        color: '#888',
        marginTop: '10px',
        display: 'block',
    }
};


export default Comment;
