import * as React from "react"
import {motion} from 'framer-motion'
import { useState } from "react"
import './Committee.css';
import Modal from "../Modal/Modal";

const Committee = (props) => {
  const [modalOpen,setModalOpen]=useState(false);
  const close=()=>setModalOpen(false);
  const open=()=>setModalOpen(true); 
  return (
    <div>
    <motion.div
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      onClick={()=>(modalOpen?close():open())}
    >
      <div className="card">
        <img src="https://i.imgur.com/aQEZepZ.jpeg"></img>
      </div>
    </motion.div>
    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
    </div>
  );
}

export default Committee
