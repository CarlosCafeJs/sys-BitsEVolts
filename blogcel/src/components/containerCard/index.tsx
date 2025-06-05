import Card from "@/components/card/index"

const ContainerCard = () => {
  return (
    <div className="max-w-1200  gap-2 p-12 min-h-5 ">
      <div className="mx-auto flex flex-wrap w-full justify-center items-center  gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}


export default ContainerCard;