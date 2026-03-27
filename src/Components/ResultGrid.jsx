import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGifs } from "../API/MediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/Features/SearchSlice";
import { useEffect } from "react";
import ResultCard from "/src/Components/ResultCard.jsx";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results } = useSelector((store) => store.search);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading(true));

        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);

          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            thumbnail: item.urls.small,
            title: item.alt_description || "photo",
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchVideos(query);

          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab === "gifs") {
          const response = await fetchGifs(query);

          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            thumbnail: item.images.fixed_height_small.url,
            src: item.images.original.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (query) {
      getData();
    }
  }, [query, activeTab, dispatch]);

  return (
    <div className="flex flex-wrap gap-6 overflow-auto p-10 px-15 justify-center">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
              <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
