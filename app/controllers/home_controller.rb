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

  def machmail
  	cnn="http://www.cnn.com"
	huffP = "http://www.huffingtonpost.com"
	nyt = "http://www.nytimes.com"
	wired = "http://www.wired.com"	
	bloomberg = "http://www.bloomberg.com"
  	 pro = params[:provider]

  	 if pro == "nyt"
     news_provider = Nokogiri::HTML(open(nyt))
  	 else
  	 news_provider = Nokogiri::HTML(open('http://www.huffingtonpost.com'))
     end
     
     handle = "h4 a"
     if pro == "nyt"
     	handle = "h2 a"
     end

     @articles = []
     for a in (0...news_provider.css(handle).length)
     	
     	@articles << news_provider.css(handle)[a].text
 
     end

    

  end

  def machshow
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
