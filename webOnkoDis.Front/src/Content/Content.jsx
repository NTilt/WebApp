import { Route, Routes } from "react-router-dom";
import Contacts from "../Components/Contacts/Contacts";
import Main from "../Main/Main";
import About from "../About/About";
import ForPatients from "../ForPatients/ForPatients";
import Reviews from "../Reviews/Reviews";
import Doctors from "../Doctor/Doctors";
import Admin from "../Admin/Admin";
import MainRight from "../MainRight/MainRight";

const Content = ({ homePost }) => {
  return (
    <div className="content">
      <Routes>
        {homePost === undefined ? (
          <Route path="/" element={<MainRight />} />
        ) : homePost.id % 2 == 0 ? (
          <Route path="/" element={<Main homePost={homePost} />} />
        ) : (
          <Route path="/" element={<MainRight homePost={homePost} />} />
        )}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/patients" element={<ForPatients />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Content;
