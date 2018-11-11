class ReviewsController < ApplicationController
  before_action :find_cocktail, only: [:create]
  def new
    @cocktail = find_cocktail
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.cocktail = @cocktail
    @review.save
    redirect_to cocktail_path(@cocktail)
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to cocktail_path(@review.cocktail)
  end

  private

  def review_params
    params.require(:review).permit(:content, :rating)
  end

  def find_cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
  end
end
