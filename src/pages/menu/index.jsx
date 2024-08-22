import MenuPage from "@/components/template/MenuPage";
import { getFoods } from "@/services/menuFood";
import React from "react";

function Menu({ foodData }) {
  return (
    <>
      <MenuPage foodData={foodData} />
    </>
  );
}

const getStaticProps = async () => {
  const data = await getFoods();

  return {
    props: {
      foodData: data,
      revalidate: 60 * 60,
    },
  };
};

export default Menu;
export { getStaticProps };
