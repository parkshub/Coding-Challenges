// Pete, the baker
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes? Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  
    let count = []

    Object.keys(recipe).forEach(x => {
        if (!available[x]) {
            count.push(0)
        }
        else {
            count.push(Math.floor(available[x]/recipe[x]))
        }
    })
  
  return Math.min(...count)
}