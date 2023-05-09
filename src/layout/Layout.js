import Navbar from "@/components/navbar/Navbar";


export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
