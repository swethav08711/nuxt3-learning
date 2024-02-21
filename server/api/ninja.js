export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event);
  // const { age } = await readBody(event); //post
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_GYdopeC4R946upbaNqvGO30nRlZRjVovY4hT0JD6"
  );
  return data;
});
