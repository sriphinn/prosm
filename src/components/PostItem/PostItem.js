import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './PostItem.css';

export default function PostItem(props) {
  return (
    <li className='post-item'>
      <div className='post-content'>
      <h3>
        {props.title}
      </h3>
      <p className='post-date'>
        {moment(props.modified).format("MM DD YYYY")}
      </p>
      <p>
        {props.content}
      </p>
      </div>
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
    </li>
  )
}