package com.example.demo.Controllers;

import com.example.demo.Entitites.Hardware;
import com.example.demo.Services.HardwareServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    HardwareServices hardwareServices;

    @GetMapping("/index")
    public String index(Model model) {
        model.addAttribute("products", hardwareServices.getAllHardwares());
        return "products";
    }
//    @GetMapping("/index")
//    @ResponseBody
//    public String doSomething (){
//        return  "Jet";
//    }


}
