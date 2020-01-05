package com.animal.controller.secured;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/secured")
public class SecuredController {

    @GetMapping("/dog")
    public String getDogs(Authentication auth) {

        return "This is a SECURED resource. Authentication: " + auth.getName() + "; Authorities: " + auth.getAuthorities();
    }
}
