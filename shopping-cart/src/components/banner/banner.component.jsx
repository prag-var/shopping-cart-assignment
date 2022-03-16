import { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import axios from "axios";

import "./banner.styles.scss";

const Banner = () => {
  const [bannerList, setbannerList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get("http://localhost:5000/banners")
          .then((response) => setbannerList(response.data));
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="banner-container">
      <Carousel autoplay='true' speed={200}>
        {bannerList.map((banner) => (
          <div key={banner.id} className="carousel_img">
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
