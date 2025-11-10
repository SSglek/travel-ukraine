import React from 'react';

const locations = [
  {
    name: "Київ",
    imgUrl: "https://source.unsplash.com/400x300/?kyiv,ukraine",
    link: "https://uk.wikipedia.org/wiki/Київ",
  },
  {
    name: "Львів",
    imgUrl: "https://source.unsplash.com/400x300/?lviv,ukraine",
    link: "https://uk.wikipedia.org/wiki/Львів",
  },
  {
    name: "Одеса",
    imgUrl: "https://source.unsplash.com/400x300/?odesa,ukraine",
    link: "https://uk.wikipedia.org/wiki/Одеса",
  },
  {
    name: "Карпати",
    imgUrl: "https://source.unsplash.com/400x300/?carpathian,mountains,ukraine",
    link: "https://uk.wikipedia.org/wiki/Карпати",
  },
  {
    name: "Чернівці",
    imgUrl: "https://source.unsplash.com/400x300/?chernivtsi,ukraine",
    link: "https://uk.wikipedia.org/wiki/Чернівці",
  },
  {
    name: "Харків",
    imgUrl: "https://source.unsplash.com/400x300/?kharkiv,ukraine",
    link: "https://uk.wikipedia.org/wiki/Харків",
  },
  
];

const PhotoGallery = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
    {locations.map((location, i) => (
      <div key={i} className="h-28 rounded-lg overflow-hidden">
        <a
          href={location.link} // посилання на сторінку міста
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={location.imgUrl} // унікальна картинка для кожного місця
            alt={`gallery-${i}`}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    ))}
  </div>
);
