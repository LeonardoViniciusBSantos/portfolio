import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity";

const useSanityImage = (source: any) => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source: any) => {
    return builder.image(source);
  };

  return urlFor(source).url();
};

export default useSanityImage;
