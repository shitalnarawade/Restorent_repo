import React, { Fragment } from 'react'
import ReactDom from 'react-dom';
import './Model.css'

const Backdrop = (props)=>{
    return <div className='backdrop' onClick={props.onClose}/>
};
const ModelOverlay = (props)=>{
    return <div className='modal'>
        <div className='content' >{props.children} </div>
    </div>
};

const portalElement = document.getElementById('overlays');

function Model(props) {
  return (
    <Fragment>
        {/* <Backdrop/>
        <ModelOverlay>{props.children}</ModelOverlay>  */}
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </Fragment>
  )
}

export default Model
