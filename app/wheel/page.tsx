"use client"

import React, { useRef, useEffect,useState} from 'react';
import styles from './wheel.module.css';
import Modal from '../components/Modal';

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

const Roulette = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [estado, setEstado] = useState('Sortear');
  const [wave, setWave] = useState(true); 
  const [getConcursantes, setConcursantes] = useState('');
  const [isReady, setIsReady] = useState(false);
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
        const concursantes = getConcursantes.split("\n");
      
          // Código que realiza alguna tarea y luego llama a resolve
          

        
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

    const result = dibujarRueda();
    if (result) {
        result.then(() => {
            setIsReady(true);
        });
    }

  }, [getConcursantes]);
  
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConcursantes(event.target.value)
  };

  const manejarSorteo = () => {
    const concursantes = getConcursantes.split("\n");
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
      <div style={{ opacity: isReady ? '1' : '0' }}  className={` flex-wrap flex justify-center items-center ${styles.container} `}> 

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
          <textarea  value={getConcursantes}  onChange={handleTextChange} placeholder="Participant 1      Participant 2        Participant 3               ......" className={`flex justify-center items-center ${styles.text}`}></textarea>


          <div className='bg-neutral-50 text-xl m-20 p-5 rounded'>
            <p className='mb-4'>
            The web roulette wheel has become a fascinating tool for online events, where chance plays a key role in the selection of candidates. By incorporating a random system, this type of digital tool allows a participant to be chosen randomly, adding an element of suspense and excitement to the experience. The implementation of various colors in the roulette wheel not only enhances the visual aesthetics but also facilitates quick identification of the winners. Each spin of the roulette wheel generates anticipation among the participants, as they watch the number selected at random, keeping the audience engaged and expectant, which is key to the success of any interactive online activity.</p>
          </div>

      </div>
      
    </>
    
  );
}; 



export default Roulette;