class CocktailsController < ApplicationController
  before_action :find_cocktail, only: [:show, :destroy]
  def index
    @cocktails = Cocktail.all
    if params[:search]
      @cocktails = Cocktail.search(params[:search]).order("created_at DESC")
    else
      @cocktails = Cocktail.all.order("created_at DESC")
    end
  end

  def show
    @dose = Dose.new
    @doses = @cocktail.doses
    @review = Review.new
    @reviews = @cocktail.reviews
    amount = 0
    sum = 0
    @cocktail.reviews.each do |review|
      sum += review.rating.to_i
    end
    @cocktail.reviews.each do
      amount += 1
    end
      @average_rating = sum.to_f / amount unless amount.zero?
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
