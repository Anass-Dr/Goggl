import { useState } from "react";

const Tab = ({ imgSrc, text, onClick, isActive = false }) => {
  return (
    <div
      className={`flex items-center gap-1 pb-1 capitalize cursor-pointer ${
        isActive ? " active-tab" : ""
      }`}
      onClick={onClick}
    >
      <img className="w-5" src={imgSrc} alt="icon" />
      <span>{text}</span>
    </div>
  );
};

function Tabs({ handleTab }) {
  const tabs = [
    {
      name: "all",
      icon: "./images/search.svg",
    },
    {
      name: "news",
      icon: "./images/news.svg",
    },
    {
      name: "images",
      icon: "./images/camera.svg",
    },
    {
      name: "videos",
      icon: "./images/video.svg",
    },
  ];
  const [active, setActive] = useState(0);

  const handleClick = (i) => {
    setActive(i);
    handleTab(tabs[i].name);
  };

  return (
    <div className="flex justify-center sm:justify-start gap-8 sm:pl-48 text-black dark:text-white border-b dark:border-gray-700">
      {tabs.map((tab, idx) => (
        <Tab
          isActive={active === idx}
          key={idx}
          imgSrc={tab.icon}
          text={tab.name}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}

export default Tabs;
