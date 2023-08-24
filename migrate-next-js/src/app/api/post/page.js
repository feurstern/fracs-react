import excuteQuery  from "../../lib/db";

export default async function handler() {
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM api_key ',
      values: [],
    });
    console.log(`The result is: ${JSON.stringify(result)}`);
  }
  catch (err) {
    console.log("kyyaaaaa it returns error!");
  }
}

const Page=()=>{
  return(
    <div>
      <h1>{result}</h1>
    </div>
  )
}
