package com.ezyxip.pcmback.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {
    @RequestMapping(value="/")
    public String redirectToApp(){
        return "redirect:/app";
    }

    @RequestMapping(value="/app/**")
    public String startPage(){
        return "/index.html";
    }

}
