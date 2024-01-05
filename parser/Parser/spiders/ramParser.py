import scrapy
from scrapy_selenium import SeleniumRequest


class RamparserSpider(scrapy.Spider):
    name = "ramParser"
    allowed_domains = ["citilink.ru"]
 #  start_urls = ["https://citilink.ru/catalog/moduli-pamyati"]

    def start_requests(self):
        url = "https://citilink.ru/catalog/moduli-pamyati"
        yield SeleniumRequest( url=url,
                               callback=self.parse )

    def parse(self, response):
        for ram in response.css("div.app-catalog-oacxam.e1xes8vl0 a"):
            yield {
                    "title": ram.attrib["title"].split(",")[0][19:]
                  }
