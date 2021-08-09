import React from 'react';

const Navigation = ( {onRouteChange,isSignedIn}) =>{
   if(isSignedIn){return( <nav style={{display:'flex',justifyContent:'flex-end'}}>
   <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign out</p>

</nav>)
   
   }else{return(  <nav style={{display:'flex',justifyContent:'flex-end'}}>
   <p className='f3 link dim black underline pa3 pointer'>Sign in</p>
   <p className='f3 link dim black underline pa3 pointer'>Register</p>
</nav>)
  

 

   }
       
    
}
export default Navigation;