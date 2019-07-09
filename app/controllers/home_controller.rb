class HomeController < ApplicationController
  layout "application"

  def index
  end

  private
  def set_breadcrumbs
    super
    add_breadcrumb 'Home', root_path
  end
end
