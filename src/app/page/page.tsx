"use client";

import { Button, DatePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
const { RangePicker } = DatePicker;

const data = [
  {
    name: "amraa1",
    startDate: "2024-07-05",
    endDate: "2024-07-06",
  },
  {
    name: "amraa2",
    startDate: "2024-07-07",
    endDate: "2024-07-20",
  },
  {
    name: "amraa4",
    startDate: "2024-08-10",
    endDate: "2024-08-20",
  },
];
const Dashboard = () => {
  const [date, setDate] = useState<string[]>();

  const onRangeChange = (dates: any, dateStrings: string[]) => {
    setDate(dateStrings);
  };

  const btn = () => {
    if (date && date.length === 2) {
      const startDateRange = date[0];
      const endDateRange = date[1];

      // Function to check if a date is within any booked interval
      const isDateBooked = (checkDate: string) => {
        return data.some((item: any) => {
          const startDate = item.startDate;
          const endDate = item.endDate;

          // Check if the checkDate falls within any booked interval
          return checkDate >= startDate && checkDate <= endDate;
        });
      };

      // Iterate through each date in the range to check if any are booked
      let isBooked = false;
      let currentDate = moment(startDateRange);
      const endDate = moment(endDateRange);

      while (currentDate <= endDate) {
        const checkDate = currentDate.format("YYYY-MM-DD");
        if (isDateBooked(checkDate)) {
          isBooked = true;
          break;
        }
        currentDate.add(1, "day");
      }

      if (isBooked) {
        console.log("Selected date range contains booked dates.");
        // Handle accordingly, e.g., show a message or disable further actions
      } else {
        console.log("Selected date range is available.");
        // Proceed with your logic for an available date range
      }
    } else {
      console.warn("Invalid date range selected.");
    }
  };
  return (
    <div className="m-52">
      <RangePicker onChange={onRangeChange} />
      <Button onClick={btn}>check</Button>
    </div>
  );
};
export default Dashboard;
