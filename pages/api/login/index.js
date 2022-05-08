import { loginDatas } from "../../../Data/loginData";

export default function loginDataHandler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(loginDatas);
  } else if (req.method === "POST") {
    const data = req.body.data;
    const newData = {
      id: Date.now(),
      data: data,
    };
    loginDatas.push(newData);
    res.status(201).json(newData);
  }
}
