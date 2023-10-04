"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NoticeType() {
  const [noticeType, setNoticeType] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/noticeTypes"
      )
      .then((response) => {
        const data = response.data.noticeTypes;
        console.log("notice type", data);
        setNoticeType(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-white p-2">
        <table className="table-auto w-full">
          <thead
            className=" text-black font-bold text-3xl"
            style={{ border: "1px solid black", backgroundColor: "#41ffca" }}
          >
            <tr>
              <th
                className="text-black p-2 text-center"
                style={{ border: "1px solid black" }}
                colSpan="3" // Set colspan to cover 3 columns
              >
                Number of Eviction Notices
                <br />
                by Notice Type
              </th>
            </tr>
          </thead>
          <thead
            className="text-black"
            style={{ border: "1px solid black", backgroundColor: "#41ffca" }}
          >
            <tr>
              <th
                className="text-black p-2 text-left text-xl"
                style={{ border: "1px solid black" }}
              >
                Notice Type
              </th>
              <th
                className="text-black p-2 text-left text-xl"
                style={{ border: "1px solid black" }}
              >
                # of Eviction Notices
              </th>
              <th
                className="text-black p-2 text-xl"
                style={{ border: "1px solid black" }}
              >
                Pct.
              </th>
            </tr>
          </thead>
          <tbody className="text-black" style={{ border: "1px solid black" }}>
            {noticeType.map((row) => (
              <tr key={row.id}>
                <td
                  className="text-black p-2 font-bold text-xl"
                  style={{ border: "1px solid black" }}
                >
                  {row.noticeType}
                </td>
                <td
                  className='text-black p-2 text-xl'
                  style={{ border: "1px solid black" }}
                >
                  {row["#OfEvictionNotices"]}
                </td>
                <td
                  className='text-black p-2 text-right text-xl'
                  style={{ border: "1px solid black" }}
                >
                  {(row.pct * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}