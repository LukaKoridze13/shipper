import React from "react";
import Logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="bg-[#C1E0EF] pb-5">
      <img className="pt-14 pl-10" src={Logo}></img>
      <div className="flex gap-20 justify-center">
        <div>
          <h1 className="text-3xl">Our Services</h1>
          <h5 className="text-2xl mt-5">Plans & Pricing</h5>
          <h5 className="text-2xl mt-1.5">Asisted Purchase</h5>
          <h5 className="text-2xl mt-1.5">Consolidation</h5>
        </div>

        <div>
          <h1 className="text-3xl">Help</h1>
          <h5 className="text-2xl mt-5">How it works</h5>
          <h5 className="text-2xl mt-1.5">Shipping MeThods</h5>
          <h5 className="text-2xl mt-1.5">Shipping Calculator</h5>
        </div>

        <div>
          <h1 className="text-3xl">About us</h1>
          <h5 className="text-2xl mt-5">What is Shipper</h5>
          <h5 className="text-2xl mt-1.5">Blog</h5>
          <h5 className="text-2xl mt-1.5">News</h5>
        </div>

        <div>
          <h1 className="text-3xl">Contact US</h1>
          <h5 className="text-2xl mt-5">Support@shipper.com</h5>
        </div>
      </div>
      <div className="pr-24">
        <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="167" height="52" viewBox="0 0 167 52" fill="none">
          <path
            d="M51.1388 25.7257C51.1388 11.5178 39.691 0 25.5694 0C11.4478 0 0 11.5178 0 25.7257C0 38.5661 9.35035 49.2089 21.5742 51.1388V33.162H15.0819V25.7257H21.5742V20.058C21.5742 13.6105 25.3915 10.0491 31.2321 10.0491C34.0296 10.0491 36.9557 10.5516 36.9557 10.5516V16.8825H33.7315C30.5552 16.8825 29.5646 18.8655 29.5646 20.9V25.7257H36.6561L35.5225 33.162H29.5646V51.1388C41.7884 49.2089 51.1388 38.5661 51.1388 25.7257Z"
            fill="#1877F2"
          />
          <path
            d="M35.3424 33.1369L36.4605 25.8175H29.4661V21.0677C29.4661 19.0652 30.4431 17.1134 33.5759 17.1134H36.756V10.882C36.756 10.882 33.87 10.3875 31.1108 10.3875C25.3502 10.3875 21.5852 13.8928 21.5852 20.239V25.8175H15.1819V33.1369H21.5852V50.8309C24.1963 51.2412 26.855 51.2412 29.4661 50.8309V33.1369H35.3424Z"
            fill="white"
          />
          <path d="M84.6985 51.1388C98.8201 51.1388 110.268 39.691 110.268 25.5694C110.268 11.4478 98.8201 0 84.6985 0C70.577 0 59.1292 11.4478 59.1292 25.5694C59.1292 39.691 70.577 51.1388 84.6985 51.1388Z" fill="#55ACEE" />
          <path
            d="M99.8803 18.0197C98.7732 18.5091 97.5988 18.8299 96.3963 18.9715C97.6631 18.2157 98.6112 17.026 99.0638 15.6242C97.8731 16.329 96.5704 16.8256 95.212 17.0923C94.6443 16.4883 93.9583 16.007 93.1966 15.6784C92.4348 15.3498 91.6135 15.1808 90.7835 15.1819C87.4343 15.1819 84.718 17.892 84.718 21.2335C84.718 21.7078 84.7718 22.1695 84.8759 22.6127C79.8349 22.3604 75.3652 19.9513 72.3734 16.289C71.8339 17.2125 71.5504 18.2627 71.5519 19.3317C71.5519 21.4307 72.6236 23.2838 74.2502 24.3687C73.2869 24.3391 72.3448 24.0792 71.5031 23.611L71.5026 23.6877C71.5026 26.6199 73.5943 29.0655 76.3685 29.6211C75.8479 29.7628 75.3105 29.8343 74.7709 29.8336C74.3791 29.8336 73.9996 29.7962 73.6296 29.7258C74.4013 32.1294 76.6409 33.8792 79.2957 33.9284C77.147 35.6109 74.4933 36.5234 71.7618 36.5189C71.2733 36.5189 70.7893 36.4904 70.3157 36.434C73.0885 38.2127 76.3163 39.1567 79.6128 39.1532C90.7695 39.1532 96.8708 29.932 96.8708 21.9344C96.8708 21.6722 96.8649 21.4109 96.8531 21.1518C98.0411 20.296 99.0663 19.2353 99.8803 18.0197Z"
            fill="#F1F2F2"
          />
          <path d="M118.258 26.768C118.258 13.3105 129.172 2.39722 142.629 2.39722C156.087 2.39722 167 13.3105 167 26.768C167 40.2255 156.087 51.1388 142.629 51.1388C129.172 51.1388 118.258 40.2255 118.258 26.768Z" fill="#D42428" />
          <path d="M159.732 9.58862C169.423 19.0962 169.423 34.5104 159.732 44.0082C150.042 53.5158 134.331 53.5158 124.651 44.0082L159.732 9.58862Z" fill="#CC202D" />
          <path
            d="M167 30.8652L150.191 14.3192L148.832 15.6576L147.472 14.3192L145.982 15.7865L146.979 16.7679L146.656 17.0852L144.068 14.5373L143.957 14.6464L140.473 11.2163L138.982 12.6835L139.385 13.08L138.791 13.6649L136.273 11.1865L135.226 12.2175L137.673 18.027L136.565 22.4881L139.587 25.4622L131.953 25.9877L131.842 39.0341L144.129 51.1387C155.65 50.3357 165.056 41.8595 167 30.8652Z"
            fill="#BA202E"
          />
          <path
            d="M151.313 32.807H149.734L149.744 31.8635C149.744 31.4475 150.08 31.1026 150.484 31.1026H150.583C150.988 31.1026 151.333 31.4475 151.333 31.8635L151.313 32.807ZM145.392 30.788C144.997 30.788 144.662 31.062 144.662 31.4069V35.9928C144.662 36.3276 144.988 36.6117 145.392 36.6117C145.797 36.6117 146.122 36.3377 146.122 35.9928V31.4069C146.122 31.062 145.797 30.788 145.392 30.788ZM155.014 28.2212V36.9465C155.014 39.0365 153.248 40.7511 151.096 40.7511H134.961C132.8 40.7511 131.043 39.0365 131.043 36.9465V28.2212C131.043 26.1312 132.809 24.4165 134.961 24.4165H151.086C153.248 24.4267 155.014 26.1312 155.014 28.2212ZM136.037 37.89V28.7082H138.04V27.3486L132.711 27.3385V28.6777L134.379 28.6879V37.9002H136.037V37.89ZM142.037 30.0778H140.369V34.9782C140.369 35.6884 140.408 36.0435 140.369 36.1653C140.231 36.5406 139.619 36.9465 139.382 36.2058C139.343 36.0739 139.382 35.6783 139.372 35.0086L139.362 30.0677H137.704L137.714 34.9275C137.714 35.6681 137.695 36.2261 137.724 36.4798C137.764 36.9262 137.754 37.4436 138.148 37.7378C138.899 38.2959 140.339 37.6567 140.695 36.8653V37.8799H142.037V30.0778ZM147.366 35.6884V31.6098C147.366 30.0575 146.231 29.1241 144.692 30.3822L144.701 27.3486H143.034L143.024 37.8292L144.395 37.8089L144.524 37.1595C146.271 38.8031 147.366 37.6668 147.366 35.6884ZM152.577 35.1507L151.323 35.1608V36.0537C151.323 36.4392 151.017 36.7537 150.642 36.7537H150.396C150.021 36.7537 149.715 36.4392 149.715 36.0537V34.1666H152.577V33.0607C152.577 32.249 152.557 31.4475 152.488 30.9808C152.281 29.5198 150.287 29.2865 149.28 30.0373C148.965 30.2706 148.718 30.5851 148.58 31.0011C148.442 31.4171 148.373 31.9954 148.373 32.7259V35.1608C148.373 39.209 153.149 38.6307 152.577 35.1507ZM146.172 21.9308C146.261 22.1439 146.389 22.3164 146.576 22.4483C146.754 22.5802 146.981 22.641 147.257 22.641C147.494 22.641 147.711 22.57 147.899 22.4381C148.086 22.2961 148.244 22.0932 148.363 21.8192L148.333 22.4888H150.188V14.3723H148.728V20.6931C148.728 21.038 148.452 21.3119 148.116 21.3119C147.78 21.3119 147.504 21.0279 147.504 20.6931V14.3723H145.974V19.851C145.974 20.551 145.984 21.0177 146.004 21.2511C146.034 21.4946 146.083 21.7178 146.172 21.9308ZM140.537 17.345C140.537 16.5637 140.596 15.955 140.724 15.5187C140.853 15.0825 141.08 14.7274 141.405 14.4636C141.731 14.1998 142.155 14.0679 142.668 14.0679C143.103 14.0679 143.468 14.1592 143.774 14.3215C144.08 14.494 144.316 14.7172 144.484 14.9912C144.652 15.2651 144.77 15.5492 144.83 15.8333C144.889 16.1275 144.918 16.5637 144.918 17.1623V19.2219C144.918 19.9727 144.889 20.5307 144.83 20.8858C144.77 21.2409 144.652 21.5656 144.465 21.87C144.277 22.1743 144.04 22.3975 143.744 22.5497C143.448 22.6918 143.112 22.7628 142.737 22.7628C142.313 22.7628 141.958 22.7019 141.662 22.5802C141.366 22.4584 141.139 22.2656 140.981 22.0221C140.813 21.7685 140.705 21.4641 140.635 21.109C140.566 20.7539 140.537 20.2162 140.537 19.506V17.345ZM141.997 20.5713C141.997 21.0279 142.333 21.4033 142.737 21.4033C143.142 21.4033 143.478 21.0279 143.478 20.5713V16.2492C143.478 15.7927 143.142 15.4173 142.737 15.4173C142.333 15.4173 141.997 15.7927 141.997 16.2492V20.5713ZM136.856 22.7628H138.612V16.5333L140.685 11.1967H138.77L137.665 15.1636L136.55 11.1865H134.655L136.856 16.5333V22.7628Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="h-[1px] bg-[#2A9BD2] mt-5 mb-3 mr-5"></div>
      <p className="text-center text-2xl">Privacy Policy | Terms & Conditions</p>
     
    </div>
  );
}