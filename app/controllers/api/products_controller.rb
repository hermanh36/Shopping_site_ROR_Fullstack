class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render 'api/products/index'
    end

    def create
        @product = Product.new(products_params)
    end

    def update
        @product = Product.find_by(id: params[:id])
        if @product.seller_id != current_user.id
            render json: ['You do not own this product!'], status:422
        elsif (@product.update(products_params))
            render 'api/products/show'
        else
            render json: @product.errors.full_massages, status:422
        end
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
        @product = Product.find_by(id: params[:id])
        @product.destroy;
        render 'api/products/show'
    end

    private
    def products_params
        params.require(:product).permit(:name, :description, :price, :image)
    end

end