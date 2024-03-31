# Projeto-Web

Read [building.md](https://github.com/reisaraujo-miguel/Projeto-Web/blob/main/building.md) to learn how to run the frontend app.

# Project Report

## Members:

- Miguel Reis de Araújo (12752457)
- Fernando César Lopes Barbosa Filho (10260559)
- Christian Bernard Simas Correa Gioia Ribeiro (11795572)

## Requirements:

The main requirements are given by the assignment's description. Our chosen additional functionality is:

- A search bar that enables admins to find products/users/admins to perform CRUD operations.

## Project Description:

Silicon Road is an eletronics shop that sells cellphones, laptops, monitors and a lot of cool things.

Its functionality includes:

- Users can easily set up an account by giving some basic info. They can add multiple items to the cart,
  specify the quantity of each product, select a shipping address and credit card, and then finish the order.

- In a particular page, admins can add/consult/modify/delete products and other admins.

- Each product has an ID, name, price, photo, description, quantity in stock. On each product page,
  besides the basic information about the product, users can see a recommendation for similar products.

-Admins can search for users/products/admins on the Admin Page and perform CRUD operations on them.

Project links:

- [Navigation Diagram](https://www.figma.com/file/Ej3MasBHEqIFoIAPgwUoGm/Flow-Chart?type=whiteboard&node-id=0%3A1&t=dFfiR6KRf2D6Pcug-1)
- [Mockup 1 (6 major pages)](https://www.figma.com/file/JCoe27IjofqH4vA0QHXtYh/Mockup-Milestone-%231?type=design&node-id=4%3A0&t=vZ38sfATpHUTt7j1-1)
- [HTML+CSS Mockups](https://github.com/reisaraujo-miguel/Projeto-Web/tree/main/mockups)

## Comments About the Code:

React was our choice to build the web application. In the `src/` folder, we divided the project in different subfolders, and each element/widget created has its own JS and CSS files --- this modularization is essential not only to better understand the code and its interdependencies but also to facilitate the building process as a whole.
We used Node.js with Express and Mongodb on the backend. We have a application file 'app.js' that the main program runs and folders for models, controllers and routes.

## Test Plan:

1- Check if required inputs are giving feedback when not properly filled

2- Check if user is being properly authenticated, showing an error if not

3- Check if CRUD operations on admin Page is working as expected

4- Check if product quantity is being properly decreased on order finish

5- Check if images are being loaded properly on Homepage and Product page

## Test Results:

All tests working as expected

## Build Procedures:

First of all, clone the repository:

```bash
$ git clone https://github.com/reisaraujo-miguel/Projeto-Web.git
```

Install all the dependencies with `npm` and run the frontend:

```bash
$ cd Projeto-Web/frontend/
$ npm install
$ npm start
```

Then install the dependencies and run the backend:

```bash
$ cd Projeto-Web/backend/
$ npm install
$ node app.js
```

## Problems:

No major problems.

## Comments:

No comments.
