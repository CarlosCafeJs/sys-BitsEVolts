import Marquee from "react-fast-marquee";


const SubHeader = () => {
  return (
    <header>
      <div className="w-full flex justify-center">
        <div className="w-full overflow-hidden  bg-gray-900 text-amber-50 py-2">
          <div className="border-y-1 border-amber-50">

            <Marquee speed={100}>
              <ul className="flex w-full gap-6">
                <li className="cursor-pointer">iPhone</li>
                <li className="cursor-pointer">•</li>
                <li className="cursor-pointer">Promoções</li>
                <li className="cursor-pointer">•</li>
                <li className="cursor-pointer">Xiaomi</li>
                <li className="cursor-pointer">•</li>
                <li className="cursor-pointer">Promoções</li>
                <li className="cursor-pointer">•</li>
                <li className="cursor-pointer">Ofertas Relâmpago</li>
              </ul>
            </Marquee>
          </div>
        </div>

      </div>

    </header >
  );
}




export default SubHeader;