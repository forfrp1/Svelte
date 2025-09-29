export const load = () => {
  const newsAPIkey = "YOUR_NEWS_API_KEY";
  console.log(newsAPIkey);

  const news = [
    { id: 1, title: "News 1" },
    { id: 2, title: "News 2" },
    { id: 3, title: "News 3" },
  ];
  return { news };
};

