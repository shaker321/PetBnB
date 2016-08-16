json.extract! pet, :id, :name, :species, :age, :breed, :temperament, :price, :lat, :lng, :user_id
json.image_url asset_path(pet.image.url)
json.reviews pet.reviews
json.bookings pet.bookings
