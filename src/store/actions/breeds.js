import Axios from "axios";

export const getBreeds = async ({ search, success, failure }) => {
  try {
    const { data } = await Axios.get(
      `https://dog.ceo/api/breed/${search}/images`
    );
    success(data);
  } catch (e) {
    failure(e.message);
  }
};
