import { useState, useEffect, createContext } from "react";

export const searchContext = createContext();

const SearchContextProvider = ({ children, currTab }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({
    isLoading: false,
    data: [],
    error: "",
  });

  useEffect(() => {
    async function getSearchResults() {
      if (currTab === "news" || currTab === "videos") return;

      setResults((value) => ({ ...value, isLoading: true }));
      const url = `https://google-search72.p.rapidapi.com/${
        currTab === "images" ? "imagesearch" : "search"
      }?q=${query}&gl=us&lr=lang_en&num=20&start=0`;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "799dd63172mshf1f812ae6d99e86p10e0b7jsn3b03fed6feff",
          "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setResults({
          isLoading: false,
          data: result.items.map((obj) => ({
            title: obj.title,
            url: currTab === "all" ? obj.link : obj.originalImageUrl,
          })),
          error: "",
        });
      } catch (error) {
        setResults({ isLoading: false, data: [], error: error.message });
      }
    }
    if (query.length) getSearchResults();
  }, [query, currTab]);

  const handleSearch = (q) => setQuery(q);

  return (
    <searchContext.Provider value={{ results, handleSearch }}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;
