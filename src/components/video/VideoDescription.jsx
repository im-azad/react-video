import { useSelector } from "react-redux";
import LikeUnlike from "./LikeUnlike";

function VideoDescription() {
  const { video } = useSelector((state) => state.video);
  const { title, date, description, likes, unlikes } = video;

  return (
    <div className="text-left">
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        <LikeUnlike videoLike={likes} videoUnlike={unlikes} />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400 mb-6">
        {description}
      </div>
    </div>
  );
}

export default VideoDescription;
