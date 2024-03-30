import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
const NewsletterSignup = () => {
  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <div className="flex justify-between items-center bg-white p-4">
          <div className="flex flex-col m-[10px]">
            <h2 className="text-lg text-center mb-[10px] ">FOLLOW US</h2>
            <div className="flex gap-[20px]">
              <a href="#">
                {" "}
                <InstagramIcon
                  style={{ fontSize: "42px" }}
                  className="text-gray-400 "
                />
              </a>
              <a href="#">
                {" "}
                <FacebookIcon
                  style={{ fontSize: "42px" }}
                  className="text-gray-400"
                />
              </a>
              <a href="#">
                {" "}
                <PinterestIcon
                  style={{ fontSize: "42px" }}
                  className="text-gray-400"
                />
              </a>
              <a href="#">
                {" "}
                <YouTubeIcon
                  style={{ fontSize: "42px" }}
                  className="text-gray-400"
                />
              </a>
            </div>
          </div>
          <div className="border-l-2 border-gray-200 h-[120px] mx-[20px]" />
          <div className="flex flex-col">
            <h2 className="text-lg text-center mb-2">
              DISCOVER WHAT'S COOKIN'
            </h2>
            <form className="flex space-x-2 mb-2 mx-auto mt-auto">
              <input
                type="text"
                placeholder="Email address"
                className="p-[10px] border border-gray-500"
              />
              <button className="bg-blue-600 text-white px-[20px] py-[10px] rounded-md">
                GO
              </button>
            </form>
            <p className="m-auto w-[60%] text-center">
              Sign up for offers, recipes, news, & more (subscribers to the Blue
              Apron recipe newsletter agree to our Privacy Policy)
            </p>
          </div>
          <div className="border-l-2 border-gray-200 h-[120px]" />
          <div className="flex flex-col ml-[20px]">
            <h2 className="text-[22px] text-center mb-2">FROM THE BLOG</h2>
            <div className="flex justify-between  items-center gap-[20px]">
              <img
                alt="Blog post thumbnail"
                className="ml-[20px] w-[70px] h-[70px] object-cover"
                height="50"
                src="public/foot.jpg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <p className="ml-[8px]">How to Create a Gut-Healthy Meal Plan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterSignup;
