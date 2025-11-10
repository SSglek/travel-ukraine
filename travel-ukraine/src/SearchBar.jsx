import React, { useState } from "react";
import { destinations } from "./Destinations"; // 👈 ось тут імпорт масиву

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = destinations.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(query);
  };

  return (
    <div className="w-full max-w-xl mx-auto text-center">
      <div className="flex gap-3 justify-center mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg shadow-sm"
          placeholder="Куди хочеш поїхати?"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-3 rounded-lg bg-rose-500 text-white font-medium"
        >
          Знайти
        </button>
      </div>

      {searchTerm && (
        <div className="bg-white rounded-lg shadow p-4 text-left">
          {filtered.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filtered.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 hover:bg-amber-50 p-2 rounded-lg transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-amber-700 hover:underline"
                    >
                      {item.title}
                    </a>
                    <div className="text-sm text-gray-500">
                      {item.subtitle}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">
              Нічого не знайдено за запитом "{searchTerm}"
            </p>
          )}
        </div>
      )}
    </div>
  );
}
