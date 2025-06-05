'use client';
import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

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
    <div className="flex flex-col relative bg-gray-950/80 text-amber-50 justify-center items-center min-w-89 max-w-94 min-h-86 rounded-2xl">
      <div className="p-2  cursor-pointer  m-2 rounded-2xl flex bg-[#383838] gap-12 absolute top-0">
        <h1>Poco X7 Pro</h1>
        <div className="bg-[#00B3FF] border-1 rounded-2xl">
          <svg className="rotate-135" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
        </div>
      </div>

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
    </div>
  );
};

export default Card;
