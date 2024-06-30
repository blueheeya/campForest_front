import React from 'react'

function BackWrap({children}) {
  return (
    <section className='backWrap'>
        <div className='wrap'>
            <div className='contentWrap'>{children}</div>
        </div>
    </section>
  )
    
}

export default BackWrap