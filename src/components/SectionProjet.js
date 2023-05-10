import React from "react";
import TitleSection from "./TitleSection";
import Projet from "./cards/projet/Projet";
import Menu from "./cards/projet/Menu";

export default function SectionProjet({ posts }) {
  console.log(posts);
  return (
    <section className="bg-[#151515]  " id="projet">
      <div className="">
        <TitleSection
          title="Projet"
          description="See my Works - Lorem ipsum dolor"
        />
      </div>
      <div className="container">
        <Menu />
        <div className="py-10 grid md:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.sys.id}
              className={
                post.fields.slug === "Mode"
                  ? "md:hidden xl:hidden lg:block"
                  : ""
              }
            >
              <Projet
                key={post.sys.id}
                slug={post.fields.slug}
                img={post.fields.featureImage.fields.file.url}
                createdAT={post.fields.createdAt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
