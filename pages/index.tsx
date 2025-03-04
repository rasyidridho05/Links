import { NextPage } from "next";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Particle from "@/components/particle";

const Index: NextPage = () => {
  return (
    <>
      <main className="w-screen flex flex-col justify-center items-center my-12">
        <div className="bg-white bg-opacity-20 container max-w-screen-lg py-4 rounded-2xl w-fit md:w-full px-4 md:px-0">
          <Content />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
