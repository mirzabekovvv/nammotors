import React from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { DATA } from "../../static";
import Footer from "../../components/footer/Footer";
import Banner2 from '../../components/banner2/Banner2';
import Banner3 from '../../components/banner2/Banner3';
import Productt from '../../components/product/Productt';

function Home() {
  return (
    <div>
      <Banner />
      <Product data={DATA} />
      <Banner2/>
      <Productt data={DATA} />
      <Banner3/>
      <Footer />
    </div>
  );
}

export default Home;
