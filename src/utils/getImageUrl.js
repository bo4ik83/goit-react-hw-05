const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

/**
 * Генерує повну URL для зображення.
 * @param {string} path - Шлях до зображення (наприклад, "/1E5baAaEse26fej7uHcjOgEE2t2.jpg").
 * @returns {string} Повна URL-адреса до зображення.
 */
export const getImageUrl = (path) => {
  if (!path) return `${BASE_IMAGE_URL}/placeholder.jpg`; // Заміна на заглушку, якщо шлях відсутній
  return `${BASE_IMAGE_URL}${path}`;
};
