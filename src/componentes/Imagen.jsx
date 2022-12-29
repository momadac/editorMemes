import { GeneralContext } from "../contexts/GeneralContext";
import React, { useState, useEffect, useContext } from "react";

import Font, { Text } from 'react-font'
import { motion , useMotionValue  } from "framer-motion"
import noImage from "../assets/imagenes/noImage.jpg"

const Imagen = React.forwardRef((props,ref)=> {

  const { texto1, setTexto1, texto2 ,setTexto2, urlFoto , tamTexto1 , tamTexto2 , setTamTexto2 ,  colorTexto1 ,bordeColorTexto1, setColorTexto1,
    tipoFuente , setTipoFuente , posIniPalabra1X , posIniPalabra1Y  } = useContext(GeneralContext);
  

  useEffect(() => {
    // refContenedorFoto.style.backgroundImage=`url(${urlFoto})`

    const el = document.getElementById("print");

    el.style.backgroundImage = `url(${urlFoto} )`;
    el.style.backgroundSize = "contain";
    el.style.backgroundPosition = "center center";
    el.style.width = "auto";
    // x.set(0);
    // y.set(0);
    // xp2.set(0);
    // yp2.set(0);
  
  }, [urlFoto]);

  // contraints deberían actualizarse teniendo en cuenta largo del texto
  // al contraint basico se le resta largo texto y ese valor se configura com 
  //drag enets
  //https://www.youtube.com/watch?v=mJkhhAG6qZ4
  return (
    <div  className="contenedor-Imagen"  style={{
      overflow:'hidden'
    }}>

{/* https://www.framer.com/docs/motionvalue/ */}

      {urlFoto  ? (  
      
      <div   id="print" ref={ref}>

<motion.div  
  className="palabra1" 
    // {...bindlineaTextoPos2()}
    style={{
    position: "relative",
    
      fontSize:`${tamTexto1}px`,
      color:`${colorTexto1}`,
      fontWeight: 'bold',

      textShadow: `4px  4px  4px ${bordeColorTexto1}`
    }}

    drag
    dragConstraints={{
      
      left: 0,
      right:430 ,
      bottom: 600,
    }}
    dragElastic={0}
    dragMomentum= {false}

  >
    <Font family={tipoFuente}> {texto1}</Font> 
    
</motion.div>

<motion.div  
  className="palabra2" 
  // {...bindlineaTextoPos2()}
  style={{
  position: "relative",

    fontSize:`${tamTexto2}px`,
    color:`${colorTexto1}`,
    fontWeight: 'bold',

    
    textShadow: `4px  4px  4px ${bordeColorTexto1}`
  }}

  drag
  dragConstraints={{
    
    left: 0,
    right:430 ,
    bottom: 600,
  }}
  dragElastic={0}
  dragMomentum= {false}

  >
  <Font family={tipoFuente}> {texto2}</Font> 
  
</motion.div>

{/* 
        <motion.div className="palabra1" 
          // {...bindlineaTextoPos()}
          style={{
            position: "relative",
            x,
            y,
            
            fontSize:`${tamTexto1}px`,
            color:`${colorTexto1}`,
            fontWeight: 'bold',
            overflow:"hidden",
            
            textShadow: `4px  4px  4px ${bordeColorTexto1}`
          }}
          drag
          dragConstraints={{
            top:0,
            left: 0,
            right: 400,
            bottom: 400,
          }}

          
          dragElastic={0}
          dragMomentum= {false}

        >
        <Font family={tipoFuente}> {texto1}</Font> 
      
        </motion.div> */}

      </div>):(
        <div  id="print" >

        <div style={{
          backgroundImage: `url('${noImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '500px',
          zIndex: '2'
        }} >

        </div>
        <p className="text-danger"></p>
        </div>
      )}
    
    </div>
  );
})

export default Imagen;
