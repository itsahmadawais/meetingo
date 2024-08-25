import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className='w-2/3 mx-auto'>
        <div className="bg-primary h-32 rounded-lg p-10 text-center">
          <h2 className="font-bold text-5xl text-white">Super Charge Your Meetings!</h2>
        </div>
      </div>
    </div>
  );
}
