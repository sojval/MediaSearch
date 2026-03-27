import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/Features/CollectionSlice";

function CollectionCard({ item }) {
  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <div className="w-80 h-80 bg-slate-400 relative rounded-xl overflow-hidden cursor-pointer">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        <div className="h-full">
          {item.type === "photo" && (
            <img src={item.src} className="h-full w-full object-cover" />
          )}

          {item.type === "video" && (
            <video
              autoPlay
              loop
              muted
              src={item.src}
              className="h-full w-full object-cover"
            />
          )}

          {item.type === "gif" && (
            <img src={item.src} className="h-full w-full object-cover" />
          )}
        </div>
      </a>

      <div className="flex justify-between items-center w-full px-4 py-4 absolute bottom-0 text-white z-10 bg-gradient-to-t from-black to-transparent">
        <h2 className="text-lg font-semibold h-14 overflow-hidden">
          {item.title}
        </h2>

        <button
          onClick={(e) => {
            e.preventDefault(); // stop link
            e.stopPropagation();
            removeFromCollection(item);
          }}
          className="bg-blue-600 px-3 py-1 rounded active:scale-95"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
