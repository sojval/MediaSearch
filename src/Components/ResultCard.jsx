import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/Features/CollectionSlice";
const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCollectionAction = (item)=>{
    dispatch(addCollection(item))
    dispatch(addedToast())
  }
    
  return (
    <div className="w-80 h-80 bg-slate-400 relative rounded-xl overflow-hidden cursor-alias">
      <a target='_blank' className='h-full' href={item.url}>
        <div className="h-full">
        {item.type === "photo" && (
          <img
            src={item.src}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        )}

        {item.type === "video" && (
          <video
            autoPlay
            loop
            muted
            src={item.src}
            className="h-full w-full object-cover object-center"
          ></video>
        )}
        {item.type === "gif" && (
          <img
            src={item.src}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        )}
      </div>
      </a>

      <div className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white z-10">
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>
        <button onClick={(e) => {
            // ✅ VERY IMPORTANT
            addToCollectionAction(item);
          }} className="bg-indigo-600 text-white rounded px-3 py-1 font-medium cursor-pointer active:scale-95">
          Save
        </button>
      </div>
    </div>
  );
};
export default ResultCard;
