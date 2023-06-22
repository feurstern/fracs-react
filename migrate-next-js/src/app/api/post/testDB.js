import { query } from "../../helper/db";

export default async function handler(req, res) {
  if(req.method === "POST" || req.method === "GET"){
      console.log("Successfully connected");
      var test = await query({
      query:  "SELECT * FROM api_key ",
      values: [],
    });
    res.status(200).json({test : test});
  }
}
