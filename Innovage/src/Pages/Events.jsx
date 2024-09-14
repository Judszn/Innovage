import React from "react";
// import "../Events.js";
import "../Events.css";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Events() {
  return (
    <div className="body mt-[5vh] pt-[5vh]  ">
      <div className="border">
        <div className="text-white absolute top-[5%] left-[3%]">
          <h1 className=" text-4xl font-semibold">Events</h1>
          <div>
            <ul className="w-[200px] h-fit mt-5  pl-2 pt-5 pb-5 pr-10  bg-[#be185d] rounded-md text-xl">
              <li className=" border-b m-3">Bookings</li>
              <li className="border-b m-3">Networks</li>
              <li className="border-b m-3">Events</li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-[5%] left-[3%] text-white text-xl">
          <div className="cursor-pointer">
            <ul className="w-[200px] h-fit mt-5  pl-2 pt-5 pb-5 pr-10  bg-[#be185d] rounded-md text-xl">
              <li className="flex justify-between items-center w-full  m-3 ">
                Sign Up <FaSignInAlt />
              </li>
              <li className="flex justify-between  items-center w-full  m-3">
                Login <FaShare />
              </li>
              <li className="flex justify-between  items-center w-full  m-3">
                Exits <FaSignOutAlt />
              </li>
              <li className="flex justify-between  items-center w-full  m-3">
                Settings <IoSettingsOutline />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="left">
          <div className="calendar">
            <div className="month">
              <i className="fas fa-angle-left prev"></i>
              <div className="date">december 2016</div>
              <i className="fas fa-angle-right next"></i>
            </div>
            <div className="weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="days">
              <div className="day">30</div>
              <div className="day">31</div>
              <div className="day">1</div>
              <div className="day">2</div>
              <div className="day">3</div>
              <div className="day">4</div>
              <div className="day">5</div>
              <div className="day">6</div>
              <div className="day">7</div>
              <div className="day">8</div>
              <div className="day">9</div>

              <div className="day active">10</div>
              <div className="day">11</div>
              <div className="day">12</div>
              <div className="day">13</div>
              <div className="day">14</div>

              <div className="day">15</div>
              <div className="day">16</div>
              <div className="day">17</div>
              <div className="day">18</div>
              <div className="day">19</div>
              <div className="day">20</div>
              <div className="day">21</div>
              <div className="day">22</div>
              <div className="day">23</div>

              <div className="day">24</div>

              <div className="day">25</div>

              <div className="day">26</div>

              <div className="day">27</div>

              <div className="day">29</div>

              <div className="day">30</div>
              <div className="day">1</div>
              <div className="day">2</div>
              <div className="day event">3</div>
              <div className="day">4</div>
            </div>
            <div className="goto-today">
              <div className="goto">
                <input
                  type="text"
                  placeholder="mm/yyyy"
                  className="date-input"
                />
                <button className="goto-btn">Go</button>
              </div>
              <button className="today-btn">Today</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="today-date">
            <div className="event-day">wed</div>
            <div className="event-date">12th december 2022</div>
          </div>
          <div className="events"></div>
          <div className="add-event-wrapper">
            <div className="add-event-header">
              <div className="title">Add Event</div>
              <i className="fas fa-times close"></i>
            </div>
            <div className="add-event-body">
              <div className="add-event-input">
                <input
                  type="text"
                  placeholder="Event Name"
                  className="event-name"
                />
              </div>
              <div className="add-event-input">
                <input
                  type="text"
                  placeholder="Event Time From"
                  className="event-time-from"
                />
              </div>
              <div className="add-event-input">
                <input
                  type="text"
                  placeholder="Event Time To"
                  className="event-time-to"
                />
              </div>
            </div>
            <div className="add-event-footer">
              <button className="add-event-btn">Add Event</button>
            </div>
          </div>
        </div>
        <button className="add-event">
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <script src="Events.js"></script>
    </div>
  );
}

export default Events;
