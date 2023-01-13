class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render 'api/products/index'
    end

    def create
        @product = Product.new(products_params)
        
    end

    def update
    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product
            render 'api/products/show'
        else
            render json: ['The item you are looking for does not exist'], status: 404
        end
    end

    def destroy
    end

    private
    def products_params
        params.require(:product).permit(:name, :description, :price, :image)
    end

end