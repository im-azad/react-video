import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import RelatedVideoList from "../components/video-list/RelatedVideoList";
import Player from "../components/video/Player";
import VideoDescription from "../components/video/VideoDescription";

function Video() {
  return (
    <div>
      <Navbar />
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />

              <VideoDescription />
            </div>
            <RelatedVideoList/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Video;
