"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SpinnerDemo from "./spinner-01";

type Template = {
  id: number;
  title: string;
  featured_image: string;
  custom_fields: {
    _template_paid?: string[];
    _template_price?: string[];
    _template_preview?: string[];
    _template_link?: string[];
  };
};

type ButtonsEvents = {
  labelOne: string;
  labelTwo: string;
  onClickOne?: () => void;
  onClickTwo?: () => void;
};

const Filters: React.FC = () => {
  const [postdata, setPostData] = useState<Template[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const apiUrl = "https://webcomponents.blog/wp-json/myplugin/v1/templates";

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        const response = await axios.get(apiUrl); 
        console.log("results", response);
        if (isMounted) {
          setPostData(response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const filters = [
    { label: "Hero's", apiCall: `${apiUrl}?category=hero` },
    { label: "Footers", apiCall: `${apiUrl}?category=footer` },
    { label: "FAQs", apiCall: `${apiUrl}?category=faqs` },
    { label: "ChatBots", apiCall: `${apiUrl}?category=chatbot` },
    { label: "Cta's", apiCall: `${apiUrl}?category=ctas` },
    { label: "Dashboards", apiCall: `${apiUrl}?category=dashboards` },
    { label: "Pricing", apiCall: `${apiUrl}?category=pricing` },
  ];

  const handleFilterClick = async (url: string) => {
    setSelectedCategory(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTemplates(data);
    } catch (error) {
      console.error("Error fetching filtered templates:", error);
    }
  };

  const activeData = selectedCategory ? templates : postdata;

  return (
    <section className="md:p-[32px] p-[24px] md:rounded-[46px] rounded-[32px] mt-10 bg-[#fff] dark:bg-[#1a1a1a] w-full">
      <h2 className="text-left text-2xl font-bold text-black dark:text-white md:text-4xl mb-5">
        Choose Components
      </h2>

      <div className="flex gap-2 flex-row mb-6 overflow-x-auto">
        {filters.map((filter) => {
          const isActive = selectedCategory === filter.apiCall;
          return (
            <button
              key={filter.label}
              onClick={() => {
                if (isActive) {
                  setSelectedCategory(null);
                  setTemplates([]);
                } else {
                  handleFilterClick(filter.apiCall);
                }
              }}
              className={`flex items-center gap-2 py-2 px-4 rounded-2xl border text-sm font-medium cursor-pointer ${
                isActive
                  ? "bg-[#f6f7f8] text-black border-gray-200"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {filter.label}
              {isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path stroke="currentColor" d="M3 3l10 10M13 3L3 13" />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      {loading ? (
        <SpinnerDemo />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {activeData.map((item) => (
            <a
              key={item.id}
              href={item.custom_fields._template_link?.[0] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="card border-1 border-[#E2E8F0] rounded-4xl bg-[#F8FAFC] p-4 duration-300 transition-all ease-in-out hover:bg-zinc-50 hover:scale-[1.02]"
            >
              <div className="card__content flex-wrap gap-2 relative">
                <div className="w-full rounded-3xl overflow-hidden mb-3">
                  <div className="card__image w-full h-full">
                    {pageLoaded && (
                      <Image
                        src={item.featured_image}
                        className="w-full h-full cover"
                        width={400}
                        height={300}
                        alt="Card preview"
                      />
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-col justify-between p-2">
                  {item.custom_fields._template_paid?.[0] === "paid" && (
                    <div className="bg-[#F8FAFC] rounded-xl px-4 py-1 border border-[#E2E8F0] w-fit mb-2 text-[#4F46E5] text-sm">
                      Paid
                    </div>
                  )}
                  <p className="text-left text-xl text-[#1E293B] dark:text-white font-extrabold leading-relaxed mb-5">
                    {item.title}
                  </p>
                  <ActionButtons
                    labelOne={
                      item.custom_fields._template_paid?.[0] === "paid"
                        ? `₹${item.custom_fields._template_price?.[0] ?? "0"}`
                        : "Free"
                    }
                    labelTwo="Preview"
                    onClickTwo={() =>
                      window.open(
                        item.custom_fields._template_preview?.[0],
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </a>
          ))}
          {selectedCategory && templates.length === 0 && (
            <p className="text-center col-span-full text-gray-500">
              No templates found for this category.
            </p>
          )}
        </section>
      )}
    </section>
  );
};

const ActionButtons: React.FC<ButtonsEvents> = ({
  labelOne,
  labelTwo,
  onClickOne,
  onClickTwo,
}) => (
  <div className="flex gap-2 w-full">
    <button
      type="button"
      onClick={onClickOne}
      className="cursor-pointer py-3 px-4 text-sm w-full font-medium rounded-2xl border border-transparent bg-[#8366ff] text-white hover:bg-blue-700"
    >
      {labelOne}
    </button>

    <button
      type="button"
      onClick={onClickTwo}
      className="cursor-pointer py-3 px-4 w-full text-sm font-medium rounded-2xl border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
    >
      {labelTwo}
    </button>
  </div>
);

export default Filters;
