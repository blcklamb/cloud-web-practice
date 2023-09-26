const COUNTRY = [
  { name: "swiss", extension: "png" },
  { name: "austria", extension: "png" },
  { name: "czech", extension: "png" },
  { name: "germany", extension: "jpg" },
  { name: "hungary", extension: "png" },
  { name: "canada", extension: "png" },
  { name: "america", extension: "png" },
  { name: "italy", extension: "png" },
  { name: "denmark", extension: "png" },
];
export const countryData = () =>
  COUNTRY.map((ele) => ({
    name: ele.name,
    src: `https://reactcyst.blob.core.windows.net/reactimgs/${ele.name}.${ele.extension}`,
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, quibusdam ipsam nulla iure aperiam quam corporis tenetur veniam consequatur vel officiis quod. Optio nobis vitae quidem similique minus quaerat odio?",
  }));
