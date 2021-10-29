-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-10-27 01:09:32.362

-- tables
-- Table: branchOffice
CREATE TABLE branchOffice (
    id int  NOT NULL,
    name varchar(200)  NOT NULL,
    location varchar(200)  NOT NULL,
    CONSTRAINT branchOffice_pk PRIMARY KEY (id)
);

-- Table: brand
CREATE TABLE brand (
    id int  NOT NULL,
    name varchar(200)  NOT NULL,
    CONSTRAINT brand_pk PRIMARY KEY (id)
);

-- Table: category
CREATE TABLE category (
    id int  NOT NULL,
    name varchar(200)  NOT NULL,
    description varchar(1000)  NOT NULL,
    CONSTRAINT category_pk PRIMARY KEY (id)
);

-- Table: order
CREATE TABLE "order" (
    id int  NOT NULL,
    date timestamp  NOT NULL,
    location varchar(200)  NOT NULL,
    totalPrice decimal(15,2)  NOT NULL,
    paymentId varchar(200)  NOT NULL,
    paymentStatus varchar(200)  NOT NULL,
    merchantOrderId int  NOT NULL,
    status varchar(200)  NOT NULL,
    user_id int  NOT NULL,
    CONSTRAINT order_pk PRIMARY KEY (id)
);

-- Table: orderDetail
CREATE TABLE orderDetail (
    id int  NOT NULL,
    order_id int  NOT NULL,
    product_id int  NOT NULL,
    price int  NOT NULL,
    quantity int  NOT NULL,
    CONSTRAINT orderDetail_pk PRIMARY KEY (id)
);

-- Table: product
CREATE TABLE product (
    id int  NOT NULL,
    name varchar(500)  NOT NULL,
    image varchar(500)  NOT NULL,
    description varchar(1000)  NOT NULL,
    price decimal(15,2)  NOT NULL,
    status varchar(200)  NOT NULL,
    branchOffice_id int  NOT NULL,
    brand_id int  NOT NULL,
    CONSTRAINT product_pk PRIMARY KEY (id)
);

-- Table: productCategory
CREATE TABLE productCategory (
    id int  NOT NULL,
    category_id int  NOT NULL,
    product_id int  NOT NULL,
    CONSTRAINT productCategory_pk PRIMARY KEY (id)
);

-- Table: productSize
CREATE TABLE productSize (
    id int  NOT NULL,
    size_id int  NOT NULL,
    product_id int  NOT NULL,
    stock int  NOT NULL,
    CONSTRAINT productSize_pk PRIMARY KEY (id)
);

-- Table: review
CREATE TABLE review (
    id int  NOT NULL,
    rating int  NOT NULL,
    user_id int  NOT NULL,
    product_id int  NOT NULL,
    CONSTRAINT review_pk PRIMARY KEY (id)
);

-- Table: size
CREATE TABLE size (
    id int  NOT NULL,
    number int  NOT NULL,
    CONSTRAINT size_pk PRIMARY KEY (id)
);

-- Table: user
CREATE TABLE "user" (
    id int  NOT NULL,
    name varchar(50)  NOT NULL,
    surname varchar(70)  NOT NULL,
    profileImg varchar(500)  NOT NULL,
    mail varchar(256)  NOT NULL,
    phone varchar(25)  NOT NULL,
    location varchar(200)  NOT NULL,
    userType varchar(200)  NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (id)
);

-- Table: wishedProduct
CREATE TABLE wishedProduct (
    id int  NOT NULL,
    product_id int  NOT NULL,
    user_id int  NOT NULL,
    CONSTRAINT wishedProduct_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: category_association_1 (table: productCategory)
ALTER TABLE productCategory ADD CONSTRAINT category_association_1
    FOREIGN KEY (category_id)
    REFERENCES category (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: entity_1_association_1 (table: productSize)
ALTER TABLE productSize ADD CONSTRAINT entity_1_association_1
    FOREIGN KEY (size_id)
    REFERENCES size (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: order_association_1 (table: orderDetail)
ALTER TABLE orderDetail ADD CONSTRAINT order_association_1
    FOREIGN KEY (order_id)
    REFERENCES "order" (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: order_user (table: order)
ALTER TABLE "order" ADD CONSTRAINT order_user
    FOREIGN KEY (user_id)
    REFERENCES "user" (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: product_association (table: wishedProduct)
ALTER TABLE wishedProduct ADD CONSTRAINT product_association
    FOREIGN KEY (product_id)
    REFERENCES product (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: product_association_1 (table: productSize)
ALTER TABLE productSize ADD CONSTRAINT product_association_1
    FOREIGN KEY (product_id)
    REFERENCES product (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: product_association_10 (table: productCategory)
ALTER TABLE productCategory ADD CONSTRAINT product_association_10
    FOREIGN KEY (product_id)
    REFERENCES product (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: product_association_20 (table: orderDetail)
ALTER TABLE orderDetail ADD CONSTRAINT product_association_20
    FOREIGN KEY (product_id)
    REFERENCES product (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: product_brand (table: product)
ALTER TABLE product ADD CONSTRAINT product_brand
    FOREIGN KEY (brand_id)
    REFERENCES brand (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: product_entity_1 (table: product)
ALTER TABLE product ADD CONSTRAINT product_entity_1
    FOREIGN KEY (branchOffice_id)
    REFERENCES branchOffice (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: reviews_product (table: review)
ALTER TABLE review ADD CONSTRAINT reviews_product
    FOREIGN KEY (product_id)
    REFERENCES product (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: reviews_user (table: review)
ALTER TABLE review ADD CONSTRAINT reviews_user
    FOREIGN KEY (user_id)
    REFERENCES "user" (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: user_association_1 (table: wishedProduct)
ALTER TABLE wishedProduct ADD CONSTRAINT user_association_1
    FOREIGN KEY (user_id)
    REFERENCES "user" (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- sequences
-- Sequence: branchOffice_seq
CREATE SEQUENCE branchOffice_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: brand_seq
CREATE SEQUENCE brand_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: category_seq
CREATE SEQUENCE category_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: order_seq
CREATE SEQUENCE order_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: product_seq
CREATE SEQUENCE product_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: review_seq
CREATE SEQUENCE review_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: size_seq
CREATE SEQUENCE size_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: user_seq
CREATE SEQUENCE user_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- End of file.

