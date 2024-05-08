import py_eureka_client.eureka_client as eureka_client

your_rest_server_port = 9090
eureka_client.init(eureka_server="http://localhost:8761/eureka",
                                app_name="python_sheldule_parser",
                                instance_port=your_rest_server_port)

def init():
    global url
    your_rest_server_port = 9090
    eureka_client.init(eureka_server="http://localhost:8761/eureka",
                                app_name="python_sheldule_parser",
                                instance_port=your_rest_server_port)
    #получаем сервис
    service = eureka_client.get_client().applications.get_application("EUREKA-APP-CLIENT").up_instances[0]
    print(service.status)
    print(service.hostName)
    url = f"http://{service.hostName}:{service.port.port}"
    print(url)