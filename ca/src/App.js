import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/carousel/Carousel";
import img2 from "./assets/carousel/data-analytics-seo-audit-ss-1920_obcjr7.jpg";
import img1 from "./assets/carousel/internal-audit-services-investcor.jpg";

export const Card = ({ svg, heading, desc }) => {
  const inner = svg;
  return (
    <div className="flex mx-2 px-4 pb-8 rounded-lg justify-center items-center transition duration-200 hover:shadow-xl transform hover:-translate-y-2 hover-scale-110">
      <div className="flex flex-col items-center justify-center">
        <inner />
        <p className="text-3xl font-semibold">{heading}</p>
        <p className=" pt-3 text-base font-normal text-center ">{desc}</p>
      </div>
    </div>
  );
};

function App() {
  const SliderData = [img1, img2];
  const cardData = [
    {
      heading: "Our Vision",
      desc:
        "Our firm continuously strives to be the Premier Accounting and Consultancy firm that provides excellent service to our clients and an excellent quality of life for our associates.",
    },
    {
      heading: "Our Mission",
      desc:
        "We will predominantly work with organisations in the charitable and voluntary sectors as partners to help them achieve their desired outcomes.",
    },
    {
      heading: "Our Objective",
      desc:
        "We are committed to creating and sustaining long-term relationships which drawn on our experience and expertise to help our clients achieve real success.",
    },
    {
      heading: "Excellence in Service",
      desc:
        "To not just meet but exceed client expectation consistently by imbibing Teamwork, Professionalism, Personalised Service & Specialisation.",
    },
  ];

  const comp = () => (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-20"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  );
  return (
    <div>
      <Navbar />
      <Carousel slides={SliderData} />
      <div className="flex flex-col items-center justify-center mx-1 mt-5 md:mt-10 p-3">
        <p className="text-2xl p-1 m-1 text-gray-400 font-semibold">
          Emirates Chartered Accountants Group
        </p>
        <p className="p-1 text-3xl m-1 text-center font-bold">
          AUDIT, TAX, ACCOUNTING & BUSINESS ADVISORY FIRM IN DUBAI, UAE.
        </p>
        <p className="p-1 m-1 text-lg text-center md:mt-5">
          Emirates Chartered Accountants & It's Associate Professional Firms
          (Emirates Chartered Accountants Group) are ISO 9001-2015 Certified
          International Chartered Accountants Firms founded in the year 2005 by
          a team of finance professionals. Headquartered in Dubai with its
          branches spread across the UAE in Abu Dhabi, Sheikh Zayed Road and
          Sharjah. We also have our branches in other parts of the world in the
          UK, Bahrain & India.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-4 w-100 pt-5">
        {cardData.map((item) => (
          <Card svg={comp} heading={item.heading} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}

export default App;
