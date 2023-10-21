import { useEffect, useState } from "react";

const Banner = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('https://automotive-server-o7fdubp9l-abdullah-al-rahmans-projects.vercel.app/brands')
      .then(res => res.json())
      .then(data => setBrands(data))
  }, [])

  return (
    <div className="mt-10">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={brands[1]?.image} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={brands[2]?.image} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={brands[3]?.image} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={brands[4]?.image} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Banner;