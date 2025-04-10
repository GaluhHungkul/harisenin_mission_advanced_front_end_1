const dataDefault = ["/assets/img/home/2/card/card1.png","/assets/img/home/2/card/card2.png","/assets/img/home/2/card/card3.png","/assets/img/home/2/card/card4.png","/assets/img/home/2/card/card5.png","/assets/img/home/3/card/card1.png","/assets/img/home/3/card/card2.png","/assets/img/home/3/card/card3.png","/assets/img/home/3/card/card4.png","/assets/img/home/3/card/card5.png","/assets/img/home/4/card/card1.png","/assets/img/home/4/card/card2.png"]

const DaftarMovie = ({data = dataDefault, length = data.length} : { data? : string[], length? : number }) => {

  const dataSliced = data.slice(0,length)

  return (
    <div className="grid grid-cols-3 gap-4 lg:gap-y-8 lg:grid-cols-6 ">
        {dataSliced.map((movie, index) => (
            <section key={index} className={`relative flex items-end justify-between p-4 bg-cover bg-no-repeat bg-center text-white rounded  w-24 h-36 lg:w-[200px] lg:h-[300px] group`} style={{ backgroundImage : `url(${movie})` }} ></section>
        ))}
    </div>
  )
}

export default DaftarMovie