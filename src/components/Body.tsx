import MemorySidebar from "./MemorySidebar";
import MainArea from "./MainArea";

const Body = () => {
  return (
    <section className="min-h-screen flex justify-center items-start">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Mobile: Stack vertically, Tablet+: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Main content - Full width on mobile, 9/12 on desktop */}
          <main className="order-2 lg:order-1 lg:col-span-9">
            <MainArea />
          </main>
          {/* Sidebar - Full width on mobile, 3/12 on desktop */}
          <aside className="order-1 lg:order-2 lg:col-span-3">
            <MemorySidebar />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Body;
