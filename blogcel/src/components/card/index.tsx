import Image from "next/image";

const Card = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-w-89 max-w-94 min-h-86 rounded-2xl">
        <div className="flex pt-12 cursor-pointer  relative justify-center items-center w-full h-[300px] bg-gray-950/80 rounded-2xl overflow-hidden">
          {/* Fundo - imagem mais atrás com blur */}
          <Image
            className="absolute z-0 rounded-2xl -translate-y-12 blur-[2px] scale-x-75 opacity-40  "
            src="/poco-costa-uno.avif"
            alt="img-phone-bg"
            width={220}
            height={300}
          />

          {/* Imagem intermediária */}
          <Image
            className=" absolute z-10 rounded-2xl rotate-4x scale-x-85 blur-[1px] opacity-50 -translate-y-10"
            src="/poco-frente-uno.avif"
            alt="img-phone-mid"
            width={220}
            height={300}
          />

          {/* Imagem da frente */}
          <Image
            className="absolute z-20  rounded-2xl -translate-y-8"
            src="/poco-frente-duo.avif"
            alt="img-phone-front"
            width={220}
            height={300}
          />
        </div>

        <div className="h-26 w-full ">
          <h1>Poco X7 Pro - 250gb</h1>
          <button>Call</button>
          <p className="">O Poco X7 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.67 polegadas com uma resolução de 2712x1220 pixels</p>
        </div>

      </div>
    </div>
  );
}

export default Card;