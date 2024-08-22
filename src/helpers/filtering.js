const levelFilter = (data, level) => {
  if (!level) return data;

  const filteredData = data.filter((item) => {
    const levelResult = item.details.filter(
      (details) => details.Difficulty && details.Difficulty === level
    );

    return levelResult.length > 0;
  });

  return filteredData;
};

const timeFilter = (data, time) => {
  if (!time) return data;

  const filteredData = data.filter((item) => {
    const timeResult = item.details.filter((details) => {
      const timeDetails = details["Cooking Time"] || false;

      if (timeDetails) {
        const [cookingTime] = timeDetails.split(" ");

        if (time === "less" && +cookingTime <= 30) {
          return details;
        } else if (time === "more" && +cookingTime >= 30) {
          return details;
        } else {
          return false;
        }
      }
    });

    return timeResult.length > 0;
  });

  return filteredData;
};
export { levelFilter, timeFilter };
