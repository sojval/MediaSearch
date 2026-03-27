import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/Features/SearchSlice";

const Tab = () => {
  const tabs = ["photos", "videos", "gifs"]
  const dispatch = useDispatch();
   const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function (ele, idx) {
        return (
          <button
            onClick={() => {
              dispatch(setActiveTab(ele));
            }}
            key={idx}
            className={` ${(activeTab == ele? 'bg-blue-700':'bg-gray-500')} transition px-5 py-2 rounded-2xl uppercase cursor-pointer active:scale-95`}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};
export default Tab;
