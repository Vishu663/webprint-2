import "./PrinterList.css";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { BsBriefcaseFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

export default function PrinterList() {
  const navigate = useNavigate();
  const [iconStates, setIconStates] = useState({
    dashboard: false,
    briefcase: false,
    printer: true,
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

  const handleJob = () => {
    navigate("/joblist");
  };

  const handleDashboard = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="print-main">
        <div className="sidebar">
          <div className="top-icons">
            <div onClick={handleDashboard}>
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
            <div>
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
        <div className="pr-dashboard">
          <div className="db-left">
            <div className="pr-section-1">
              <div className="headline">
                <h4>Recent Jobs</h4>
                <h4>View All</h4>
              </div>
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Printer ID</th>
                      <th>Status</th>
                      <th>Printing Status</th>
                      <th>Total Filament Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Printer-1</td>
                      <td>ID-1</td>
                      <td>Online</td>
                      <td>Free</td>
                      <td>990gm</td>
                    </tr>
                    <tr>
                      <td>Printer-2</td>
                      <td>ID-2</td>
                      <td>Offline</td>
                      <td>-</td>
                      <td>800gm</td>
                    </tr>
                    <tr>
                      <td>Printer-3</td>
                      <td>ID-3</td>
                      <td>Online</td>
                      <td>Free</td>
                      <td>750gm</td>
                    </tr>
                    <tr>
                      <td>Printer-4</td>
                      <td>ID-4</td>
                      <td>Online</td>
                      <td>Busy</td>
                      <td>600gm</td>
                    </tr>
                    <tr>
                      <td>Printer-5</td>
                      <td>ID-5</td>
                      <td>Offline</td>
                      <td>-</td>
                      <td>975gm</td>
                    </tr>
                    <tr>
                      <td>Printer-6</td>
                      <td>ID-6</td>
                      <td>Offline</td>
                      <td>-</td>
                      <td>990gm</td>
                    </tr>
                    <tr>
                      <td>Printer-7</td>
                      <td>ID-7</td>
                      <td>Online</td>
                      <td>Free</td>
                      <td>800gm</td>
                    </tr>
                    <tr>
                      <td>Printer-8</td>
                      <td>ID-8</td>
                      <td>Online</td>
                      <td>Free</td>
                      <td>550gm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pr-section-2" onClick={openModal}>
              <BsFillPrinterFill className="printer-icon" />
              <h3>Add Printer</h3>
              {isModalOpen && (
        <Modal
          onClose={closeModal}
          title="Create Job"
          label1={"Printer Name"}
          label2={"Printer Type"}
          pholder1={"Mention the printer name here"}
          pholder2={"Select the type of printer"}
          pholder3={"Select the printers for the job"}
          modalPlaceholder="Enter your text here" // Placeholder prop for input field in Modal
        />
      )}
            </div>
          </div>
          <div className="db-right">
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
}
