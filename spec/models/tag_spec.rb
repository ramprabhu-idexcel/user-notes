require 'rails_helper'

RSpec.describe Tag, type: :model do
  context 'associations' do
    it { should have_many(:taggings) }
    it { should have_many(:notes).through(:taggings) }
  end
end
