"use client"

import React, { useRef, useEffect,useState} from 'react';
import styles from './Rulette.module.css';
import Modal from './Modal';

let ultimocolor=["",""];

function ramdocolor(item="") {

  const listaColores = ['#9701e0', '#68c822', '#d3015a', '#5d0af9', '#0719f7', '#22a0be', '#fc7c02', '#fed103'];
  let indiceColor = Math.floor(Math.random() * listaColores.length);

  if(listaColores[indiceColor]==ultimocolor[0] || listaColores[indiceColor]==ultimocolor[1]){
    return ramdocolor(item);
  }else{
    if(ultimocolor[0]==""){
      ultimocolor[0]=listaColores[indiceColor];
      return listaColores[indiceColor];
    }else{
      ultimocolor[1]=listaColores[indiceColor];
      return listaColores[indiceColor];
    }
  }
  
}

const Wheel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [estado, setEstado] = useState('Sortear');
  const [wave, setWave] = useState(true); 
  const [getConcursantes, setConcursantes] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [win, setWin] = useState('');


  
  useEffect(() => {
    const dibujarRueda = () => {
      const canva = canvasRef.current;
      if (!canva) return 0
      const ctx = canva.getContext('2d');
      if (!ctx) return 0

      return new Promise((resolve) => {
        const centro = canva.width / 2;
        const concursantes = getConcursantes.split("\n").filter(item => item.trim() !== "");

        if(concursantes.length<=0)concursantes.push('1','2','3','4');

        ctx.clearRect(0, 0, canva.width, canva.height); // Limpia el canvas

        ultimocolor=["",""];

        concursantes.forEach((concursante, i) => {
          //////////////////////////////////
          ctx.beginPath();
          ctx.moveTo(centro, centro);
          ctx.arc(centro, centro, centro - 20, i * 2 * Math.PI / concursantes.length, (i + 1) * 2 * Math.PI / concursantes.length);

          ctx.lineTo(centro, centro);
          ctx.fillStyle = ramdocolor(concursante);
          ctx.fill();

          ctx.save();
          ctx.translate(centro, centro);

          ctx.rotate(3 * 2 * Math.PI / (5 * concursantes.length) + i * 2 * Math.PI / concursantes.length);
          
          ctx.translate(-centro, -centro);

          const radio = centro - 20;
          const anguloPorConcursante = 2 * Math.PI / concursantes.length;
          const longitudArco = anguloPorConcursante * radio;    
          const pxPorCaracter = 5; // Reducir de 5px a 4px por caracter
          const caracteresEstimados = longitudArco / pxPorCaracter;
          const factorEscalado = 12; // Aumentar el factor base de escalado
          const fontSize = Math.max(12, Math.min(28, factorEscalado * (longitudArco / (concursante.length * pxPorCaracter))));
          ctx.font = `${fontSize}px sans-serif`;

          ctx.textAlign = 'right';
          ctx.fillStyle = 'white';
          ctx.fillText(concursante.substring(0, 11), canva.width - 60, centro);
          ctx.restore(); // dibuja cada concursante

        });

        
        //////////////////////////////////
        ctx.beginPath();
        ctx.arc(centro, centro, centro-255, 0, 2 * Math.PI); 
        ctx.fillStyle = "white";
      
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; 
        ctx.shadowBlur =  0; 
        ctx.shadowOffsetX = 6; 
        ctx.shadowOffsetY = 6; 
        ctx.fill(); // Dibuja el círculo blanco del centro


        ctx.beginPath();
        ctx.arc(centro, centro, centro-20, 0, 2 * Math.PI); 
        ctx.strokeStyle = 'white'; 
        ctx.lineWidth = 10; 
      
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; 
        ctx.shadowBlur = 0; 
        ctx.shadowOffsetX = 8; 
        ctx.shadowOffsetY = 8; 
        ctx.stroke(); // Dibuja sombra interior

        //////////////////////////////////
        ctx.beginPath();
        ctx.arc(centro, centro, centro-10, 0, 2 * Math.PI); 
        ctx.strokeStyle = '#dcdcdd'; 
        ctx.lineWidth = 15; 
      
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.stroke(); // Dibuja la ultima linea gris gruesa

        resolve(0);
    });

    };

    dibujarRueda();
  }, [getConcursantes]);
  
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConcursantes(event.target.value)
  };

  const manejarSorteo = () => {
    const concursantes = getConcursantes.split("\n").filter(item => item.trim() !== "");
    if(!concursantes[0]) return;
    const canva = canvasRef.current;
    if (!canva) return;
    if (estado !== "Sortear") return;

    setEstado("");
    setWave(false);



    // Generar un nuevo giro aleatorio entre 0 y 359 grados más una vuelta completa (360 grados)
    const gradosAdicionales = Math.floor(Math.random() * 360);  // 0 a 359 grados
    // Si hay una rotación previa almacenada, úsala, si no, empieza desde cero
    const rotacionActual = canva.dataset.rotacion ? parseInt(canva.dataset.rotacion) : 0;
    let nuevaRotacion = rotacionActual  + gradosAdicionales + 760; // Añade una vuelta completa
  

    canva.style.transform = `rotate(${270+nuevaRotacion}deg)`;
    canva.dataset.rotacion = nuevaRotacion.toString(); 
    setTimeout(() => {
       
        // Calcular el ángulo efectivo después de la rotación (normalizado a 360 grados)
        const anguloEfectivo = nuevaRotacion % 360;
        // Calcular el ángulo por concursante
        const anguloPorConcursante = 360 / concursantes.length;
        // Determinar el índice del ganador basado en el ángulo efectivo
        const indiceGanador = Math.floor((360 - anguloEfectivo) / anguloPorConcursante) % concursantes.length;

        setModalOpen(true); 
        setWin(concursantes[indiceGanador]); 
    
        setWave(true);
        setEstado("Sortear"); 
    }, 2000); // Tiempo de espera igual a la duración de la transición
};


  return (
    <>

        <Modal 
          children={win} 
          isOpen={isModalOpen} 
          onClose={() =>{
          setModalOpen(false);
          }} 
        >
        </Modal>

        <div className={`${styles.content}  my-32 mr-16 flex justify-center items-center ` }>
          <div onClick={manejarSorteo} className={`${styles.markwinner}`}></div>
          <div  style={{ display: wave ? 'block' : 'none' }} className={styles.wave}></div>
          <canvas onClick={manejarSorteo} ref={canvasRef} width="600" height="600"  className={`${styles.cavas}`}></canvas>
        </div>

          <div className='flex flex-col'>
            <button  style={{ margin: "60px 0 10px",color:"#333876",background:"#606be5"}} onClick={manejarSorteo} className='min-w-40 m-10 font-bold py-2 px-4 rounded'>  
              
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 70 70" className='m-auto h-6 w-6'>
                  <path id="Path" fill="currentColor" stroke="currentColor"  d="M 5.976074 66.314453 C 6.822388 66.314453 7.628052 66.167969 8.393066 65.875 C 9.158081 65.582031 9.947388 65.191406 10.76123 64.703125 L 54.706543 39.410156 C 56.496948 38.36853 57.733887 37.448853 58.41748 36.651367 C 59.101074 35.853882 59.442871 34.901733 59.442871 33.794922 C 59.442871 32.68811 59.101074 31.735962 58.41748 30.938477 C 57.733887 30.140991 56.496948 29.221313 54.706543 28.179688 L 10.76123 2.886719 C 9.947388 2.398438 9.158081 2.007813 8.393066 1.714844 C 7.628052 1.421875 6.822388 1.275391 5.976074 1.275391 C 4.446167 1.275391 3.233521 1.820679 2.338379 2.911133 C 1.443237 4.001587 0.995605 5.458374 0.995605 7.28125 L 0.995605 60.308594 C 0.995605 62.13147 1.443237 63.588257 2.338379 64.678711 C 3.233521 65.769165 4.446167 66.314453 5.976074 66.314453 Z"/>
            </svg>

            </button>
            <textarea  value={getConcursantes}  onChange={handleTextChange} placeholder={`Participant 1\nParticipant 2\nParticipant 3\n......`} className={`flex justify-center items-center ${styles.text}`}></textarea>
          </div>

    </>
    
  );
}; 



export default Wheel;