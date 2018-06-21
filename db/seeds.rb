categories = ["Ruby", "JavaScript", "Testing", "SQL", "React", "API", "Deployment"]

user = User.create(email: 'user@test.com', password: 'password')
puts "User seeded, email: user@test.com, password: password."

25.times do
  opt1 = Faker::ParksAndRec.character
  opt2 = Faker::ElderScrolls.city
  opt3 = Faker::Cat.breed
  opt4 = Faker::SiliconValley.character
  titles = [opt1, opt2, opt3, opt4]
  
  user.companies.create(
    title: titles.sample,
    location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}"
  )
end
puts "25 companies seeded."

50.times do
  opt1 = Faker::ParksAndRec.character
  opt2 = Faker::ElderScrolls.city
  opt3 = Faker::Cat.breed
  opt4 = Faker::SiliconValley.character
  titles = [opt1, opt2, opt3, opt4]
  category = categories.sample

  user.topics.create(
    category: category, 
    title: titles.sample, 
    body: "<h1>#{category} Content Goes Here</h1><p><br></p><ul><li>point one</li><li>point two</li><li>point three</li></ul><p><br></p><br><h3>#{Faker::MichaelScott.quote}</h3>"
  )
end

puts "50 topics seeded."
