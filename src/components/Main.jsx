import { useContext } from "react";
import { searchContext } from "../context/SearchContextProvider";
import Loading from "./loading/Loading";

const Post = ({ link, title }) => {
  return (
    <div className="bg-green-50-30 mb-5 overflow-hidden">
      <a
        className="dark:text-white font-thin text-sm overflow-hidden text-ellipsis"
        href={link}
      >
        <span>{link}</span>
        <h1 className="text-blue-400 font-normal text-xl hover:underline">
          {title}
        </h1>
      </a>
    </div>
  );
};

const Posts = ({ results }) => {
  return (
    <div className="result-div">
      {results.map((obj, idx) => (
        <Post key={idx} link={obj.url} title={obj.title} />
      ))}
    </div>
  );
};

const Image = ({ src, text }) => {
  return (
    <div>
      <img className="max-w-full" src={src} alt="img" />
      <p className="max-w-xs whitespace-nowrap text-ellipsis overflow-hidden">
        {text}
      </p>
    </div>
  );
};

const Images = ({ results }) => {
  return (
    <div className="p-5 grid grid-cols-3 xl:grid-cols-5 gap-5">
      {results.map((obj) => (
        <Image src={obj.url} text={obj.title} />
      ))}
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="result-div">
      <h1 className="uppercase text-2xl font-medium text-center mt-10 shadow-xl tracking-wider">
        Coming Soon
      </h1>
    </div>
  );
};

function Main({ currTab }) {
  const { results } = useContext(searchContext);

  if (results["isLoading"]) return <Loading />;
  switch (currTab) {
    case "all":
      return <Posts results={results.data} />;
    case "images":
      return <Images results={results.data} />;
    default:
      return <NotFound />;
  }
}

export default Main;
