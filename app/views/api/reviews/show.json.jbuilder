json.extract! @review, :id, :rating, :body, :user_id, :pet_id,
json.username @review.user.username
