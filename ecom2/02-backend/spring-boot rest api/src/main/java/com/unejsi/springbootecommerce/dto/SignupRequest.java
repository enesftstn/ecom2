package com.unejsi.springbootecommerce.dto;

import java.util.Set;

public class SignupRequest {
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private Set<String> roles; // Changed from String role to Set<String> roles
    
    // Default constructor
    public SignupRequest() {}
    
    // Updated constructor
    public SignupRequest(String email, String firstName, String lastName, String password, Set<String> roles) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.roles = roles;
    }
    
    // Getters
    public String getEmail() {
        return email;
    }
    
    public String getFirstName() {
        return firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public String getPassword() {
        return password;
    }
    
    public Set<String> getRoles() { // Changed getter name and return type
        return roles;
    }
    
    // Setters
    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public void setRoles(Set<String> roles) { // Changed setter name and parameter type
        this.roles = roles;
    }
}