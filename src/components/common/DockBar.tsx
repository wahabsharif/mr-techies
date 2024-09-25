"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";

import ThemeToggle from "./ThemeToggle";

const dockItems = [
  { icon: <GoHomeFill />, title: "Home" },
  { icon: <TiDocumentText />, title: "Quotation" },
  { icon: <FaFileInvoiceDollar />, title: "Invoice" },
  { icon: <ThemeToggle /> },
];

const DockBar: React.FC = () => {
  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white dark:bg-black flex justify-around rounded-full items-center p-2
        w-80 md:w-96 lg:w-112 xl:w-128"
    >
      {dockItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.4 }}
        >
          <div className="text-xl md:text-2xl lg:text-3xl">{item.icon}</div>
          {item.title && (
            <span className="text-xs md:text-sm lg:text-base capitalize">
              {item.title}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default DockBar;
