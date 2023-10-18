import axios from "axios";

const fetchAccessToken = async (req, res) => {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_AUTH_URL}/oauth/token`,
      header: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: {
        /* eslint-disable @typescript-eslint/camelcase */
        grant_type: "client_credentials",
        client_id: `${process.env.NEXT_CLIENT_ID}`,
        client_secret: `${process.env.NEXT_CLIENT_SECRET}`,
      },
    };

    const data = await axios
      .request(options)
      .then((response) => response?.data)
      .catch((error) => console.error(error));

    if (data.access_token) {
      res.send(data.access_token);
    } else {
      res.status(403).send();
    }
  } else {
    res.status(404).send();
  }
};

export default fetchAccessToken;
