import Banner from "../../components/banner/banner.component";
import CategoryCard from "../../components/category-card/category-card.component";

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <CategoryCard />
    </div>
  );
};

export default HomePage;
