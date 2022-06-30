

export default async function handler(req, res) {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const jsonData = await data.json()
  const drink = jsonData.drinks[0].strDrink


  res.status(200).json({ text: drink });
}







// More info:

// https://nextjs.org/docs/api-routes/dynamic-api-routes