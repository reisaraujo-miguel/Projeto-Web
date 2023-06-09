# Projeto-Web

Read [building.md](https://github.com/reisaraujo-miguel/Projeto-Web/blob/main/building.md) to learn how to run the frontend app.

# Project Report

## Members:

- Miguel Reis de Araújo (12752457)
- Fernando César Lopes Barbosa Filho (10260559)
- Christian Bernard Simas Correa Gioia Ribeiro (11795572)

## Requirements:

The main requirements are given by the assignment's description. Our chosen additional functionality is: 
- A search bar that enables the user to find any given product.

## Project Description:

Silicon Road is an eletronics shop that sells cellphones, laptops, monitors and a lot of cool things.

Its functionality includes:

- Users can easily set up an account by giving some basic info. They can add multiple items to the cart,
specify the quantity of each product, select a shipping address and credit card, and then finish the order.

- In a particular page, admins can add/consult/modify/delete products and other admins.

- Each product has an ID, name, price, collection of photos, description, quantity in stock. On each product page,
besides the basic information about the product, users can see its rating and a recommendation for similar products.

- Users can search for products on the search bar.

Project links:
- [Navigation Diagram](https://www.figma.com/file/Ej3MasBHEqIFoIAPgwUoGm/Flow-Chart?type=whiteboard&node-id=0%3A1&t=dFfiR6KRf2D6Pcug-1)
- [Mockup 1 (6 major pages)](https://www.figma.com/file/JCoe27IjofqH4vA0QHXtYh/Mockup-Milestone-%231?type=design&node-id=4%3A0&t=vZ38sfATpHUTt7j1-1)
- [HTML+CSS Mockups](https://github.com/reisaraujo-miguel/Projeto-Web/tree/main/mockups)

## Comments About the Code:

React was our choice to build the web application. In the `src/` folder, we divided the project in different subfolders, and each element/widget created has its own JS and CSS files --- this modularization is essential not only to better understand the code and its interdependencies but also to facilitate the building process as a whole. 

## Test Plan:

Throughout the project we defined many mock objects for testing the functionality of core components, like the Carousel on the Product and Main Pages.

Our methodology of testing consisted of checking if the pages were reasonably under the specification we determined for Milestone 1, and by testing if buttons and components that have some effect on the state of the page (like routes, changing a component item) are working as expected.


## Test Results:
All pages were reasonably under the specification we defined on Milestone 1, with some minor modifications in some cases.


## Build Procedures:
First of all, clone the repository: 
```bash
$ git clone https://github.com/reisaraujo-miguel/Projeto-Web.git
```

Then install all the dependencies with `npm`:

```bash
$ cd Projeto-Web/frontend/
$ npm install
```

Then build it and serve it locally:
```bash
$ npm start
```

## Problems:
No major problems.

## Comments:

No comments.
