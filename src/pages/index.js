import Hero from "@/layout/Hero";
import Layout from "@/layout/Layout";
import { createClient } from "contentful";
import About from "./about";
import SectionServices from "@/components/SectionServices";
import SectionResume from "@/components/SectionResume";
import SectionProjet from "@/components/SectionProjet";
import Newsletter from "@/components/Newsletter";
import SectionContact from "@/components/SectionContact";

export default function Home({ posts, dataNextjs }) {
  return (
    <Layout>
      <div className="">
        <Hero />
        <About />
        <SectionServices />
        <SectionResume />
        <SectionProjet posts={posts} />
        <Newsletter />
        <SectionContact />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Je récupére ma data en de sucess
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENT_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: "blogNextjs",
    order: "sys.createdAt",
    limit: 9,
  });
  
  const dataNextjs = await client.getEntries({
    content_type: "blogNextjs",
    order: "sys.createdAt",
    limit: 1,
    "metadata.tags.sys.id[all]": "nextjs, symfony",
  });
  // On envoie la data dans le props de la page

  return {
    props: {
      posts: data.items,
      dataNextjs: dataNextjs.items,
    },
  };
}
