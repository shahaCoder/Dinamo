import * as React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export interface IAppProps {
  setModal: (val: boolean) => void;
}

export function ModalWindow({ setModal }: IAppProps) {
  const positions = ["Нападающий", "Полузащитник", "Защитник", "Вратарь"];
  const teamCategory = ["MAIN", "U19", "U21"];

  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [btn, setBtn] = React.useState<boolean>(false);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
    } else {
      alert("Пожалуйста, выберите изображение.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtn(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const playerData = {
      number: Number(formData.get("number")),
      teamCategory: "MAIN", // можно сделать select позже
      birthDate: formData.get("birthDate"),
      height: Number(formData.get("height")),
      weight: Number(formData.get("weight")),
      goals: Number(formData.get("goals")),
      assists: Number(formData.get("assists")),
      matchesPlayed: Number(formData.get("matchesPlayed")),
      yellowCards: Number(formData.get("yellowCards")),
      redCards: Number(formData.get("redCards")),
      imageUrl: "https://example.com/images/player10.jpg", // можно сделать поле
      translations: [
        {
          locale: "ru",
          firstName: formData.get("name") || "",
          lastName: formData.get("lastName") || "",
          position: formData.get("position") || "",
          nationality: formData.get("nation") || "",
        },
        {
          locale: "uz",
          firstName: formData.get("name-uz") || "",
          lastName: formData.get("lastName-uz") || "",
          position:
            formData.get("position") == "Защитник"
              ? "Himoyachi"
              : formData.get("position") == "Нападающий"
              ? "Hujumchi"
              : formData.get("position") == "Полузащитник"
              ? "Yarim himoyachi"
              : formData.get("position") == "Вратарь"
              ? "Darvozabon"
              : "",
          nationality: formData.get("nation-uz") || "",
        },
        {
          locale: "en",
          firstName: formData.get("name-en") || "",
          lastName: formData.get("lastName-en") || "",
          position:
            formData.get("position") == "Защитник"
              ? "Defender"
              : formData.get("position") == "Нападающий"
              ? "Forward"
              : formData.get("position") == "Полузащитник"
              ? "Midfielder"
              : formData.get("position") == "Вратарь"
              ? "Goalkeeper"
              : "",
          nationality: formData.get("nation-en") || "",
        },
      ],
    };

    try {
      const res = await fetch("http://localhost:3000/players/newplayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playerData),
      });

        if (!res.ok) throw new Error("Ошибка при создании игрока");
      alert("Игрок успешно добавлен");
      form.reset();
      //   setModal(false)
    } catch (err) {
      console.error(err);
      alert("Ошибка");
    } finally {
      setModal(false);
    }
    console.log(playerData);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[600px] max-h-[80vh] border border-black bg-white z-20 rounded-2xl p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
    >
      <h1 className="text-center text-4xl mb-[40px]">Добавление игрока</h1>
      <div
        className="absolute top-1 right-1 cursor-pointer"
        onClick={() => setModal(false)}
      >
        <IoCloseSharp size={50} />
      </div>
      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-800 block mb-1">
            Имя игрока на русском
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Имя игрока"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name-en" className="text-gray-800 block mb-1">
            Имя игрока на Английском
          </label>
          <input
            type="text"
            name="name-en"
            id="name-en"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Имя игрока"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name-uz2" className="text-gray-800 block mb-1">
            Имя игрока на Узбекском
          </label>
          <input
            type="text"
            id="name-uz2"
            name="name-uz"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Имя игрока"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="text-gray-800 block mb-1">
            Фамилия игрока на русском
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Фамилия игрока"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName-uz2" className="text-gray-800 block mb-1">
            Фамилия игрока на узбекском
          </label>
          <input
            type="text"
            name="lastName-uz"
            id="lastName-uz2"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Фамилия игрока"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName-en2" className="text-gray-800 block mb-1">
            Фамилия игрока на Английском
          </label>
          <input
            type="text"
            id="lastName-en2"
            name="lastName-en"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Фамилия игрока"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="text-gray-800 block mb-1">
            Номер игрока
          </label>
          <select
            name="number"
            id="number"
            className="w-full px-4 py-3 rounded-xl border block text-gray-900"
          >
            {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="birthDate" className="text-gray-800 block mb-1">
            Дата рождения
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Дата рождения"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="text-gray-800 block mb-1">
            Вес
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Вес"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="height" className="text-gray-800 block mb-1">
            Рост
          </label>
          <input
            type="number"
            name="height"
            id="height"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Рост"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="goals" className="text-gray-800 block mb-1">
            Количество голов
          </label>
          <input
            type="number"
            name="goals"
            id="goals"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Количество голов"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="assists" className="text-gray-800 block mb-1">
            Количество ассистов
          </label>
          <input
            type="number"
            name="assists"
            id="assists"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Количество ассистов"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="matches" className="text-gray-800 block mb-1">
            Игр сыграно
          </label>
          <input
            type="number"
            name="matchesPlayed"
            id="matches"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Игр сыграно"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="yellowCards" className="text-gray-800 block mb-1">
            Количество желтых карточек
          </label>
          <input
            type="number"
            name="yellowCards"
            id="yellowCards"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Количество желтых карточек"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="redCards" className="text-gray-800 block mb-1">
            Количество красных карточек
          </label>
          <input
            type="number"
            name="redCards"
            id="redCards"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Количество желтых карточек"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="text-gray-800 block mb-1">
            Позиция игрока
          </label>
          <select
            name="position"
            id="position"
            className="w-full px-4 py-3 rounded-xl border block text-gray-900"
          >
            {positions?.map((i, num) => (
              <option key={num} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="nation" className="text-gray-800 block mb-1">
            Национальность на русском - 'Узбек', 'Русский', 'Бразилец' и тд
          </label>
          <input
            type="text"
            name="nation"
            id="nation"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Национальность"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nation-uz" className="text-gray-800 block mb-1">
            Национальность на узбекском - 'O'zbek', 'Rus', 'Braziliyalik' и тд
          </label>
          <input
            type="text"
            name="nation-uz"
            id="nation-uz"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Millati"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nation-en" className="text-gray-800 block mb-1">
            Национальность на Английском - 'Uzbek', 'Russian', 'Brazilian' и тд
          </label>
          <input
            type="text"
            name="nation-en"
            id="nation-en"
            className="w-full px-4 py-2 rounded-xl border block text-gray-900"
            placeholder="Nation"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="teamCategory" className="text-gray-800 block mb-1">
            Категория
          </label>
          <select
            name="teamCategory"
            id="teamCategory"
            className="w-full px-4 py-3 rounded-xl border block text-gray-900"
          >
            {teamCategory?.map((i, num) => (
              <option key={num} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
          >
            📷 Загрузить фото
            <input
              id="photo"
              type="file"
              accept="image/*"
              className="hidden"
              //   onChange={handleFileUpload} // твой хендлер
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 border border-black text-white rounded-xl flex justify-center items-center"
        >
          {btn ? (
            <AiOutlineLoading3Quarters className="animate-spin text-xl" />
          ) : (
            "Отправить"
          )}
        </button>
      </form>
    </div>
  );
}
