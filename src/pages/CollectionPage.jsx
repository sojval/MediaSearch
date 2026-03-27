import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../Components/CollectionCard";
import NavBar from "../Components/NavBar";
import { clearCollection, clearToast } from "../redux/Features/CollectionSlice";

export default function CollectionPage() {
  const dispatch = useDispatch();
  const clearcollection = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };
  const collection = useSelector((state) => state.collection.items);
  return (
    <div>
      <NavBar />
      {collection.length > 0 ? (
        <div className="flex justify-between p-10">
          <h2 className="text-xl font-medium">Your Collection</h2>
          <button
            onClick={clearcollection}
            className="bg-red-600 active:scale-95 px-5 py-2 text-base font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-center text-xl mt-10">Collection is Empty!</h2>
      )}

      <div className="flex flex-wrap gap-6 overflow-auto p-10 px-15 justify-start py-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
