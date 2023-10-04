// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
"use client";
import { useEffect, useState } from "react";
import NoticesByCd from "@/components/NoticesByCd";
import NoticesByMonth from "@/components/NoticesByMonth";
import { MantineProvider } from "@mantine/core";
import Top20Zip from "@/components/Top20Zip";
import RentOwed from "@/components/RentOwed";
import FairMarketRent from "@/components/FairMarketRent";
import NoticeType from "@/components/NoticeType";

export default function Evictions() {
  const [monthNotices, setMonthNotices] = useState([]);

  useEffect(() => {
    let url =
      "https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/noticesByMonth";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.noticesByMonth);
        let notices = json.noticesByMonth;
        setMonthNotices(
          notices.map((x) => ({
            id: x.id,
            month: x.month,
            total: x.number,
          }))
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("month notices", monthNotices);

  return (
    <>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <main className="container mx-auto px-4 sm:container lg:max-w-3xl xl:max-w-4xl">
          <center>
            <div className="mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-0 lg:mx-auto lg:max-w-3xl xl:max-w-4xl">
              <h1 className="pt-8 pb-4 text-center dark:text-white font-bold text-3xl">
                Eviction Notices (February - August 2023)
              </h1>
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <h3 className="mb-12 font-bold text-2xl">
                <b>Summary and Analysis</b>
              </h3>
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <p className="mb-4">
                Last month, we said that there were nearly 40,000 eviction
                notices from February to July 2023 filed in the City of LA. We
                have received updated data from the Los Angeles Housing
                Department (LAHD) through the month of August 2023 and the data
                reveals that from February to August 2023, LAHD has received a
                total of <b>50,000</b> eviction notices. <b>5,575</b> notices
                were filed for the month of August and <b>4,748</b> are part of
                updated numbers for February to July from eviction notices
                received via mail.
              </p>
              <ul className="mb-10">
                <li>
                  &bull; <b>50,000 eviction notices were filed</b>
                </li>
                <li>
                  &bull;{" "}
                  <b>
                    96.1% of evictions notices were for "non-payment of rent"
                  </b>
                </li>
                <li>
                  &bull; <b>91% came with a 3-day notice</b>
                </li>
                <li>
                  &bull; <b>$186.5M accumulated rent owed</b>
                </li>
              </ul>
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <h4 className="mb-4 font-bold text-xl">
                <b>Number of Eviction Notices</b>
              </h4>
            </div>
            <div className="mb-16">
              {" "}
              <NoticesByMonth monthNotices={monthNotices} />
            </div>
          </center>
          <center>
            <div>
              <h4
                className="mb-4 dark:text-white font-bold text-xl"
                style={{ fontFamily: "Helvetica" }}
              >
                <b>Council District</b>
              </h4>
            </div>
            <div className="mb-16">
              {" "}
              <NoticesByCd />
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <h4 className="mb-4 dark:text-white font-bold text-xl">
                <b>Top 20 Zip Codes with highest number of eviction notices</b>
              </h4>
            </div>
            <div className="mb-12">
              {" "}
              <Top20Zip />
            </div>
            <div
              className="mb-16 dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <p className="mb-4">
                The table above shows the top 20 Zip Codes with the highest
                number of eviction notices filed with the City from February to
                August 2023.
              </p>
              <p className="mb-4">
                Units located within <b>90028</b> (Hollywood area) had the
                highest number of eviction notices filed with <b>3,585</b>{" "}
                followed by <b>90036</b> (Fairfax area) with <b>2,458</b>.
              </p>
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <h4 className="mb-4 dark:text-white font-bold text-xl">
                <b>Rent Owed</b>
              </h4>
              <p className="mb-4">
                The total amount of rent owed due to <b>Non-Payment of Rent</b>{" "}
                is <b>$186,491,100.99</b>.
              </p>
            </div>
            <div className="mb-16">
              {" "}
              <RentOwed />
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <h4 className="mb-4 dark:text-white font-bold text-xl">
                <b>Fair Market Rent</b>
              </h4>
              <div className="mb-4">
                <p className="mb-4">
                  The <b>Just Cause Ordinance (JCO)</b> contains a provision
                  where a landlord can evict a tenant only if the amount due{" "}
                  <u>exceeds</u> one month of fair market rent for the Los
                  Angeles metro area.
                </p>
                <p>
                  <b>6,062</b> eviction notices were filed where the amount of
                  rent owed is below the Fair Market Rent (FMR) Limit.
                </p>
              </div>
            </div>
            <div className="mb-16">
              {" "}
              <FairMarketRent />
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <h4 className="mb-4 dark:text-white font-bold text-xl">
                <b>Notice Types</b>
              </h4>
              <div className="mb-4">
                <p>
                  When served with an eviction, tenants are given a deadline to
                  either pay rent owed or move out ("pay or quit") or to fix an
                  issue or move out ("perform or quit"). Other notices will only
                  give a deadline to move out (such as 30-day notices).
                </p>
              </div>
            </div>
            <div className="mb-16">
              {" "}
              <NoticeType />
            </div>
            <div
              className="dark:text-white"
              style={{ fontFamily: "Helvetica" }}
            >
              <h4 className="mb-4 dark:text-white font-bold text-xl">
                <b>Tenant Protection Deadlines</b>
              </h4>
              <ul>
                <li className="mb-4">
                  &bull; <b>August 1, 2023</b> – rent owed from March 1, 2020 to
                  August 31, 2020 is due. If the Declaration of COVID-19-Related
                  Financial Distress form was returned to the landlord within 15
                  days of rent being due, they cannot be evicted for nonpayment
                  of rent.
                </li>
                <li className="mb-4">
                  &bull; <b>February 1, 2024</b> – rent owed from October 1,
                  2021 to January 31, 2023 is due. If a tenant returned the
                  Declaration of COVID-19-Related Financial Distress form to the
                  landlord within 15 days of rent being due AND paid 25% of rent
                  owed from this period, they cannot be evicted for nonpayment
                  of rent.
                </li>
                <li className="mb-4">
                  &bull; However, since <b>March 27, 2023</b>, landlords may not
                  evict a tenant who falls behind in rent unless the tenant owes
                  an amount higher than the <b>Fair Market Rent (FMR)</b>. The
                  FMR depends on the bedroom size of the rental unit.
                </li>
                <li className="mb-4">
                  &bull; If an eviction notice is not provided to LAHD, a tenant
                  may raise an affirmative defense in an Unlawful Detainer case.
                </li>
              </ul>
            </div>
          </center>
        </main>
      </MantineProvider>
    </>
  );
}
