package com.svstore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        return "index";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @PostMapping("/login")
    public String processLogin(@RequestParam String email, @RequestParam String password) {
        // TODO: Implement actual login logic
        return "redirect:/dashboard";
    }

    @PostMapping("/register")
    public String processRegister(@RequestParam String name, @RequestParam String email, 
                                 @RequestParam String password, @RequestParam String confirmPassword) {
        // TODO: Implement actual registration logic
        return "redirect:/login";
    }
}

