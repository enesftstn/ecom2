// File: src/main/java/com/unejsi/springbootecommerce/dto/MessageResponse.java

package com.unejsi.springbootecommerce.dto;

public class MessageResponse {
    private String message;

    public MessageResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}