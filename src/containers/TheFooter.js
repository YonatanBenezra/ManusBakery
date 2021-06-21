import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">Manu's Bakery</a>
        <span className="ml-1">&copy;.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Manu's Bakery</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
