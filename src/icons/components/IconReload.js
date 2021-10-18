import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconReload({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.378 4.837a7.2 7.2 0 00-6.5 4.753c-.026.073-.106.113-.186.107L4.565 9.53a.332.332 0 00-.326.14h-.006c-.073.1-.08.24-.02.353l1.78 3.134c.047.086.14.146.245.16h.04a.388.388 0 00.233-.1l2.514-2.5a.342.342 0 000-.474.36.36 0 00-.194-.1L7.685 9.97c-.094-.02-.16-.1-.147-.193 0-.02 0-.034.007-.047h.002a5.495 5.495 0 017.26-2.813 5.497 5.497 0 012.806 7.26 5.52 5.52 0 01-4.833 3.273 5.489 5.489 0 01-4.64-2.247.83.83 0 00-1.173-.114.827.827 0 00-.174 1.094v-.001a7.176 7.176 0 005.778 2.927c.087 0 .174 0 .267-.007a7.175 7.175 0 006.94-7.387A7.176 7.176 0 0012.39 4.77h-.094l.08.068z"
      />
    </svg>
  )
}

IconReload.propTypes = IconPropTypes
export default IconReload