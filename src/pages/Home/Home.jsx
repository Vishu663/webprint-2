import "./Home.css";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { useContext, useRef, useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { VscTriangleLeft } from "react-icons/vsc";
import { VscTriangleRight } from "react-icons/vsc";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { getCurrentJobDetails } from "../../api/api";

export default function Home() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [iconStates, setIconStates] = useState({
    dashboard: true,
    briefcase: false,
    printer: false,
    groceryStore: false,
    settings: false,
    logout: false,
  });
  const handleIconClick = (icon) => {
    setIconStates((prevIconStates) => {
      const newIconStates = { ...prevIconStates };

      // Toggle the clicked icon
      newIconStates[icon] = !newIconStates[icon];

      // Deactivate other icons
      Object.keys(newIconStates).forEach((key) => {
        if (key !== icon) {
          newIconStates[key] = false;
        }
      });

      return newIconStates;
    });
  };

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    const details = await getCurrentJobDetails();
    if (details) {
      setJobDetails(details);
    }
  };

  const handleJob = () => {
    navigate("/joblist");
  };

  const handlePrint = () => {
    navigate("/printerlist");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="home-main">
        <div className="sidebar">
          <div className="top-icons">
            <div>
              <MdSpaceDashboard
                className={`side-icon ${iconStates.dashboard ? "active" : ""}`}
                onClick={() => handleIconClick("dashboard")}
              />
              <p>Dashboard</p>
            </div>
            <div onClick={handleJob}>
              <BsBriefcaseFill
                className={`side-icon ${iconStates.briefcase ? "active" : ""}`}
                onClick={() => handleIconClick("briefcase")}
              />
              <p>Job List</p>
            </div>
            <div onClick={handlePrint}>
              <BsFillPrinterFill
                className={`side-icon ${iconStates.printer ? "active" : ""}`}
                onClick={() => handleIconClick("printer")}
              />
              <p>Printer List</p>
            </div>
            <div>
              <MdOutlineLocalGroceryStore
                className={`side-icon ${
                  iconStates.groceryStore ? "active" : ""
                }`}
                onClick={() => handleIconClick("groceryStore")}
              />
              <p>Store</p>
            </div>
          </div>
          <div className="bottom-icons">
            <div>
              <IoIosSettings
                className={`side-icon ${iconStates.settings ? "active" : ""}`}
                onClick={() => handleIconClick("settings")}
              />
              <p>Settings</p>
            </div>
            <div onClick={handleLogout}>
              <IoLogOut
                className={`side-icon ${iconStates.logout ? "active" : ""}`}
                onClick={() => handleIconClick("logout")}
              />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="db-top">
            <h3>Hey {user}, Welcome to Webprint</h3>
            <FaUserCircle className="user-icon" />
          </div>
          <div className="db-bottom">
            <div className="db-bottom-left">
              <div className="section-cards">
                <div className="section-1">
                  <div className="section-box"></div>
                  <div className="section-box"></div>
                  <div className="section-box"></div>
                </div>
                <div className="section-2">
                  <div className="date">
                    <h3>{moment().format("MMMM, YYYY")}</h3>
                    <div className="button-container">
                      <button
                        onClick={() => {
                          handleHorizantalScroll(
                            elementRef.current,
                            25,
                            100,
                            -31
                          );
                        }}
                        disabled={arrowDisable}
                      >
                        <VscTriangleLeft className="arrow-icon" />
                      </button>
                      <button
                        onClick={() => {
                          handleHorizantalScroll(
                            elementRef.current,
                            25,
                            100,
                            31
                          );
                        }}
                      >
                        <VscTriangleRight className="arrow-icon" />
                      </button>
                    </div>
                  </div>
                  <div className="date-boxes" ref={elementRef}>
                    <Card ctype="card-third">
                      <div className="inside-box">{moment().format("ddd")}</div>
                      {moment().format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(1, "days").format("ddd")}
                      </div>
                      {moment().add(1, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(2, "days").format("ddd")}
                      </div>
                      {moment().add(2, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(3, "days").format("ddd")}
                      </div>
                      {moment().add(3, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(4, "days").format("ddd")}
                      </div>
                      {moment().add(4, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(5, "days").format("ddd")}
                      </div>
                      {moment().add(5, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(6, "days").format("ddd")}
                      </div>
                      {moment().add(6, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(7, "days").format("ddd")}
                      </div>
                      {moment().add(7, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(8, "days").format("ddd")}
                      </div>
                      {moment().add(8, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(9, "days").format("ddd")}
                      </div>
                      {moment().add(9, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(10, "days").format("ddd")}
                      </div>
                      {moment().add(10, "days").format("D")}
                    </Card>
                    <Card ctype="card-third">
                      <div className="inside-box">
                        {moment().add(11, "days").format("ddd")}
                      </div>
                      {moment().add(11, "days").format("D")}
                    </Card>
                  </div>
                </div>
              </div>
              <div className="section-3">
                <div className="headline">
                  <h4>Recent Jobs</h4>
                  <h4 onClick={handleJob}>View all</h4>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Job Name</th>
                        <th>Job ID</th>
                        <th>File Name</th>
                        <th>Filament used</th>
                        <th>Time required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobDetails.map((job) => (
                        <tr key={job.jobId}>
                          <td>{job.jobName}</td>
                          <td>{job.jobId}</td>
                          <td>{job.fileName}</td>
                          <td>{job.filamentUsed}</td>
                          <td>{job.timeRequired}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="db-bottom-right">
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
