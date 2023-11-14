export const API_URL = {
  cat_endpoint_random_fact: import.meta.env.VITE_CAT_FACT,
  cat_endpoint_image_url: (word, color = 'red') =>
    `https://cataas.com/cat/says/${word}?size=50&color=${color}&json=true`
}
