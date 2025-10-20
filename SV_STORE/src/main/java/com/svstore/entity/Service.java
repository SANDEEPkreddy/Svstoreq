package com.svstore.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "services")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Service {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 200)
    private String name;
    
    @Column(length = 1000)
    private String description;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "service_type")
    private ServiceType serviceType;
    
    @Column(name = "unit")
    private String unit; // per page, per hour, per document, etc.
    
    @Column(name = "is_available")
    private Boolean isAvailable = true;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();
    
    public enum ServiceType {
        XEROX,
        PRINTING,
        SCANNING,
        LAMINATION,
        BINDING,
        PHOTO_PRINTING,
        DOCUMENT_PREPARATION
    }
}
