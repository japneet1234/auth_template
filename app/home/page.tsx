// import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 pt-24">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-6">
          Welcome to Code For Good
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl text-center mb-8">
          Empowering developers to build solutions for a better world. Collaborate, learn, and make an impact with our community-driven platform.
        </p>
        <div className="flex gap-4">
          <a
            href="#features"
            className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Explore Features
          </a>
          <a
            href="#community"
            className="px-6 py-3 rounded bg-white border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Join Community
          </a>
        </div>
        {/* Example sections */}
        <section id="features" className="mt-20 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Collaborative project spaces</li>
            <li>Learning resources and mentorship</li>
            <li>Impact tracking and recognition</li>
          </ul>
        </section>
        <section id="community" className="mt-16 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Community</h2>
          <p className="text-lg text-gray-700">
            Connect with like-minded developers, share your ideas, and work together to create meaningful change.
          </p>
        </section>
      </main>
    </>
  );
}