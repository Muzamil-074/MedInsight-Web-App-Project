import Header from '@/app/_components/Header'
import {  SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
   
<div>
  <Header/>
<section className="bg-[#050d15]">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="/back.png"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

  <div className="hidden lg:relative lg:block lg:p-12">
      <a className="block text-white" href="#">
  <span className="sr-only">Home</span>
  <img
    src="/logo6.png" // Replace with the actual path to your logo
    alt="Medicine Insight Logo"
    className="h-14 w-2/12" // Adjust the height and other styles as needed
  />
</a>
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to Medicine Insight
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        Welcome to Medicine Insights, your trusted source for comprehensive and accurate information about medicines. 
        Discover details, usage guidelines, and insights to make informed healthcare decisions
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-[#050d15] sm:size-20"
            href="#"
          >
            <img
    src="/logo6.png" // Replace with the actual path to your logo
    alt="Medicine Insight Logo"
    className="h-14 w-40" // Adjust the height and other styles as needed
  />
          </a>

          <h1 className="mt-8 text-xl font-bold text-white sm:text-3xl md:text-4xl text-center">
          Welcome to Medicine Insight
          </h1>
        </div>
      <SignUp/>
      </div>
    </main>
  </div>
</section>
</div>
  )
}
