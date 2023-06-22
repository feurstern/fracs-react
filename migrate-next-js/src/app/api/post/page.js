import { query } from "../../helper/db";

export default async function handler(req, res) {
  if(req.method === "GET"){

      var test = await query({
      query:  "SELECT * FROM api_key ",
      values: [],
    })
  }
  console.log(test);
  // res.status(200).json({test : test})
}