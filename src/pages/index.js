import Hero from "@/layout/Hero";
import Layout from "@/layout/Layout";
import { createClient } from "contentful";
import About from "./about";

export default function Home() {
  return <Layout>
      <Hero/>
      <About/>
  </Layout>;
}

export async function getStaticProps() {
  // Je récupére ma data en de sucess
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENT_ACCESS_TOKEN,
  });
  const data = await client.getEntries({
    content_type: "benFolio",
    order: "sys.createdAt",
    limit: 9,
  });
  // On envoie la data dans le props de la page

  return {
    props: {
      posts: data.items,
    },
  };
}
