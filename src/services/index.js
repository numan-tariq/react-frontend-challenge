import api from "./api";
import endPoints from "./endPoints";

export const apis = {
  getBreeds: (data) => api(endPoints.getBreeds, data),
};
