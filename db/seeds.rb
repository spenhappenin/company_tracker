user = User.create(email: 'user@test.com', password: 'password')
puts "User seeded, email: user@test.com, password: password."

25.times do
  user.companies.create(
    title: Faker::Company.name,
    location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}"
  )
end
puts "25 companies seeded."
