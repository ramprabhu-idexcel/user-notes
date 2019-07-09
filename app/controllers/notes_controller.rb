class NotesController < ApplicationController
  before_action :set_note, only: [ :show, :destroy ]

  def index
    @notes = Note.all
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    respond_to do |format|
      if @note.save
        flash[:notice] = 'Congradulations. You have successfully saved the note.'
        format.html { redirect_to notes_path }
      else
        flash[:error] = @note.errors.full_messages.join(',')
        format.html { render :new }
      end
    end
  end

  def show; end

  def destroy
    respond_to do |format|
      if @note.destroy
        flash[:notice] = 'Congradulations. You have successfully deleted the note.'
        format.html { redirect_to notes_path }
      else
        flash[:error] = @note.errors.full_messages.join(',')
        format.html { render :new }
      end
    end
  end

  private

  def set_breadcrumbs
    super
    add_breadcrumb 'Notes', notes_path
  end

  def note_params
    params.require(:note).permit(:title, :body, :all_tags)
  end

  def set_note
    @note = Note.find(params[:id])
  end
end
