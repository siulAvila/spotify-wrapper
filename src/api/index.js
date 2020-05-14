export default function search() {
  return {
    searchItems: (query, type) =>
      this.httpService.httpRequest(`${this.apiUrl}search?q=${query}&type=${type}`),

    searchById: (type, id) => this.httpService.httpRequest(`${this.apiUrl}/${type}/${id}`),
  };
}
