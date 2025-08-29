import MemorySidebar from "./MemorySidebar";
import MainArea from "./MainArea";

const Body = () => {
  return (
    <section className="min-h-screen flex justify-center items-start bg-accent">
      <div className="container w-full  m-8 grid grid-cols-12 gap-4 justify-center">
        <aside className="col-span-3 border">
          <MemorySidebar />
        </aside>
        <main className="col-span-9">
          <MainArea />
        </main>
      </div>
    </section>
  );
};

export default Body;
