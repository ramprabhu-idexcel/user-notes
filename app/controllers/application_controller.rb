class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_breadcrumbs

  def self.add_breadcrumb(name, url, options = {})
    before_filter options do |controller|
      controller.send(:add_breadcrumb, name, url)
    end
  end

  private

  def set_breadcrumbs
    add_breadcrumb 'Home', root_path
  end

  def add_breadcrumb(name, url = '')
    @breadcrumbs ||= []
    @breadcrumbs << { name: name, url: url }
  end
end
