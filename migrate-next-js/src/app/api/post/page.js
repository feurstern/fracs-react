import excuteQuery  from "../../lib/db";

export default async function handler() {
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM api_key where name like "%fra%" ',
      values: [],
    });
    console.log(`The result was: ${JSON.stringify(result)}`);
  }
  catch (err) {
    console.log("kyyaaaaa it returns error!");
  }
}

const Page=()=>{
  return(
    <div>
      <h1>Page</h1>
    </div>
  )
}
