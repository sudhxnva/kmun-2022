import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import './modal.css'
import React from "react";

const dropIn = {
    hidden:{
        y:'-100vh',
        opacity:0,
    },
    visible:{
        y:'0',
        opacity:1,
        transition:{
            duration:0.2,
            type:'spring',
            damping:50,
            stiffness:500,
        },
    },
    exit:{
        y:'100vh',
        opacity:0,
    },
};

const Modal =({handleClose, data})=>{
    return(
        <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e)=>e.stopPropagation()}
            className="modal"
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
        <div class="modal-open">
            <div id="img">img</div>
            <div id="name"  
                style={{
                    fontSize: "3vw",
                    fontWeight: "900",
                    color: "var(--primary)",
                    }}><p>United Nations Security Council</p>
                
            </div>
            <div id="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div> 
            <div class="dias">
            <div id="eb1">eb1</div>
            <div id="eb1-name"><p>Chairperson</p>XYZ</div>
            <div id="eb2">eb2</div>
            <div id="eb2-name"><p>Vice-Chairperson</p>XYZ</div>
            <div id="eb3">eb3</div>
            <div id="eb3-name"><p>Moderator</p>XYZ</div>
        
        </div>
        </motion.div>
        </Backdrop>
    );
};

export default Modal;