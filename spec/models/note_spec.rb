require 'rails_helper'

RSpec.describe Note, type: :model do
  context "validations" do
    context "presence" do
      it { should validate_presence_of :title }
      it { should validate_presence_of :body }
    end
  end

  context 'associations' do
    it { should have_many(:taggings) }
    it { should have_many(:tags).through(:taggings) }
  end

  context 'all tags' do
    let!(:note) { create(:note) }
    it 'should display the tags' do
      expect(note.all_tags).to eq("music,  article,  graph")
    end
  end
end
