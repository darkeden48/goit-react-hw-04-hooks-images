export function fetchImage(query, page) {
  //
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=24335530-1fa5676597020c031a07a1cad&image_type=photo&orientation=horizontal&per_page=15`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return this.setState({ error: "картинок не найдено" }).then((data) => {
      return data.hits;
    });
  });
}
