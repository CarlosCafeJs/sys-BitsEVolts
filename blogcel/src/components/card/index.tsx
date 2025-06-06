'use client';
import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import GradientHoverCard from '@/components/gradienteHover/index';
import RotatingDiv from '@/components/rotateDiv/index';

// Tipagem dos props
interface SwipeCardProps {
  frontCard: boolean;
  index?: number;
  setIndex?: React.Dispatch<React.SetStateAction<number>>;
  drag?: boolean | "x" | "y";
  imgSrc: string;
}

function SwipeCard({ frontCard, index, setIndex, drag, imgSrc }: SwipeCardProps) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], { clamp: false });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: any) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 }
    })
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 }
  };

  function handleDragEnd(_: any, info: any) {
    if (info.offset.x < -100 || info.offset.x > 100) {
      setExitX(info.offset.x < 0 ? -250 : 250);
      if (setIndex && typeof index === 'number') {
        setIndex((prev) => prev + 1);
      }
    }
  }

  return (

    <motion.div
      style={{
        width: 180,
        height: 200,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab"
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          width: 180,
          height: 200,
          borderRadius: 12,
          overflow: "hidden",
          scale
        }}
      >
        <Image
          src={imgSrc}
          alt="Foto Celular"
          width={180}
          height={200}
          style={{ objectFit: "cover", borderRadius: 12, }}
          draggable={false} // Impede que a imagem seja arrastada diretamente
        />
      </motion.div>
    </motion.div>
  );
}

const Card = () => {
  const [index, setIndex] = useState(0);

  // Array de imagens (adicione quantas quiser)
  const imagens = [
    "/poco-costa-uno.avif",
    "/poco-frente-duo.avif",
    "/poco-frente-uno.avif"
  ];

  // Evita estouro do array
  const frontImage = imagens[index % imagens.length];
  const backImage = imagens[(index + 1) % imagens.length];

  return (
    <div >
      <GradientHoverCard >


        <div>
          <RotatingDiv>
            <motion.div style={{ width: 180, height: 200, position: "relative" }}>
              <AnimatePresence initial={false}>
                <SwipeCard key={index + 1} frontCard={false} imgSrc={backImage} />
                <SwipeCard
                  key={index}
                  frontCard={true}
                  index={index}
                  setIndex={setIndex}
                  drag="x"
                  imgSrc={frontImage}
                />
              </AnimatePresence>
            </motion.div>
          </RotatingDiv>
        </div>
        <div className="flex py-1 px-4 items-center cursor-pointer m-4 rounded-3xl bg-[#00454A]/80 via-gray-900/90 to-gray-950/90 gap-6 absolute bottom-0">
          <h1>Poco X7 Pro</h1>
          <div><p>R$ 999.99</p></div>
          <div className="bg-[#00EEFF] border-1 border-[#1E1E1E] rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" className="fill-[#1E1E1E]" viewBox="0 -960 960 960" width="48" fill="#e3e3e3"><path d="M274.36-137q-24.3 0-40.83-16.53Q217-170.06 217-194.27v-412.96q0-24.21 16.53-40.74t41.05-16.53h72.92v-26q0-55.5 38.58-94 38.59-38.5 94-38.5 55.42 0 94.24 38.56 38.82 38.56 38.82 93.94v26h72.46q24.34 0 40.87 16.53Q743-631.44 743-607.23v412.96q0 24.21-16.53 40.74T685.64-137H274.36Zm.14-25.5h411q12 0 22-10t10-22V-607q0-12-10-22t-22-10H613v107q0 5.5-3.75 9.25T600-519q-5.5 0-9-3.75t-3.5-9.25v-107H373v107q0 5.5-3.75 9.25T360-519q-5.5 0-9-3.75t-3.5-9.25v-107h-73q-12 0-22 10t-10 22v412.5q0 12 10 22t22 10Zm98.5-502h214.5v-26q0-45.5-30.92-76.25-30.91-30.75-76.5-30.75-45.58 0-76.33 30.79Q373-735.91 373-690.5v26Zm-130.5 502V-639v476.5Z" /></svg>
          </div>

        </div>
      </GradientHoverCard >
    </div>
  );
};

export default Card;
