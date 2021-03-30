import axios from "axios";

const accessKey = "Ybgq8bbwnKPDee6l1nHN83TC49LyJcIWorBSiHk7ofY";

const apiEndpoint = "https://api.unsplash.com/";
const randomPhotoEndpoint = `${apiEndpoint}photos/random`;

export const getRandomPhoto = async param => {
  try {
    const res = await axios.get(randomPhotoEndpoint, {
      params: {
        client_id: accessKey,
        count: 30,
        ...param
      }
    });

    if (res.status == 200) return res.data[0];
    else return null;
  } catch (exc) {
    console.error(exc);
    return null;
  }
};