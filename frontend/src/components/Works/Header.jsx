
export default function Home() {
    return (
      <div className="relative w-full h-screen overflow-hidden mb-12">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/assets/banner/image7.jpg')" }}
        ></div>
        <div className="absolute inset-x-0 top-20 text-center">
          <h1 className="text-white text-4xl font-bold mt-20">MEP</h1>
          <hr className="mx-auto mt-2 w-20 border-t-4 border-yellow-500" />
        </div>
      </div>
    );
  }
  