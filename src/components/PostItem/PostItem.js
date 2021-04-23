import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function PostItem(props) {
  return (
    <li className='post-item'>
      <h3>
        {props.title}
      </h3>
      <p>
        {props.content}
      </p>
      <p>
        Date: {moment(props.modified).format("MM DD YYYY")}
      </p>
      <div className='post-buttons'>
        <button className='post-edit-button'>
          <Link to={`/edit-post/${props.id}`}>
            Edit
          </Link>
        </button>
        <button className='post-delete-button'>
          <Link to={`/delete-post/${props.id}`}>
            Delete
          </Link>
        </button>
      </div>
      <hr />
    </li>
  )
}