import React from 'react'

import './member-styles.css';

function Member(props) {
  const { name, studentNumber } = props;
  return (
    <div className="member">
      <div class="name-wrapper">
        {name} SN: {studentNumber}
      </div>
    </div>
  )
}

export default Member