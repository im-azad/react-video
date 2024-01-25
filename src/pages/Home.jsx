import Footer from "../components/footer/Footer";
import VideoGrid from "../components/grid/VideoGrid";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/tags";
import Pagination from "../ui/Pagination";

function Home() {
  return (
    <div>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
