import scrapy
from scrapy_selenium import SeleniumRequest

# scrapy startproject Parser
# cd Parser
# scrapy genspider procParser citilink.ru/catalog/processory
# pip install selenium==4.9.0

class ProcparserSpider(scrapy.Spider):
    name = "procParser"
    allowed_domains = ["citilink.ru"]
  # start_urls = ["https://citilink.ru/catalog/processory"]

    def start_requests(self):
        url = "https://www.citilink.ru/catalog/processory/"
        yield SeleniumRequest( url=url,
                               callback=self.parse )

    def parse(self, response):
        for proc in response.css("div.app-catalog-1tp0ino.e1an64qs0 a"):
            yield {
                    "title": proc.attrib["title"].split(",")[0].partition(' ')[2]
                  }
