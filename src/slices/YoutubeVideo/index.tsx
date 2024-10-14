import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `YoutubeVideo`.
 */
export type YoutubeVideoProps = SliceComponentProps<Content.YoutubeVideoSlice>;

/**
 * Component for "YoutubeVideo" Slices.
 */
const YoutubeVideo = ({ slice }: YoutubeVideoProps): JSX.Element => {
  return (
    <PrismicNextLink field={slice.primary.youtube_link} />
  );
};

export default YoutubeVideo;
