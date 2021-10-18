import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconActions({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_2:107)">
        <path d="M9.667 7.833H11a.5.5 0 100-1H9.667c-.28 0-.5.22-.5.5 0 .274.22.5.5.5zM9.169 9.667c0 .273.22.5.5.5h4.666a.5.5 0 100-1H9.67c-.28 0-.5.22-.5.5zM9.667 12.5h4.666a.5.5 0 100-1H9.667c-.28 0-.5.22-.5.5 0 .273.22.5.5.5z" />
        <path d="M19.911 14.667l-2.247-3.854V5.327c0-.74-.6-1.334-1.333-1.334H7.665c-.74 0-1.334.594-1.334 1.334v5.48l-2.24 3.848a.803.803 0 00-.094.333v4c0 .547.447 1 1 1h14c.547 0 1-.453 1-1v-4a.802.802 0 00-.093-.333l.007.012zm-3.747-9.334a.17.17 0 01.167.167v7.167c0 .366.294.666.667.666a.708.708 0 00.473-.2l.893 1.534h-2.7c-.553 0-1 .446-1 1 0 .546-.453 1-1 1h-3.333c-.553 0-1-.454-1-1 0-.554-.453-1-1-1h-2.7l.894-1.534c.12.127.293.2.473.2.367 0 .667-.3.667-.666L7.65 5.5c-.006-.093.074-.167.16-.173 0-.007 0 0 0 0l8.354.006z" />
      </g>
      <defs>
        <clipPath id="clip0_2:107">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconActions.propTypes = IconPropTypes
export default IconActions