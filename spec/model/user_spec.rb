require 'rails_helper'

RSpec.describe User do
  subject {User.new}
  it "is not valid without a name" do
    expect(subject).not_to be_valid
  end

  it 'is not valid with name longer than 40 characters' do
    subject.name = 'w' * 41
    expect(subject).not_to be_valid
  end

  it 'is valid with name maximum 40 characters' do
    subject.name = 'w' * 40
    expect(subject).to be_valid
  end


end