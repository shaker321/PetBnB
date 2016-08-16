# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users
User.destroy_all

User.create!(username: "ilovepuppies@puppies.com", password: "i<3puppies");
User.create!(username: "ilovecats@cats.com", password: "i<3cats");
User.create!(username: "ilovebirds@birds.com", password: "i<3birds");
User.create!(username: "ilovemonkeys@monkeys.com", password: "i<3monkeys");
User.create!(username: "ilovegophers@gophers.com", password: "i<3gophers");
User.create!(username: "ilovemolerats@molerats.com", password: "i<3molerats");


# Locations
Location.destroy_all

Location.create!(name: "New York City", center_lat: 40.7529, center_lng: -73.9942)
Location.create!(name: "Boston", center_lat: 42.3601, center_lng: -71.0589)
Location.create!(name: "Los Angeles", center_lat: 34.0522, center_lng: -118.2437)
Location.create!(name: "San Francisco", center_lat: 37.7749, center_lng: -122.4194)
Location.create!(name: "Seattle", center_lat: 47.6062, center_lng: -122.3321)
Location.create!(name: "Berlin", center_lat: 52.5200, center_lng: 13.4050)
Location.create!(name: "Hong Kong", center_lat: 22.3964, center_lng: 114.1095)
Location.create!(name: "Paris", center_lat: 48.8566, center_lng: 2.3522)
Location.create!(name: "London", center_lat: 51.5074, center_lng: -0.1278)


# Pets
Pet.destroy_all

cat_breeds = [
  "Himalayan",
  "Siamese",
  "Persian",
  "Chartreux",
  "Ragdoll",
  "Abyssinian",
  "Bengal",
  "Burmese",
  "Birman",
  "Siberian"
]

dog_breeds = [
  "Cockapoo",
  "Poodle",
  "Husky",
  "Dalmatian",
  "Beagle",
  "Pug",
  "Labrador",
  "Maltese",
  "Samoyed",
  "Newfoundland"
]

temperaments = [
  "Friendly, lovable, inquisitive; fearlessly game for just about anything.",
  "Clever, confident, proud; friendly but courageous.",
  "Dignified, courageous, and profoundly loyal.",
  "Affectionate, loyal, playful but dignified.",
  "Sweet-tempered and easygoing, but also stubborn and independent",
  "Happy, eager, and charming; aloof with strangers, and a little stubborn.",
  "Calm, watchful, loyal, and smart; protective and territorial.",
  "Alert, curious, and pleasant.",
  "Easygoing, laid-back, and even a bit lazy.",
  "Bouncy, charismatic, friendly; smart, but also stubborn and independent.",
  "Smart, obedient, gentle; reserved with strangers, loving and eager to please with preferred humans.",
  "Good-natured and calm.",
  "Remarkably smart workaholic; not adverse to a good cuddle."
]

user_ids = []

User.all.each do |user|
  unless user.username == "ilovepuppies@puppies.com"
    user_ids << user.id
  end
end


10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 40.7529).round(6), (40.7529 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -73.9942).round(6), (-73.9942 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 40.7529).round(6), (40.7529 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -73.9942).round(6), (-73.9942 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 42.3601).round(6), (42.3601 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -71.0589).round(6), (-71.0589 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 42.3601).round(6), (42.3601 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -71.0589).round(6), (-71.0589 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 34.0522).round(6), (34.0522 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -118.2437).round(6), (-118.2437 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 34.0522).round(6), (34.0522 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -118.2437).round(6), (-118.2437 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 37.7749).round(6), (37.7749 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -122.4194).round(6), (-122.4194 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 37.7749).round(6), (37.7749 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -122.4194).round(6), (-122.4194 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 47.6062).round(6), (47.6062 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -122.3321).round(6), (-122.3321 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 47.6062).round(6), (47.6062 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -122.3321).round(6), (-122.3321 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 52.5200).round(6), (52.5200 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 13.4050).round(6), (13.4050 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 52.5200).round(6), (52.5200 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 13.4050).round(6), (13.4050 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 22.3964).round(6), (22.3964 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 114.1095).round(6), (114.1095 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 22.3964).round(6), (22.3964 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 114.1095).round(6), (114.1095 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 48.8566).round(6), (48.8566 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 2.3522).round(6), (2.3522 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 48.8566).round(6), (48.8566 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 2.3522).round(6), (2.3522 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = dog_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "dog",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 51.5074).round(6), (51.5074 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -0.1278).round(6), (-0.1278 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end

10.times do
  breed = cat_breeds.sample

  Pet.create!(
    name: Faker::Name.first_name,
    species: "cat",
    age: rand(1..15),
    breed: breed,
    temperament: temperaments.sample,
    price: rand(5..25),
    lat: [(rand(0..0.01) + 51.5074).round(6), (51.5074 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -0.1278).round(6), (-0.1278 - rand(0..0.01)).round(6)].sample,
    user_id: user_ids.sample,
    image: File.open("app/assets/images/#{breed}.jpg")
  )
end



# Reviews

Review.destroy_all

pet_ids = []

Pet.all.each do |pet|
  pet_ids << pet.id
end

reviews = [
  "This is a one of a kind animal with the heart and playful attitude to prove it!",
  "Excellent breed for anyone of any age to rent, very easy going and well-tempermented, not aggressive in any way.",
  "I've rented many pets, but to be frank this little sweetheart is amazingly intelligent. I never had a pet as smart as this one.",
  "The absolute best friend and companion!!! Well mannered with all, always eager to please. Enjoys playtime and quiet time too.",
  "Two words - BEST DOG EVER!!",
  "<3 <3 <3 <3 <3 <3 <3",
  "Rent this pet! You won't regret it!",
  "I wish this little guy was more into cuddling, but otherwise it was a great time!",
  "This guy is a love sponge, but also needy... Be prepared to have them under your feet at every waking moment & curled around your neck when you sleep.",
  "Large eyes, larger heart; can't go wrong.",
  "The sweetest, funniest, most affectionate pet! I'm in love!",
  "I never want my rental to end.",
  "Minimal shedding, maximum love, excellent cuddler, in short, the perfect friend.",
  "I think I just found my new best friend.",
  ":) :) :) :) TWO THUMBS UP!!!",
  "Softest, fluffiest, sweetest pet on this site!",
  "They don't get any cuter!",
  "I brought this guy home as a playmate for my little pup and the two got along like they'd known each other for years!",
  "Couldn't ask for a better pet.",
  "Definitely going to be renting again!",
  "My favorite pet ever!",
  "I don't know how anyone can help but fall in love with this guy.",
  "DO IT! YOU CAN'T GO WRONG!!!",
  "Pet is love. Pet is life.",
  "Kind, loving, and overall just a joy to be around. Rent this pet!",
  "Greatest cuddler in the world!"
]

rating = [3, 4, 5]

900.times do
  Review.create!(
    rating: rating.sample,
    body: reviews.sample,
    user_id: user_ids.sample,
    pet_id: pet_ids.sample
  )
end
