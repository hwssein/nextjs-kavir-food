import FoodDetailsPage from "@/components/template/FoodDetailsPage";
import { getFoodDetails, getFoods } from "@/services/menuFood";

function FoodDetails({ foodDetails }) {
  return <FoodDetailsPage data={foodDetails} />;
}

const getStaticPaths = async () => {
  const data = await getFoods();
  const filterData = data.slice(0, 9);

  const paths = filterData.map((item) => ({
    params: {
      foodId: item.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

const getStaticProps = async (context) => {
  const { params } = context;

  const data = await getFoodDetails(params.foodId);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      foodDetails: data,
      revalidate: 60 * 60,
    },
  };
};
export default FoodDetails;

export { getStaticPaths, getStaticProps };
