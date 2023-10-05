"use client";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import Link from "next/link";
import NoticesByCd from "@/components/NoticesByCd";
import NoticesByMonth from "@/components/NoticesByMonth";
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
            <div>
              <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTwkKXHVAsJjGwuEuzY7ILdmYtN_rCmZZsxjECdHK8kG1jGEMjpDa0VWR1UFy97vTNlgtfyysbDYQJL/pubhtml" passHref target="_blank">
                <button
                  className="text-black font-bold py-2 px-4 rounded mb-4"
                  style={{
                    backgroundColor: "#41ffca",
                  }}
                >
                  Table Version
                </button>
              </Link>
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
              className="dark:text-white text-left"
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
              className="mb-16 dark:text-white text-left"
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
              <p className="mb-4 text-left">
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
              <div className="mb-4 text-left">
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
              <div className="mb-4 text-left">
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
                <li className="mb-4 text-left">
                  &bull; <b>August 1, 2023</b> – rent owed from March 1, 2020 to
                  August 31, 2020 is due. If the Declaration of COVID-19-Related
                  Financial Distress form was returned to the landlord within 15
                  days of rent being due, they cannot be evicted for nonpayment
                  of rent.
                </li>
                <li className="mb-4 text-left">
                  &bull; <b>February 1, 2024</b> – rent owed from October 1,
                  2021 to January 31, 2023 is due. If a tenant returned the
                  Declaration of COVID-19-Related Financial Distress form to the
                  landlord within 15 days of rent being due AND paid 25% of rent
                  owed from this period, they cannot be evicted for nonpayment
                  of rent.
                </li>
                <li className="mb-4 text-left">
                  &bull; However, since <b>March 27, 2023</b>, landlords may not
                  evict a tenant who falls behind in rent unless the tenant owes
                  an amount higher than the <b>Fair Market Rent (FMR)</b>. The
                  FMR depends on the bedroom size of the rental unit.
                </li>
                <li className="mb-4 text-left">
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
