import React, { useState } from "react";
import Layout from "@/layout/Layout";
import { createClient } from "contentful";
import CardAsidePost from "@/components/cards/CardAsidePost";
import CardPost from "@/components/cards/CardPost";

// Connect to contentful
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENT_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  // Get blogNextjs content type entries from Contentful
  const res = await client.getEntries({
    content_type: "blogNextjs",
  });

  // Map over the entries and return an array of params objects
  const slugs = res.items.map((slug) => {
    return {
      params: { slug: slug.fields.slug },
    };
  });

  // Return the paths object
  return {
    paths: slugs,
    fallback: false,
  };
}

// récuperer la data du post
export async function getStaticProps({ params }) {
  // je récupere la data
  const res = await client.getEntries({
    content_type: "blogNextjs",
    "fields.slug": params.slug,
  });

  // je stock la data du post dans une varaible

  const post = res.items;

  return {
    props: {
      post: post[0],
    },
  };
}

export default function Index({ post }) {
  const { title, featureImage, content, createdAt, projetImg, stack } =
    post.fields;

  const [selectedImage, setSelectedImage] = useState(null);
  // État pour stocker l'image sélectionnée

  return (
    <Layout>
      <div className="bg-slate-300">
        <div className="container  md:pt-40 sm:py-6 p-4  lg:flex lg:space-x-6">
          <CardPost
            title={title}
            content={content}
            stack={stack}
            url_img={featureImage.fields.file.url}
            createdAt={createdAt}
          />
        </div>
        <div className="container flex pb-20">
          {projetImg.map((image, index) => (
            <img
              className="overflow-hidden h-auto w-24 md:w-1/3 cursor-pointer scale-90"
              key={index}
              src={image.fields.file.url}
              alt={image.fields.title}
              onClick={() => setSelectedImage(image.fields.file.url)} // Mettre à jour l'image sélectionnée
            />
          ))}
        </div>
        {selectedImage && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black">
            <button
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              onClick={() => setSelectedImage(null)} // Fermer l'image
            >
              X
            </button>
            <img
              className="max-h-full max-w-full"
              src={selectedImage}
              alt="Selected Image"
            />
          </div>
        )}
        {/* <CardAsidePost post={post} /> */}
      </div>
    </Layout>
  );
}
