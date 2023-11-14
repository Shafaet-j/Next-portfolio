import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { BsArrowRight } from "react-icons/bs";

const CardPortfolio = ({ singleData }) => {
  const { image, title, info, id, technology_used } = singleData;
  return (
    <Suspense
      fallback={
        <h1 className=" text-6xl text-red-700 text-center">Loading...</h1>
      }
    >
      <div
        className="card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
        data-aos="fade-up"
      >
        <h3 className="mb-3 text-xl gradient-text font-bold">{title}</h3>
        <p className="text-[#808DAD]">{info.slice(0, 80)}...</p>
        <ul className="flex items-center gap-1 flex-wrap">
          {technology_used.map((ele, ind) => (
            <span
              className={`${
                ind % 2 ? "bg-gray-800" : "bg-gray-700"
              }  px-3 py-1 rounded-md flex `}
            >
              {ele}
            </span>
          ))}
          {/* <li className="bg-gray-800 px-4 py-1 rounded text-[#808DAD] hover: duration-300">
            <a>Web UI-UX</a>
          </li>
          <li className="bg-gray-800 px-4 py-1 rounded text-[#808DAD] hover: duration-300">
            <a>UI-UX</a>
          </li>
          <li className="bg-gray-800 px-4 py-1 rounded text-[#808DAD] hover: duration-300">
            <a>Web</a>
          </li> */}
        </ul>
        <div className=" relative overflow-hidden">
          <div className="">
            <figure className="">
              <Image
                placeholder="blur"
                className=" hover:object-bottom h-72 object-top object-cover w-full duration-[4s] rounded-lg"
                alt="portfolio"
                blurDataURL="data:image/jpeg;base64,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s1FSs1bWbWdCs2lqVjVBNTWRoZ01RpWdVBpWNa1BqLKzFiDcajErUrWDcajEajSNRqMRqKNxYzFijcWMxYo3FjEagjSxmKo0rKg0rIDSsqCqyoKIAogD6rTWdNBrTWdNBdNTTQXTU01RdNZ00GtNZ00F01NNBdNTU0GtNZ01RdNZ00F01NTQXTU1NEXU1NNUXU1NTQXU01NBdTU1NBdTU1NUXWbTUtAtS0tZtAtS0tS0C1m0tS0EtS0tZtAtZtW1m0C1m0tZtArNLWbQKzS1mgVmlZtFSs1azaCVmrazaglYq1m0EtZtW1m1BKzVtYtRS1m0tZtZ0LWdLU1hV1E1NBoZ00g1q6zq6DWrKzqyoNStSsSrKyOkrUrnK1KuDcrUrErUrSNytSsSrK0NytSsStSqNStSsSrKI3FjMWVRvV1jV0G9XWNXQbGVBpWdNUaXWdNBrTWdXQXRNAfUaazpoNaazpoNaazpoNaazpoNamppoLprOmg1prOmg1prOmgums6ao1qampoNampqaI1qampqjWpqamgums6aC6mppoGmpqaC6zpqaoalprOgtqWpaloFqWlrNoLazaWs2gWpaWs2gWs2razaoWs2lrNoFrNpazaBazatrNqKlrNq2s2glrNW1i0EtZtW1m0EtZtW1i1BLWbVtYtQLWbS1m1FS1m0tZtY0LU1LUtSKums6mrBrTWdNIN6usaukG5V1iVZUg3K1K5ytSswblalYlWVB0lalc5WpWsR0lalc5WpWhuVqViVZVHSVZWJWpRG5V1iVdUb1dY1dBvV1nTVG9XWNXQa1dZ00GtXWdNBrTWdNBrRNAfT6azpoNaazpoNaazpoNaazpoNamppoLprOmg1prOmqNaazqaDWms6aDWprOmg1qampoNampqao1qampoNampqaIums6aC6mpqaoupqamgupalqWgWpalqWgtrNpaloFqWpalqhazaWpaBazaWs2gWpaWs2gWs2lrNoFrNpazaKWs2lrNqBazaWs2glrNq2sWgWs2lrNoJazaWs2oJazaWsWs6pazalrNrKrazalrNqwa1NYvpOliummufR0sHXVlculnpIjrK1K5StSswdJWpXOVZWYOsqyucrUrMHSVqVzlalXB0lalc5WpWkdJWpXOVqVRuVqVzlalUblWViVZRHTV1iVdUb1dY1dBrV1nTQb01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"
                src={image}
                width={500}
                height={400}
              />
              {/* <img src={image} alt="" /> */}
            </figure>
          </div>
          <Link href={`/portfolio/${id}`}>
            <button className="font-semibold text-2xl absolute -bottom-[55px] -right-[55px]  w-10 h-10 bg-[#5C27FE] group-hover:bottom-0 group-hover:right-0 duration-300 text-center rounded-tl-md hover:bg-[#171F38]  flex items-center justify-center">
              <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default CardPortfolio;
