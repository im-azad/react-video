import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tags/tags";
import Pagination from "../ui/Pagination";

function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}

export default Home;
