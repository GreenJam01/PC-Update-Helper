import scrapy
from scrapy_selenium import SeleniumRequest


class GpuparserSpider(scrapy.Spider):
    name = "gpuParser"
    allowed_domains = ["citilink.ru"]
#   start_urls = ["https://citilink.ru/catalog/videokarty"]

    def start_requests(self):
        url = "https://citilink.ru/catalog/videokarty"
        yield SeleniumRequest( url=url,
                               callback=self.parse )

    def parse(self, response):
        for proc in response.css("div.app-catalog-1tp0ino.e1an64qs0 a"):
            yield {
                    "gpu": proc.attrib["title"].split(",")[0].partition(' ')[2]
                  }
