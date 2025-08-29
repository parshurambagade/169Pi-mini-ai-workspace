import MemorySidebar from "./MemorySidebar";
import MainArea from "./MainArea";

const Body = () => {
  return (
    <section className="min-h-screen flex justify-center items-start">
      <div className="container w-full  m-8 grid grid-cols-12 gap-4 justify-center">
        <main className="col-span-9">
          <MainArea />
        </main>
        <aside className="col-span-3">
          <MemorySidebar />
        </aside>
      </div>
    </section>
  );
};

export default Body;
