import React from 'react';
import Photo from './photo';
import SearchBar from "./SearchBar";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Destinations from "./Destinations";




// TravelUkraineDesign.jsx
// Однофайловий React-компонент для попереднього перегляду дизайну лендінгу
// Використовує Tailwind CSS для стилізації — підходить як макет, який можна перенести у Figma

export default function TravelUkraineDesign() {
  const destinations = [
    { id: 1, title: 'Карпати', subtitle: 'Гори · Природа', img: 'https://cdn.abo.media/upload/article/o_1e8jsdieilkm2iv17c71p6o1mh4dk.jpg' },
    { id: 2, title: 'Київ', subtitle: 'Історія · Місто', img: 'https://kyivnews.net/wp-content/uploads/2025/02/64d18c0f9f375.jpg' },
    { id: 3, title: 'Одеса', subtitle: 'Море · Культура', img: 'https://ukraine.ua/wp-content/uploads/2020/11/Theatre-in-old-town-of-Odesa-sea-port-weiv.simbiothy.depositphotos-2048x1536.jpg' },
    { id: 4, title: 'Львів', subtitle: 'Кави · Архітектура', img: 'https://prolviv.com/wp-content/uploads/2023/05/lviv_sunrises_and_sunsets.jpg'},
  ];

  const posts = [
    { id: 1, title: 'Маршрут вихідного дня у Карпатах', excerpt: 'Плануйте поход на 2 дні: що взяти, куди йти, як безпечно.', date: '2025-04-10' },
    { id: 2, title: 'Топ-10 кав’ярень Львова', excerpt: 'Де скуштувати найкращу каву й атмосферу старого міста.', date: '2025-03-28' },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#FFF8E7]">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center">
  <img 
    src="logoukraine.png" 
    alt="Travel Ukraine" 
    className="w-full h-full object-cover rounded-full" 
  />
</div>

            <div>
              <div className="text-lg font-semibold">Мандруй Україною</div>
              <div className="text-xs text-gray-500">Портал пригод і маршрутів</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-amber-600" href="#destinations">Маршрути</a>
            <a className="hover:text-amber-600" href="#blog">Блог</a>
            <a className="hover:text-amber-600" href="#gallery">Галерея</a>
            <a className="hover:text-amber-600" href="#contacts">Контакти</a>
            <a href="https://kraina-ua.com/ua/tours/tours-ukraine" className="ml-4 px-4 py-2 rounded-lg bg-amber-500 text-white text-sm">Плануй поїздку</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="menu" className="p-2">☰</button>
          </div>
        </div>
      </header>

      {/* Hero */}
<section className="pt-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Мандруй Україною<br />
        <span className="text-amber-600">
          Відкривай місця. Плануй маршрути. Ділись враженнями.
        </span>
      </h1>
      <p className="text-lg text-gray-600">
        Портал збирає маршрути, гідів і корисні поради для безпечних та цікавих подорожей по всій Україні.
      </p>

      {/* 🔍 Пошук */}
      <SearchBar data={destinations} />
      

      <div className="flex gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">🕒 <span>Оновлено щотижня</span></div>
      </div>
    </div>

    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img
          alt="hero"
          src="https://etnosvit.com/wp-content/uploads/2018/08/polonyna-1.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg w-72">
        <div className="text-xs text-gray-500">Пропозиція тижня</div>
        <a href ="https://ekotur.com.ua/packages/karpatsk-polonini"className="font-semibold text-amber-700 hover:underline">Еко-маршрут: Полонини Карпат</a>
        <div className="text-sm text-gray-600 mt-2">3 дні · з гідом · від 1999 грн</div>
      </div>
    </div>
  </div>
</section>
      {/* Destinations */}
<Destinations destinations={destinations} />


     {/* Blog / News */}
<section id="blog" className="mt-20 bg-gradient-to-b from-sky-50 to-white py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold mb-4">Останні пости</h2>
      <div className="space-y-6">
        {posts.map(p => (
          <article key={p.id} className="p-6 bg-white rounded-xl shadow flex gap-6">
            <a
              href={
                p.id === 1
                  ? "https://vpohid.com.ua/routes/"
                  : "https://photo-lviv.in.ua/top-10-naykrutishykh-kav-iaren-lvova-dlia-nezabutnoi-podorozhi"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-20 rounded-md bg-gray-200 flex-shrink-0 overflow-hidden"
            >
              <img
                src={
                  p.id === 1
                    ? "https://uamodna.com/assets/articles/image/u/v/z/uvzhk6kt/fullsize.jpg"
                    : "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2025/04/3-kafe.jpg?ssl=1"
                }
                alt={p.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </a>
            <div>
              <div className="text-xs text-gray-400">{p.date}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.excerpt}</p>
              <a
                className="text-amber-600 text-sm mt-2 inline-block"
                href={
                  p.id === 1
                    ? "https://vpohid.com.ua/routes/"
                    : "https://photo-lviv.in.ua/top-10-naykrutishykh-kav-iaren-lvova-dlia-nezabutnoi-podorozhi/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Читати далі →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Gallery */}
<section id="gallery" className="mt-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl font-bold mb-4">Галерея</h2>
    <p className="text-gray-600 mb-6">Фото від мандрівників по всій Україні.</p>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {[
        { label: "Говерла", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_2015.JPG/1200px-%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_2015.JPG", link: "https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0" },
        { label: "Львів", img: "https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/66b2462417b32_squere.jpg", link: "https://discover.ua/locations?tag=&cat=&city=2&region=" },
        { label: "Одеса", img: "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/1022059_800x600_odessa3.jpg", link: "https://discover.ua/locations?city=3" },
        { label: "Київ", img: "https://kiyavia.com/files/TravelProviderInUkraine/cities/kyiv/Kiev_1920_2.jpg", link: "https://discover.ua/locations?city=1" },
        { label: "Кам'янець-Подільський", img: "https://tamtour.com.ua/image/410/003/e1141d8077f72563dfbb304ca0c76b59-01-kamenets-podolskiy-depositphotos-41792869-original.jpg", link: "https://discover.ua/locations?city=19" },
        { label: "Чернівці", img: "https://upload.wikimedia.org/wikipedia/uk/thumb/e/ec/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96._%D0%92%D1%83%D0%BB%D0%B8%D1%86%D1%8F_%D0%9E%D0%BB%D1%8C%D0%B3%D0%B8_%D0%9A%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97.jpg/330px-%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96._%D0%92%D1%83%D0%BB%D0%B8%D1%86%D1%8F_%D0%9E%D0%BB%D1%8C%D0%B3%D0%B8_%D0%9A%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97.jpg", link: "https://discover.ua/locations?city=168" },
        { label: "Карпати", img: "https://chillax.com.ua/wp-content/uploads/2022/08/otdyh-v-karpatah-polza-2.jpg", link: "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D0%B8" },
        { label: "Ужгород", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80%2C_%D0%B0%D0%B5%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE_2.jpg/330px-%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80%2C_%D0%B0%D0%B5%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE_2.jpg", link: "https://discover.ua/locations?city=110" },
        { label: "Дніпро", img: "https://upload.wikimedia.org/wikipedia/uk/b/b7/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D1%96_%D0%92%D0%B5%D0%B6%D1%96.PNG", link: "https://discover.ua/locations?city=28" },
        { label: "Полтава", img: "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/5652_800x600_korpusniy_park.jpg", link: "https://discover.ua/locations?city=29" },
        { label: "Харків", img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B4%D0%B5%D1%80%D0%B6%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%96%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0057.jpg", link: "https://discover.ua/locations?city=30" },
        { label: "Черкаси", img: "https://landmarks.in.ua/images/23cherkasy-hotel-slovyansky-1000x667cherkaska.jpg", link: "https://discover.ua/locations?city=8" },
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={item.label}
          className="h-28 rounded-lg overflow-hidden block"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </a>
      ))}
    </div>
  </div>
</section>

  {/* Contacts / Footer */}
<section id="contacts" className="mt-20 bg-amber-50 py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* --- Contact Form --- */}
    <div className="md:col-span-2 bg-white rounded-xl p-6 shadow">
      <h3 className="text-xl font-semibold mb-4">Зв'яжіться з нами</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const message = e.target.message.value;

          const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
          messages.push({ name, email, message, date: new Date().toLocaleString() });
          localStorage.setItem("contactMessages", JSON.stringify(messages));

          alert("Повідомлення надіслано! Дякуємо за звернення");
          e.target.reset();
        }}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            className="p-3 border rounded focus:ring-2 focus:ring-amber-500 focus:outline-none"
            placeholder="Ім'я"
            required
          />
          <input
            name="email"
            type="email"
            className="p-3 border rounded focus:ring-2 focus:ring-amber-500 focus:outline-none"
            placeholder="Email"
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full p-3 border rounded focus:ring-2 focus:ring-amber-500 focus:outline-none"
          rows={4}
          placeholder="Ваше повідомлення"
          required
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="px-5 py-3 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition"
          >
            Надіслати
          </button>
          <div className="text-sm text-gray-500">Або напишіть нам у соцмережах</div>
        </div>
      </form>
    </div>

    {/* --- Sidebar --- */}
    <aside className="flex flex-col gap-4">
      <div className="p-4 bg-white rounded-xl shadow">
        <div className="font-semibold">Контактний центр</div>
        <div className="text-sm text-gray-600">+380 68 741 28 01</div>
        <div className="text-sm text-gray-600">adolfrommel5@gmail.com</div>
      </div>

      {/* --- Subscribe Form --- */}
      <div className="p-4 bg-white rounded-xl shadow">
        <div className="font-semibold">Підпишіться</div>
        <div className="text-sm text-gray-600 mb-3">
          Щотижневі маршрути та знижки
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const subs = JSON.parse(localStorage.getItem("subscribers")) || [];

            if (subs.includes(email)) {
              alert("Ви вже підписані!");
              return;
            }

            subs.push(email);
            localStorage.setItem("subscribers", JSON.stringify(subs));
            alert("Дякуємо за підписку!");
            e.target.reset();
          }}
          className="flex gap-2"
        >
          <input
            name="email"
            type="email"
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-amber-500 focus:outline-none"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="px-3 rounded bg-amber-500 text-white hover:bg-amber-600 transition"
          >
            OK
          </button>
        </form>
      </div>
    </aside>
  </div>
</section>


<footer className="mt-12 py-6 text-sm text-gray-600 text-center">
  © {new Date().getFullYear()} Мандруй Україною — всі права захищені
  {/* Соцмережі під формою */}
  <div className="flex justify-center gap-8 mt-4">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/ivan.petrik.632249/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.6 0-1 .4-1 1v1h3l-1 3h-2v7A10 10 0 0 0 22 12"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/_ivan.petryk_/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 hover:text-pink-700"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.9-19.6-5-37-18.2-53.1-13.2-16.3-31-26.8-54-27.7-21.3-1-84.8-1-106.1 0-22.9.9-41 11.5-54.2 27.7-13.2 16.1-17.3 33.5-18.2 53.1-.1 21.4-.1 84.8 0 106.1.9 19.6 5 37 18.2 53.1 13.2 16.3 31 26.8 54.2 27.7 21.3 1 84.8 1 106.1 0 22.9-.9 41-11.5 54-27.7 13.2-16.1 17.3-33.5 18.2-53.1.1-21.4.1-84.8 0-106.1zm-48.7 151.3c-7.8 19.6-23 35-42.6 42.8-29.5 11.7-99.5 9-132.5 0-19.6-7.8-35-23-42.8-42.6-11.7-29.5-9-99.5 0-132.5 7.8-19.6 23-35 42.6-42.8 29.5-11.7 99.5-9 132.5 0 19.6 7.8 35 23 42.8 42.6 11.7 29.5 9 99.5 0 132.5z"/>
      </svg>
    </a>

    {/* Telegram */}
    <a
      href="https://t.me/ak12k545"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-600"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.028 8.667l-1.944 9.21c-.146.672-.527.837-1.064.518l-2.938-2.17-1.417 1.366c-.156.155-.287.287-.588.287l.21-2.983 5.423-4.896c.236-.21-.051-.328-.364-.118l-6.69 4.211-2.875-.898c-.623-.195-.635-.623.13-.923l11.241-4.337c.518-.195.972.118.8.903z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/watch?v=-YOxvQ7WK2c&list=PL4YcmB6duia94-ayyr0FWKRCWJ5B03-BI"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-600 hover:text-red-800"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186c-.276-1.037-1.09-1.85-2.127-2.127C19.507 3.5 12 3.5 12 3.5s-7.507 0-9.371.559c-1.037.276-1.85 1.09-2.127 2.127C0 8.07 0 12 0 12s0 3.93.502 5.814c.276 1.037 1.09 1.85 2.127 2.127C4.493 20.5 12 20.5 12 20.5s7.507 0 9.371-.559c1.037-.276 1.85-1.09 2.127-2.127C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    </a>
  </div>
</footer>

    </div>
  );
}

/*
Figma notes (copy these into your Figma file as comments):
- Typography: Use variable fonts with scale: H1 48-56px, H2 28px, body 16px.
- Color palette: #FFB84D (accent amber), #FF6B6B (rose), deep-sky blues for backgrounds.
- Spacing: 24px baseline grid, rounded corners 12-24px for cards and images.
- Components to create: Header (logo + nav), Hero (image + CTA), Card (destination), PostCard, Gallery grid, Contact form.
- Create auto-layout frames for cards so they adapt to content.
- Export useful assets: logo (circle), featured photos (16:9), card thumbnails (4:3).
*/
