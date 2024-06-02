import json
import requests

with open('req.json', 'r') as json_file:
    data = json.load(json_file)
    print(data['cpu']['title'])
#data = [{"id":6,"cpu":{"id":145,"title":"AMD 3200G","visible":True,"brand":"AMD","frequency":"3.4","coresNumber":None,"threadsNumber":"16","imgLink":"https://cdn.citilink.ru/_kPLw9CyVvwN1_tc85Lq74wwMO_aIg_hbM2qh8hL8zE/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/f13fab45-f175-4091-9999-d0863e063070.jpg","price":18990,"favorite":False},"gpu":{"id":28,"title":"GIGABYTE AMD Radeon RX 7600 GV-R76GAMING OC-8GD","memoryFrequency":"18000","busWidth":"128","price":36200,"imgLink":"https://cdn.citilink.ru/hyP_aTUNdOcOWPkyjwfSnabMqsQC8fVDp3vpxImB5Mk/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/8944b3c5-cf83-4edd-ad8d-739905a058c7.jpg","visible":True,"brand":"GIGABYTE","memoryVolume":"8","favorite":False},"hdd":{"id":117,"title":"WD WD10EZEX","brand":"WD","memory":"1024","price":6290,"maxRecordingSpeed":"0","maxReadingSpeed":"0","imgLink":"https://cdn.citilink.ru/I4zb9y4DA93Iel5vipLU5E9ntx3CHWspASuQ9cJ7iog/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/e0a2ac30-ad37-4f3e-820a-01f07bd7eb6f.jpg","visible":True,"interface":"SATA III","ssd":False,"favorite":False},"motherboard":{"id":16,"title":"MSI PRO B650-S WIFI","brand":"MSI","socket":"SocketAM5","memoryType":"DDR5","imgLink":"https://cdn.citilink.ru/kIvT8XB6nvV-lWxNZtK7MX5PTmBIOBx2gMnLACcRC6E/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/dc6aacd0-ac1c-4b70-8afa-1e03cf564790.jpg","visible":True,"maxMemory":"256","price":17760,"favorite":False},"ram":{"id":107,"title":"AGI AGI160004UD12","brand":"AGI","volume":"4","frequency":"1600","price":990,"imgLink":"https://cdn.citilink.ru/Os1SqinRVJCe2F8Q1izfw2LKIQtMGIgMSON7_rUZLjw/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/f7964b81-887e-48a4-b8f4-bbf22fb38d8b.jpg","visible":True,"favorite":False},"user":{"id":1,"username":"admin123","email":"chauenov2023@gmail.com","password":"$2a$10$r8H9DEzPgAC/zK4UnLvpmOf3s5SG6q63O1bhmTcgtSLz5IOwE.51m","roles":[{"id":1,"name":"ROLE_USER"}],"cpus":[{"id":133,"title":"Intel Core i5 12400F","visible":True,"brand":"INTEL","frequency":"2.5","coresNumber":None,"threadsNumber":"12","imgLink":"https://cdn.citilink.ru/WHH25-FXmU8O2i0g1gedPqLDPphjcIpv4TbA-cg7aVc/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/03df872e-c930-48b0-82e5-67b29c4d9e1d.jpg","price":13890,"favorite":False}],"gpus":[],"rams":[{"id":107,"title":"AGI AGI160004UD12","brand":"AGI","volume":"4","frequency":"1600","price":990,"imgLink":"https://cdn.citilink.ru/Os1SqinRVJCe2F8Q1izfw2LKIQtMGIgMSON7_rUZLjw/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/f7964b81-887e-48a4-b8f4-bbf22fb38d8b.jpg","visible":True,"favorite":False}],"hdds":[],"motherboards":[]}}]
r = requests.post('http://127.0.0.1:5000/prediction', json=data)
