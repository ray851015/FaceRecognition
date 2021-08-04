import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () =>{
    return(
        <div className='f3'>
            <p>
                {'This detect your face'}
            </p>
            <div className='center form'>
                <div className='shadow-5 pa4 br3 w-100 center '>
                <input className='f4 pa2 w-70 ' type='tex'/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple '>detect</button>
            </div>
            </div>
            
        </div>
    );
}
export default ImageLinkForm;