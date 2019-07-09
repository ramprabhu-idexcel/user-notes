require 'rails_helper'

RSpec.describe NotesController, type: :controller do
  let!(:notes) { create_list(:note, 10) }
  describe "GET index" do
    it "has a 200 status code" do
      get :index
      expect(response.status).to eq(200)
    end

    it 'it has to render index template' do
      get :index
      expect( response ).to render_template( :index )
    end

    it 'checks the registers count' do
      get :index
      expect(assigns[:notes].count).to eq(10)
    end
  end

  describe "GET new" do
    it "has a 200 status code" do
      get :new
      expect(response.status).to eq(200)
    end
  end 

  describe "POST create" do
    it 'should create a new note' do
      post :create, params: { 
        note: { title: 'test note', body: 'test body', all_tags: 'test1, test2' } 
      }
      expect(assigns[:note].title).to eq('test note')
    end
  end

   describe "DELETE" do
    let!(:note) { create(:note) }
     it "delete the note" do
      expect{
        delete :destroy, params: { id: note }        
      }.to change(Note,:count).by(-1)
    end
   end
end
