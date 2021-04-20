import React from 'react';
import moment from 'moment';

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
      <hr />
    </li>
  )
}