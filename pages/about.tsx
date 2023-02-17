// import { NavbarSimple } from "../components/NavbarSimple";
// import HeaderSearch from "../components/HeaderSearch";
// import Axios from "axios";
// import TableSelection from "../components/TableSelection";
// import Navbar from "../components/Navbar";

// const About = ({ animalData }: any) => {
//   const links = [
//     {
//       link: "/about",
//       label: "Features",
//     },
//     {
//       link: "/pricing",
//       label: "Pricing",
//     },
//     {
//       link: "/learn",
//       label: "Learn",
//     },
//     {
//       link: "/community",
//       label: "Community",
//     },
//   ];
//   return (
//     <>
//       {/* <TableSelection data={animalData} /> */}
//       <NavbarSimple />
//       {/* <HeaderSearch links={links} /> */}
//       {/* <Navbar /> */}
//     </>
//   );
// };

// export const getStaticProps = async () => {
//   const data = await Axios.get("http://localhost:3000/api/animals");
//   return {
//     props: {
//       animalData: data.data,
//     },
//   };
// };

// export default About;
import React from "react";

const about = () => {
  return <div>about</div>;
};

export default about;
