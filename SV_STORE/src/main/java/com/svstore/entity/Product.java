package com.svstore.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 200)
    private String name;
    
    @Column(length = 1000)
    private String description;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Column(name = "stock_quantity")
    private Integer stockQuantity = 0;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private ProductCategory category;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @Column(name = "is_available")
    private Boolean isAvailable = true;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();
    
    public enum ProductCategory {
        STATIONERY,
        BOOKS,
        OFFICE_SUPPLIES,
        ART_CRAFT,
        ACADEMIC_MATERIALS
    }
}

