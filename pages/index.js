import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>First-app</title>
      </Head>
      <div>
        <Image
          className="justify-center text-center m-auto"
          width={1000}
          height={1000}
          src="/home.avif"
          alt=""
        />
      </div>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
              <div class="sm:w-1/2 mb-10 px-4">
                <div class="rounded-lg h-64 overflow-hidden">
                  <Image
                    alt="content"
                    width={2000}
                    height={500}
                    class=" object-cover object-center h-full w-full"
                    src="/profile.jpg"
                  />
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Buy YouTube Videos
                </h2>
                <p class="leading-relaxed text-base">
                  Williamsburg occupy sustainable snackwave gochujang. Pinterest
                  cornhole brunch, slow-carb neutra irony.
                </p>
                <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
              <div class="sm:w-1/2 mb-10 px-4">
                <div class="rounded-lg h-64 overflow-hidden">
                  <Image
                    alt="content"
                    width={1000}
                    height={500}
                    class="object-cover object-center h-full w-full"
                    src="/gul.jpg"
                  />
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  The Catalyzer
                </h2>
                <p class="leading-relaxed text-base">
                  Williamsburg occupy sustainable snackwave gochujang. Pinterest
                  cornhole brunch, slow-carb neutra irony.
                </p>
                <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <Image width={1000} height={500} alt="content" class=" object-center h-full w-full" src="/profile.jpg"/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </>
  );
}
