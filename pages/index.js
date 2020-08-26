import Head from "next/head";
import records from "../public/101.json";
import matchSorter from "match-sorter";
import { useState } from "react";

export default function Home() {
  const [filterValue, setFilterValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const filter = (value) => {
    const filtered = matchSorter(records, value, {
      keys: [
        { threshold: matchSorter.rankings.CONTAINS, key: "TAJUK PEROLEHAN" },
        { threshold: matchSorter.rankings.CONTAINS, key: "KEMENTERIAN" },
        { threshold: matchSorter.rankings.CONTAINS, key: "NAMA SYARIKAT" },
        { threshold: matchSorter.rankings.CONTAINS, key: "HARGA SETUJU" },
      ],
    });

    if (value !== "") {
      setFilterValue(value);
      setFilteredList(filtered);
    } else {
      setFilterValue("");
      setFilteredList([]);
    }
  };

  const currentList = filterValue !== "" ? filteredList : records;

  return (
    <div>
      <Head>
        <title>
          Senarai Projek Rundingan Terus Pakatan Harapan - Projek 101
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Senarai Projek Rundingan Terus Pakatan Harapan</title>
        <meta
          name="title"
          content="Senarai Projek Rundingan Terus Pakatan Harapan"
        />
        <meta
          name="description"
          content="Senarai kementerian yang mengeluarkan tender kerajaan secara rundingan terus bernilai RM6.61 bilion semasa pemerintahan Pakatan Harapan (PH)."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projek101.com/" />
        <meta
          property="og:title"
          content="Senarai Projek Rundingan Terus Pakatan Harapan"
        />
        <meta
          property="og:description"
          content="Senarai kementerian yang mengeluarkan tender kerajaan secara rundingan terus bernilai RM6.61 bilion semasa pemerintahan Pakatan Harapan (PH)."
        />
        <meta property="og:image" content="https://projek101.com/thumb.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projek101.com/" />
        <meta
          property="twitter:title"
          content="Senarai Projek Rundingan Terus Pakatan Harapan"
        />
        <meta
          property="twitter:description"
          content="Senarai kementerian yang mengeluarkan tender kerajaan secara rundingan terus bernilai RM6.61 bilion semasa pemerintahan Pakatan Harapan (PH)."
        />
        <meta
          property="twitter:image"
          content="https://projek101.com/thumb.png"
        ></meta>
      </Head>

      <div>
        <div className="upper">
          <h1>Projek 101</h1>
          <p>
            Senarai projek rundingan terus (RT) bernilai RM6.61 Bilion semasa
            pemerintahan Pakatan Harapan (PH).
          </p>
          <p>
            Sumber:{" "}
            <a
              href="https://www.facebook.com/tzafrulaziz/posts/172024864447268?__xts__[0]=68.ARDw2NkPysj0fClriSeGSD1frPQ-vVJX2gy3fLN7pEKIE-7-tF8rDDsxTWUMYzyAuh1nPvsIpNlKiZQo_rqgPI1Azw3Jm46BRzTuVQFXyybsSA9pViBDl0D-6sepjuT5imnQipXfPlP1wNUmolpuqsenKyvVLASKwehr33XiAXlEjQ1qb3mJTeIcGDBNAq4-vHNImkNwiiZL7s6krcONRgWG91OEsziMnUyHiYawFBmP9MkgBTjygiQNlVs7hIZ4kTkSZqLQt1VYzocXYoNS3024lp-W7cDkbHmK8XSj-CQn4d1JheO0A1zRIZ0NEZ2dCqJ7iE-97iwTWRpGtQw&__tn__=H-R"
              target="_blank"
            >
              Tengku Zafrul
            </a>
          </p>
          <p>
            Download:{" "}
            <a href="/101.json" download>
              JSON
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/101.csv" download>
              CSV
            </a>
          </p>

          <input
            type="search"
            placeholder="Carian / Filter / Find"
            value={filterValue}
            onChange={(e) => filter(e.target.value)}
          />
        </div>

        {currentList.map((rec, index) => (
          <div key={index} className="record">
            <h3>
              {index + 1}. {rec["TAJUK PEROLEHAN"]}
            </h3>
            <span className="kementerian">{rec["KEMENTERIAN"]}</span>
            <span>Syarikat: {rec["NAMA SYARIKAT"]}</span>
            <span>Amaun: RM {rec["HARGA SETUJU"]}</span>
          </div>
        ))}
      </div>

      <p className="credit">
        Disediakan oleh:{" "}
        <a href="https://twitter.com/luqmanrasa" target="_blank">
          Man Sarip
        </a>
        <br />
        Source code :{" "}
        <a href="https://github.com/mansarip/projek101" target="_blank">
          Github
        </a>
      </p>
    </div>
  );
}
