import React from 'react'

const NavigationDots = ({active}) => {

    const style={
        margin:'7px',
        height:'10px',
        width:'10px',
        border:'1px solid black',
        borderRadius:'50%',
        backgroundColor:'white'
    }
  return (
    <div>
       <div className="app__navigation">
       {['home', 'about', 'work', 'skills','testimonials', 'contact'].map((item,index) => (
                
                  <a 
                  href={`#${item}`} 
                  key={item+index}
                  className='app__navigation-dots'
                  style={active===item?{backgroundColor:'#313BAC',...style}:{...style}}
                  />
               
              ))}
       </div>
    </div>
  )
}

export default NavigationDots
