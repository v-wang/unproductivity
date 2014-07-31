class CreateJoinTableContentProvidersUsers < ActiveRecord::Migration
  def change
  	create_join_table :content_providers, :users
  end
end