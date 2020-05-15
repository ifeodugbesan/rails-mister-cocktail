require 'json'
require 'open-uri'
require 'rest-client'

# response = RestClient.get 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
# ingredients = JSON.parse(response)

# Ingredient.destroy_all

# ingredients['drinks'].each do |ingredient|
#   Ingredient.create!(name: ingredient['strIngredient1'])
# end



url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
ingredients = JSON.parse(open(url).read)
ingredients["drinks"].each do |ingredient|
  i = Ingredient.create(name: ingredient["strIngredient1"])
  puts "create #{i.name}"
end
