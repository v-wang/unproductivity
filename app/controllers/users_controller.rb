class UsersController < ApplicationController
 before_action :authenticate_user!

  def index
  end

  def new
  end

  def pref
  	if params[:huffP] == "1"
  		current_user.content_providers << ContentProvider.find(1)
  	else
  		current_user.content_providers.delete(ContentProvider.find(1))
  	end
  	if params[:mash] == "1"
  		current_user.content_providers << ContentProvider.find(2)
  	else
  		current_user.content_providers.delete(ContentProvider.find(2))
  	end
  	if params[:bloomberg] == "1"
  		current_user.content_providers << ContentProvider.find(3)
  	else
  		current_user.content_providers.delete(ContentProvider.find(3))
  	end
  	if params[:wired] == "1"
  		current_user.content_providers << ContentProvider.find(4)
  	else
  		current_user.content_providers.delete(ContentProvider.find(4))
  	end
  	if params[:nyt] == "1"
  		current_user.content_providers << ContentProvider.find(5)
  	else
  		current_user.content_providers.delete(ContentProvider.find(5))
  	end			
 	if params[:npr] == "1"
  		current_user.content_providers << ContentProvider.find(6)
  	else
  		current_user.content_providers.delete(ContentProvider.find(6))
  	end
  	if params[:jcrew] == "1"
  		current_user.content_providers << ContentProvider.find(7)
  	else
  		current_user.content_providers.delete(ContentProvider.find(7))
  	end
  
  @user = current_user

  puts "******#{@user.content_providers.all}************"

  redirect_to root_path
  end

  def update
  end

end
