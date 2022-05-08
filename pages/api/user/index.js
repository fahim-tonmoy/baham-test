import { userDatas } from "../../../Data/userData";

export default function userDataHandler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(userDatas);
  } else if (req.method === "POST") {
    const data = req.body.data;
    const newData = {
      id: Date.now(),
      data: data,
    };
    userDatas.push(newData);
    res.status(201).json(newData);
  }
}
