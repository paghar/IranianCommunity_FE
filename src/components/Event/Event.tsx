import React, {useMemo} from "react";
import EventSlider from "./EventSlider";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

interface IProps {
  eventTitle: string;
  eventDescription: string;
  eventItems: any[];
}

const Event = ({eventTitle, eventDescription, eventItems}: IProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center" id="Event">
      <div className="flex flex-col w-full my-16">
        
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal mx-auto"
          >
            {eventTitle}
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
          >
            {eventDescription}
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <EventSlider eventItems={eventItems} />
          </motion.div>
        </ScrollAnimationWrapper>

      </div>
    </div>
  );
};

export default Event;
