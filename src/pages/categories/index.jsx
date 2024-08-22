import CategoriesPage from "@/components/template/CategoriesPage";
import { levelFilter, timeFilter } from "@/helpers/filtering";
import { getFoods } from "@/services/menuFood";

function Categories({ data }) {
  return (
    <>
      <CategoriesPage data={data} />
    </>
  );
}

const getServerSideProps = async (context) => {
  const { query } = context;

  let filterData = [];

  const data = await getFoods();

  if (query.level || query.time) {
    filterData = levelFilter(data, query.level);

    filterData = timeFilter(filterData, query.time);
  }

  return {
    props: {
      data: filterData,
    },
  };
};

export default Categories;
export { getServerSideProps };
