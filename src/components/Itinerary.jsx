import React, { useState } from "react";

const Itinerary = () => {
  const [activePanel, setActivePanel] = useState(0);

  const toggleAccordion = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const accordionData = [
            {
              title: "Introduction",
              day: "",
              content: `Start and end in Istanbul! With the Explorer tour Best of Turkey
                        by Land, you have a 9 days tour package taking you through
                        Istanbul, Turkey and 11 other destinations in Turkey. Best of
                        Turkey by Land includes accommodation in a hotel as well as an
                        expert guide, meals, transport and more.`,
            },
            {
              title: "Istanbul",
              day: "Day 1",
              content: `Istanbul, formerly known as Constantinople, is the largest city
                        in Turkey, serving as the country's economic, cultural and
                        historic hub...`,
            },
            // Add more accordion data here for each day
            {
              title: "Istanbul",
              day: "Day 2",
              content: `Our trip will end after we say goodbye to our new friends over
                        breakfast, bid you safe travels, and check-out of the hotel.`,
            },
            {
              title: "Troy",
              day: "Day 3",
              content: `Troy or Ilium was an ancient city located at Hisarlik in present-day Turkey, 30 kilometres (19 mi) south-west of Çanakkale. It is known as the setting for the Greek myth of the Trojan War.

              In Ancient Greek literature, Troy is portrayed as a powerful kingdom of the Heroic Age, a mythic era when monsters roamed the earth and gods interacted directly with humans. The city was said to have ruled the Troad until the Trojan War led to its complete destruction at the hands of the Greeks. The story of its destruction was one of the cornerstones of Greek mythology and literature, featuring prominently in the Iliad and the Odyssey, as well as numerous other poems and plays. Its legacy played a large role in Greek society, with many prominent families claiming descent from those who had fought there. In the Archaic era, a new city was built at the site where legendary Troy was believed to have stood. In the Classical era, this city became a tourist destination, where visitors would leave offerings to the legendary heroes.`,
            },
  ];

  return (
    <div className="tour-content-block">
      <div className="tour-content-title mb-8">Itinerary</div>
      <div className="tour-itinerary">
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`accordion-panel ${
                activePanel === index ? "active" : ""
              }`}
            >
              <div
                className="accordion-trigger"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.day}:</span>
                {item.title}
              </div>
              {activePanel === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
