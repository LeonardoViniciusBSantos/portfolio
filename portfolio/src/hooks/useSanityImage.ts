import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const useSanityImage = (source: SanityImageSource) => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
  };

    return urlFor(source);
};
export default useSanityImage;
