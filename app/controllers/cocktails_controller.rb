class CocktailsController < ApplicationController
  before_action :find_cocktail, only: [:show, :destroy]
  def index
    @cocktails = Cocktail.all
  end

  def show
    @doses = @cocktail.doses
    @reviews = @cocktail.reviews
    amount = 0
    sum = 0
    @cocktail.reviews.each do |review|
      sum += review.rating.to_i
    end
    @cocktail.reviews.each do
      amount += 1
    end
    @average_rating = sum / amount unless amount.zero?
  end

  def new
    @cocktail = Cocktail.new
  end

  def create
    @cocktail = Cocktail.new(cocktail_params)
    @cocktail.save ? (redirect_to cocktail_path(@cocktail)) : (render :new)
  end

  def destroy
    @cocktail.destroy
    redirect_to cocktails_path
  end

  private

  def cocktail_params
    params.require(:cocktail).permit(:name, :photo)
  end

  def find_cocktail
    @cocktail = Cocktail.find(params[:id])
  end
end
