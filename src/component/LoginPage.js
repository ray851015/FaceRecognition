import React from 'react';

const LoginPage = ({onRouteChange} ) =>{
   return(
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5  ">
   <div className="pa4 black-80 ">
   <form className="measure ">
     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
       <legend className="f1 fw7 ph0 mh0">Sign In</legend>
       <div className="mt3">
         <label className="db fw6 lh-copy f6" for="email-address">Email</label>
         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
       </div>
       <div className="mv3">
         <label className="db fw6 lh-copy f6" for="password">Password</label>
         <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
       </div>
       <label className="pa0 ma0 lh-copy f6 pointer"> Register</label>
     </fieldset>
     <div className="">
       <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={ () => onRouteChange('home')}/>
     </div>
   </form>
 </div>
</article>
 )
    
}

export default LoginPage;