
package com.example.service;

import com.example.dto.ContactDTO;
import com.example.dto.CreateContactRequest;

import java.util.List;

public interface ContactService {
    List<ContactDTO> getAllContacts();
    ContactDTO getContactById(Long id);
    ContactDTO createContact(CreateContactRequest request);
    void deleteContact(Long id);
}