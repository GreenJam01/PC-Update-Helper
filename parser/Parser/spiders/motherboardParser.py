import scrapy
from scrapy_selenium import SeleniumRequest


class MotherboardparserSpider(scrapy.Spider):
    name = "motherboardParser"
    allowed_domains = ["citilink.ru"]
  # start_urls = ["https://citilink.ru/catalog/materinskie-platy"]

    def start_requests(self):
        url = "https://www.citilink.ru/catalog/materinskie-platy/"
        yield SeleniumRequest( url=url,
                               callback=self.parse )

    def parse(self, response): 
        for motherboard in response.css("div.app-catalog-1tp0ino.e1an64qs0 a"):
            yield {
                    "motherboard": motherboard.attrib["title"].split(",")[0][18:]
                  }
