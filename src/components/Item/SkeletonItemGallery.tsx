import { FC } from "react";
import LoaderWhite from "../UI/LoaderWhite";

const SkeletonItemGallery: FC = () => {
  return (
    <div className="gallery skeleton-item__gallery"><LoaderWhite/></div>
  );
};

export default SkeletonItemGallery;