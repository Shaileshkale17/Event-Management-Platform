import React from "react";
import companyImg from "../assets/pexels-fauxels-3184432.jpg";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen px-3 lg:px-16 py-5 bg-black text-gray-300">
      <AnimatePresence>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.8 }}
          src={companyImg}
          alt="Company Overview"
          className="h-auto lg:h-[40rem] w-full bg-cover object-cover"
        />

        <div className="mt-5 flex flex-col gap-5">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-3xl font-bold text-gray-300">
            About My Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Welcome to{" "}
            <span className="text-gray-300 font-semibold">My Events</span>, your
            ultimate event management solution. Whether you're planning a
            corporate event, wedding, concert, or private gathering, we bring
            your vision to life with seamless execution. Our platform is
            designed to cater to individuals, businesses, and event organizers
            who want a streamlined and efficient way to manage events from start
            to finish.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-2xl font-semibold text-gray-300">
            Our Story
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            My Events was founded with a simple yet powerful vision—to eliminate
            the stress and complexity of event planning while enhancing
            creativity and organization. As event enthusiasts ourselves, we
            understand the challenges involved in bringing an idea to life. From
            venue selection and guest management to scheduling and real-time
            coordination, we have built a platform that makes event management
            as effortless as possible.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Our journey began when our founders identified a significant gap in
            the industry: the lack of a unified solution that combines{" "}
            <span className="text-gray-300">
              event planning, vendor coordination, budget tracking, and audience
              engagement
            </span>{" "}
            under one platform. Thus, My Events was born—a dynamic and
            user-friendly platform that empowers anyone to create, plan, and
            execute events with precision and ease.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-2xl font-semibold text-gray-300">
            Our Mission
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            At My Events, our mission is to provide a{" "}
            <span className="text-gray-300">revolutionary</span> event
            management platform that transforms ideas into extraordinary
            experiences. We strive to:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="list-disc pl-5">
            <li className="text-gray-400">
              Offer intuitive tools that simplify the event planning process.
            </li>
            <li className="text-gray-400">
              Help organizers and vendors collaborate efficiently.
            </li>
            <li className="text-gray-400">
              Ensure seamless guest management with smart invitation systems.
            </li>
            <li className="text-gray-400">
              Empower event creators with data-driven insights for better
              planning.
            </li>
            <li className="text-gray-400">
              Deliver real-time updates and communication channels for smoother
              execution.
            </li>
          </motion.ul>

          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-2xl font-semibold text-gray-300">
            What We Offer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            My Events provides an all-in-one platform with advanced features
            that cater to{" "}
            <span className="text-gray-300">
              every aspect of event planning and execution
            </span>{" "}
            . Our services include:
          </motion.p>

          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-xl font-semibold text-gray-300">
            1. Event Planning & Organization
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            We provide a{" "}
            <span className="text-gray-300">customized event dashboard</span>
            where you can plan every detail, from scheduling and budgeting to
            vendor management and on-the-day logistics. Our interactive
            interface ensures that you have{" "}
            <span className="text-gray-300">full control</span> over your event
            while making the process easy and enjoyable.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-xl font-semibold text-gray-300">
            2. Vendor & Venue Management
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Searching for the perfect venue or the best caterers? My Events
            offers a{" "}
            <span className="text-gray-300">curated list of vendors</span> that
            match your event needs. Our platform simplifies vendor selection,
            communication, and contract management, so you can focus on creating
            a memorable experience.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-xl font-semibold text-gray-300">
            3. Guest & Invitation Management
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Say goodbye to{" "}
            <span className="text-gray-300">manual guest lists</span> ! Our
            platform allows you to send digital invitations, track RSVPs, and{" "}
            <span className="text-gray-300">automate reminders</span> . We also
            provide seamless integration with social media and email marketing
            tools to enhance your event’s reach.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-xl font-semibold text-gray-300">
            4. Budget Tracking & Financial Management
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Budgeting is one of the most critical aspects of event planning. My
            Events offers a{" "}
            <span className="text-gray-300">
              comprehensive financial tracking tool
            </span>{" "}
            that helps you allocate funds efficiently, track expenses, and
            prevent overspending.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-xl font-semibold text-gray-300">
            5. Live Event Coordination & Real-Time Updates
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            From managing schedules to providing live updates, our real-time
            event coordination tools ensure that everything runs smoothly. Our{" "}
            <span className="text-gray-300">mobile-friendly</span> interface
            allows you to oversee your event from anywhere, at any time.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-2xl font-semibold text-gray-300">
            Why Choose My Events?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Whether you're an{" "}
            <span className="text-gray-300">
              individual, business, or event professional
            </span>{" "}
            , My Events is designed to make your life easier. Here's why our
            platform stands out:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="list-disc pl-5">
            <li className="text-gray-400">
              Easy-to-use, feature-rich dashboard.
            </li>
            <li className="text-gray-400">
              All-in-one event management solution.
            </li>
            <li className="text-gray-400">
              Seamless vendor and guest coordination.
            </li>
            <li className="text-gray-400">
              Budget-friendly with flexible pricing options.
            </li>
            <li className="text-gray-400">
              Reliable support and expert guidance.
            </li>
          </motion.ul>

          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-2xl font-semibold text-gray-300">
            Our Impact
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Since our launch, My Events has helped{" "}
            <span className="text-gray-300">thousands of event organizers</span>{" "}
            bring their visions to life. From grand weddings and corporate
            conferences to music festivals and intimate gatherings, our platform
            has powered events of all sizes. With a growing network of users and
            vendors, My Events continues to set new benchmarks in the event
            management industry.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-2xl font-semibold text-gray-300">
            Join Us Today
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            Whether you're planning your{" "}
            <span className="text-gray-300">
              dream wedding, a high-profile corporate event, or an unforgettable
              birthday celebration
            </span>{" "}
            , My Events is here to help. Our platform provides the tools,
            expertise, and support to turn your ideas into reality.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.9 }}
            className="text-gray-400">
            <span className="text-gray-300">Sign up today</span> and take the
            stress out of event planning! With My Events, you can{" "}
            <span className="text-gray-300">
              focus on creating memories while we handle the rest
            </span>
            .
          </motion.p>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default About;
