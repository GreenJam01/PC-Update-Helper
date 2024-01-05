import scrapy
from scrapy_selenium import SeleniumRequest


class HddparserSpider(scrapy.Spider):
    name = "hddParser"
    allowed_domains = ["citilink.ru"]
 #  start_urls = ["https://citilink.ru/catalog/zhestkie-diski"]

    def start_requests(self):
        url = "https://citilink.ru/catalog/zhestkie-diski"
        yield SeleniumRequest( url=url,
                               callback=self.parse )

    def parse(self, response):
        for hdd in response.css("div.app-catalog-1tp0ino.e1an64qs0 a"):
            yield {
                    "title": hdd.attrib["title"].split(",")[0][13:]
                  }
