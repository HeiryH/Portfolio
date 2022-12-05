import React from 'react'

const WorkLink = ( {title, imgUrl, link}) => {
  return (
    <div>
        <p className="font-abhaya text-7xl lg:text-9xl font-extrabold hover:text-[#D6D5A8] text-transparent text-stroke">
            {title}
        </p>
    </div>
  )
}

export default WorkLink