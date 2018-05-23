require 'rails_helper'

RSpec.describe "User" do
  it "adding user to list when submit a form" do
    user = create(:user)
    visit user_create_path
    fill_in "name", with => user.name
    fill_in "surname", with => user.surname
    click_button "add user"
  end

end
