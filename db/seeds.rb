require 'json'
require 'open-uri'
require 'rest-client'

response = RestClient.get 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
ingredients = JSON.parse(response)

Ingredient.destroy_all

ingredients['drinks'].each do |ingredient|
  Ingredient.create!(name: ingredient['strIngredient1'])
end
