require 'open-uri'
require 'JSON'
class HomeController < ApplicationController
  def index
     huffpost = Nokogiri::HTML(open('http://www.huffingtonpost.com'))
     @articles = []
     for a in (0...huffpost.css("h4 a").length)
     	
     	@articles << huffpost.css("h4 a")[a].text
 
     end


  end

  def show 
  	huffpost = Nokogiri::HTML(open('http://www.huffingtonpost.com'))
    selected = params[:article_select].to_i
    url = huffpost.css("h4 a")[selected][:href]
    body_json = open("http://api.diffbot.com/v3/article?token=8de6c6c3e5fcec13f7b786b833bb35f7&url=#{url}")
    @body = JSON.parse(body_json.read)
    @text = @body["objects"][0]["text"]
    @title = @body["objects"][0]["title"]
    @image = @body["objects"][0]["images"][0]["url"]



  end


end