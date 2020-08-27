import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styleIconMap = {
  Grammar: <FontAwesomeIcon className='blue' icon='list-ul' />,
  Story: <FontAwesomeIcon className='red' icon='list-ol' />,
  Vocabulary: <FontAwesomeIcon className='orange' icon='globe-americas' />,
  // 'Interview': <FontAwesomeIcon className='yellow' icon='pen-alt' />,
  Chat: <FontAwesomeIcon className='green' icon='book-open' />,
  default: null,
}

export default function StyleIcon({ style = 'default' }) {
  return styleIconMap[style]
}
