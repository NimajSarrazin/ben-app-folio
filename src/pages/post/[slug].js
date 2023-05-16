import Layout from "@/layout/Layout";
import { createClient } from "contentful";
import React from "react";
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
  const { title, featureImage, content, createdAt } = post.fields;
  return (
    <Layout>
      <div className="container md:py-40 sm:py-6 p-4 block lg:flex lg:space-x-6">
        <CardPost
          title={title}
          content={content}
          url_img={featureImage.fields.file.url}
          createdAt={createdAt}
        />
        <div></div>
        {/* <CardAsidePost /> */}
      </div>
    </Layout>
  );
}