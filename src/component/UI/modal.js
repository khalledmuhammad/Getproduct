import React from 'react'
import classes from './modal.module.css'
import ReactDom from "react-dom"



const BackDrop =(props)=>{
    return  <div onClick={props.onClickback} className={classes.backdrop}></div>

}
const Modaloverlay = props=>{
    return (
     <div style={props.style} className={classes.modaloverlay}>
          <div className={classes.content}>{props.children}</div> 
     </div>  
    )


}
const modalrender = document.getElementById("overlays");

 const Modal = (props)=> {
  
    return (
        <>
        {   ReactDom.createPortal (<BackDrop onClickback={props.onClickback} /> , modalrender)}
            { ReactDom.createPortal   (<Modaloverlay  style={props.style} > {props.children} </Modaloverlay> , modalrender)}
           
        </>
    )
}

export default Modal