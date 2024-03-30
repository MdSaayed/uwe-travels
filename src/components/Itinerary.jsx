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
              content: `Istanbul, formerly known as Constantinople, is the largest city in Turkey, serving as the country's economic, cultural and historic hub. The city straddles the Bosporus strait, lying in both Europe and Asia, and has a population of over 15 million residents, comprising 19% of the population of Turkey. Istanbul is the most populous European city, and the world's 15th-largest city.

The city was founded as Byzantium (Byzantion) in the 7th century BC by Greek settlers from Megara. In 330 CE, the Roman emperor Constantine the Great made it his imperial capital, renaming it first as New Rome (Nova Roma)and then as Constantinople (Constantinopolis) after himself. The city grew in size and influence, eventually becoming a beacon of the Silk Road and one of the most important cities in history.`,
            },
            // Add more accordion data here for each day
            {
              title: "Gallipoli",
              day: "Day 2",
              content: `The Gallipoli peninsula is located in the southern part of East Thrace, the European part of Turkey, with the Aegean Sea to the west and the Dardanelles strait to the east.

Gallipoli is the Italian form of the Greek name Καλλίπολις (Kallípolis), meaning 'beautiful city', the original name of the modern town of Gelibolu. In antiquity, the peninsula was known as the Thracian Chersonese.`,
            },
            {
              title: "Troy",
              day: "Day 3",
              content: `Troy or Ilium was an ancient city located at Hisarlik in present-day Turkey, 30 kilometres (19 mi) south-west of Çanakkale. It is known as the setting for the Greek myth of the Trojan War.

In Ancient Greek literature, Troy is portrayed as a powerful kingdom of the Heroic Age, a mythic era when monsters roamed the earth and gods interacted directly with humans. The city was said to have ruled the Troad until the Trojan War led to its complete destruction at the hands of the Greeks. The story of its destruction was one of the cornerstones of Greek mythology and literature, featuring prominently in the Iliad and the Odyssey, as well as numerous other poems and plays. Its legacy played a large role in Greek society, with many prominent families claiming descent from those who had fought there. In the Archaic era, a new city was built at the site where legendary Troy was believed to have stood. In the Classical era, this city became a tourist destination, where visitors would leave offerings to the legendary heroes.`,
            },
            {
              title: " Kusadasi",
              day: "Day 4",
              content: `Kuşadası is a large resort town on Turkey's Aegean coast, and the center of the seaside district of the same name within Aydın Province. Kuşadası is 95 km (59 mi) south of İzmir, and about 60 km (37 mi) from Aydın. The municipality's primary industry is tourism. The mayor of the district is Oğuzhan Turan.`,
            },
            {
              title: " Fethiye",
              day: "Day 5",
              content: `Fethiye, formerly Makri (Greek: Μάκρη), is a city and district of Muğla Province in the Aegean Region of Turkey. It is one of the prominent tourist destinations in the Turkish Riviera. In 2019 its population was 162,686`,
            },
            {
              title: " Oludeniz",
              day: "Day 6",
              content: `Ölüdeniz is a small neighbourhood and beach resort in the Fethiye district of Muğla Province, on the Turquoise Coast of southwestern Turkey, at the conjunction point of the Aegean and Mediterranean sea. It is located 14 km (9 mi) to the south of Fethiye, near Mount Babadağ.`,
            },
            {
              title: " Dalyan",
              day: "Day 7",
              content: `Dalyan is a town in Muğla Province located between the districts of Marmaris and Fethiye on the south-west coast of Turkey. The town is an independent municipality, within the administrative district of Ortaca.

Dalyan achieved international fame in 1987 when developers wanted to build a luxury hotel on the nearby İztuzu Beach, a breeding ground for the endangered loggerhead sea turtle species. The incident created major international storm when David Bellamy championed the cause of conservationists such as June Haimoff, Peter Günther, Nergis Yazgan, Lily Venizelos and Keith Corbett. The development project was temporarily stopped after Prince Philip called for a moratorium and in 1988 the beach and its hinterland were declared a protected area, viz. Köyceğiz-Dalyan Special Environmental Protection Area.

Life in Dalyan revolves around the Dalyan Çayı River which flows past the town. The boats that ply up and down the river, navigating the maze of reeds, are the preferred means of transport to local sites.`,
            },
            {
              title: " Cappadocia",
              day: "Day 8",
              content: `Cappadocia is a historical region in Central Anatolia, largely in the Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde provinces in Turkey.

Since the late 300s BC the name Cappadocia came to be restricted to the inland province (sometimes called Great Cappadocia), Upper Cappadocia, which alone will be the focus of this article. Lower Cappadocia is focused to elsewhere.

According to Herodotus, in the time of the Ionian Revolt (499 BC), the Cappadocians were reported as occupying a region from Mount Taurus to the vicinity of the Euxine (Black Sea). Cappadocia, in this sense, was bounded in the south by the chain of the Taurus Mountains that separate it from Cilicia, to the east by the upper Euphrates, to the north by Pontus, and to the west by Lycaonia and eastern Galatia.`,
            },
            {
              title: " Istanbul",
              day: "Day 9",
              content: `Our trip will end after we say goodbye to our new friends over breakfast, bid you safe travels, and check-out of the hotel.`,
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
                <span>{item.day}{ item.day? ":":""}</span>
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
