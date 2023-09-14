const customerDataKey = ["id", "name", "memberLv", "point"];
const memberLv = ["basic", "royal", "gold", "platinum"];
const customerCount = 10;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
};

const fetchNames = (
  nameType = Math.round(Math.random()) ? "male" : "female"
) => {
  return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
};

const pickRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const generateName = async () => {
  try {
    const response = await Promise.all([
      fetchNames("male"),
      fetchNames("female"),
    ]);
    const [male, female] = await response;
    const nameList = male.data.concat(female.data);

    const customerInfo = Array.from({ length: customerCount }, (_, idx) => {
      return {
        [customerDataKey[0]]: idx,
        [customerDataKey[1]]: pickRandom(nameList),
        [customerDataKey[2]]: pickRandom(memberLv),
        [customerDataKey[3]]: Math.floor(Math.random() * 1000),
      };
    });
    console.log(customerInfo);
  } catch (error) {
    console.log("Unable tp generate name:", error);
  }
};

generateName();
