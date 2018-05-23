require 'rails_helper'

RSpec.feature "User_list list" do
  scenario 'user exists in database' do
    visit user_list_path

  end
end