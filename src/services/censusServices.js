export const getPopulationDataSex = async (stateFips) => {
  const res = await fetch(
    `https://api.census.gov/data/2019/acs/acs5?get=NAME,B01001_001E,B01001_002E,B01001_026E&for=state:${stateFips}&key=b0b80b91936ea856b92e63ea533ed94fa0ae6f2c`
  );
  return await res.json();
};
