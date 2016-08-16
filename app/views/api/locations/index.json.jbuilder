json.array! @locations do |location|
  json.id location.id
  json.name location.name
  json.center_lat location.center_lat
  json.center_lng location.center_lng
end
