import React, { useState } from "react";


import style from "../sass/components/Silder.module.scss";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      name: "Harry de Beer",

      testimonial:
        "The team was thorough, transparent and quick as responding and answering my questions. We got the loan done in a matter of a few days. I am looking forward to building a long lasting business relationship with Depfin Finance Loans",
    },
    {
      name: "Gert Kirsten",

      testimonial:
        "The best lending company we have. They Very accommodating staff and the loan process is very fast with considerable interest and options. In this pandemic situation, On Deck considered our low income status, giving us the option to pay just for a portion of our weekly payments. Appreciate your help",
    },

    {
      name: "Botha",
      testimonial:
        "When our business hit a rough stretch, the big banks bailed on us; fair weather friends. But Depfin Loans saved us. I give special thanks to Depfin Finance loans team, who made the process seem more like friends helping friends",
    },
    {
      name: "Busisiwe Mabaso",
      testimonial:
        "The Team was super helpful through the whole loan process. Answering all our questions, and gave us plenty of options.",
    },
    {
      name: "Naidoo",
      testimonial:
        "I would like to thank you for a very professional job helping though getting my loan completed; you made my experience stress-free.",
    },
    {
      name: "Londy Rozani",
      testimonial:
        "Depfin Finance Loans has been very helpful in the growing of my business and very awesome",
    },
    {
      name: "Bester",
      testimonial:
        "Thank you for my business loan, this has really helped me a lot, thank you",
    },
    {
      name: "PAUL & LILLIAN",
      testimonial:
        "I don’t think I have ever written a review, partly because I am not computerize, and partly because I am old. So what I have to say is short. Our hearing and eyes, and mind are not what they once were. So, when you have people help you as much, it is worth noting. Now that took some doing. I and my wife are very grateful for their kindness and getting the job done. Thank you, and God bless you both",
    },
    {
      name: "Andre Scholtz",
      testimonial:
        "I had a great experience with the Loans team. They worked tirelessly to close my loan in a timely manner. They made my whole experience getting this loan stress-free. I give my highest recommendation to anyone to use this company for your mortgage needs. I would certainly use them again.",
    },
    {
      name: "Mr. Pieter Krige",
      testimonial:
        "Thank you so very much for helping us with the purchase of our home. Special thanks to you for your patience with us old folks! We appreciate very much all you have done. We love our new home! Our realtor told us he would recommend you guys because you are very efficient in the loan process. God bless",
    },
    {
      name: "Mike Van Vuuren",
      testimonial:
        "Took a little longer than initially expected and quoted but our current lender was the hold up. Good experience, responsiveness to our questions was prompt and courteous. Excellent service. ",
    },
    {
      name: "P. Katlego",
      testimonial:
        "The process went relatively smooth and each person we came in contact with was knowledgeable as well as professional. A special thank you for all her help through the process, it was so appreciated!",
    },
    {
      name: "Mrs M, Habib",
      testimonial:
        "We really didn’t believe we could possibly get the Personal loan we needed given our circumstances, thank you so much for all your hard work",
    },
    {
      name: "Mr. S. Debeza",
      testimonial:
        "With enormous thanks to you for bringing my business back to life",
    },
    {
      name: "Mrs. C. McCarthy",
      testimonial: "Thanks for this excellent service. I appreciate it a lot ",
    },
  ];

  const handleClickPrev = () => {
    if (index === 0) return setIndex(data.length - 1);
    setIndex(index - 1);
  };

  const handleClickNext = () => {
    if (index === data.length - 1) return setIndex(0);
    setIndex(index + 1);
  };

  return (
    <div className={style.container}>
      <div className={style.testimonial_container}>
        <div className={style.slider}>
          <div className={style.slider_images}>
            <div className={style.image_wrapper}>
              {/* <img
                src={`/frontendmentor/challenge/coding-bootcamp-testimonials-slider/${data[index].picture}`}
              /> */}
            </div>
          </div>
          <div className={style.slider_buttons}>
            <button
              title="previous"
              name="previous"
              onClick={() => handleClickPrev()}
            >
              <ArrowCircleLeftRoundedIcon />
            </button>
            <button
              title="next"
              name="next"
              onClick={() => handleClickNext()}
            >
              <ArrowCircleRightRoundedIcon />
            </button>
          </div>
        </div>
        <div className={style.testimonial}>
          <p className={style.testimonial_content}>
            “ {`${data[index].testimonial}`} ”
          </p>
          <div className={style.testimonial_author}>
            <p className={style.testimonial_author_name}>
              __{`${data[index].name}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
