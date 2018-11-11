class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :ingredients, through: :doses
  validates :name, presence: true, uniqueness: true
  mount_uploader :photo, PhotoUploader

  def self.search(search)
    where("name ILIKE ?", "%#{search}%")
  end
end
