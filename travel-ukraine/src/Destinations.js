import React from "react";

export const destinations = [
  {
    id: 1,
    title: "Карпати",
    subtitle: "Гірські масиви та чудові пейзажі",
    img: "https://cdn.abo.media/upload/article/o_1e8jsdieilkm2iv17c71p6o1mh4dk.jpg",
    link: "https://kraina-ua.com/ua/tour/tijden-v-karpatah",
  },
  {
    id: 2,
    title: "Київ",
    subtitle: "Столиця України з багатою історією",
    img: "https://kyivnews.net/wp-content/uploads/2025/02/64d18c0f9f375.jpg",
    link: "https://vidviday.ua/cvit_kyjivskykh_kashtaniv",
  },
  {
    id: 3,
    title: "Одеса",
    subtitle: "Морське узбережжя та унікальна архітектура",
    img: "https://ukraine.ua/wp-content/uploads/2020/11/Theatre-in-old-town-of-Odesa-sea-port-weiv.simbiothy.depositphotos-2048x1536.jpg",
    link: "https://www.poehalisnami.ua/ua/tour/ukraine/odessa",
  },
  {
    id: 4,
    title: "Львів",
    subtitle: "Місто кави та європейського шарму",
    img: "https://prolviv.com/wp-content/uploads/2023/05/lviv_sunrises_and_sunsets.jpg",
    link: "https://mtourism.com.ua/tours-to-lviv-ua-1",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Популярні напрямки</h2>
        <p className="text-gray-600 mb-8">
          Карта популярних місць та короткі описи, що надихають на поїздку.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <article
              key={d.id}
              className="rounded-xl overflow-hidden bg-white shadow"
            >
              <div className="h-40 md:h-36 lg:h-40 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="text-sm text-gray-500">{d.subtitle}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    className="text-amber-600 text-sm font-medium"
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Деталі →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
