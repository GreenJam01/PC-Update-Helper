package com.example.demo.Controllers;

import com.example.demo.Entitites.Build;
import com.example.demo.Entitites.Hardware;
import com.example.demo.Query.GetByCostIntervalQuery;
import com.example.demo.Services.BuildService;
import com.example.demo.Services.HardwareServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;


@RestController
public class MainController {
    @Autowired
    HardwareServices hardwareServices;
    @Autowired
    BuildService buildService;
    @RequestMapping(value="builds/", method = RequestMethod.GET)
    @ResponseBody
    public
    List <Build> builds(Model model) {
        return buildService.getAllBuilds();
    }

    @RequestMapping(value="builds/{id}", method = RequestMethod.GET)
    public ResponseEntity<Build> GetBuildById(@PathVariable(value="id") int id){
        Build build = buildService.getBuildById(id);
        if (build == null) return  ResponseEntity.badRequest().build();
        else
        return ResponseEntity.ok(build);
    }

    @RequestMapping(value="builds/{id}", method = RequestMethod.DELETE)
    public ResponseEntity DeleteBuildById(@PathVariable(value="id") int id){
        Build build = buildService.getBuildById(id);
        if (build == null) return  ResponseEntity.badRequest().build();
        else
            return ResponseEntity.ok(build);
    }
    @PostMapping(value = "builds/post", produces = APPLICATION_JSON_VALUE)
    public HttpStatus addBuild(@RequestBody Build build) {
        buildService.putInRepository( build);
        return HttpStatus.OK;
    }

    @PostMapping(value = "builds/getByCostInterval", produces = APPLICATION_JSON_VALUE)
    public List<Build> getByCostInterval(@RequestParam(name = "beginCost") int beginCost, @RequestParam(name = "endCost") int endCost ) {

        return buildService.getAllBuilds();
    }

//    @GetMapping ("/index/{id}")
//    public String index (Model model, @int id){
//        model.addAttribute()
//    }
//    @GetMapping("/index")
//    @ResponseBody
//    public String doSomething (){
//        return  "Jet";
//    }


}
