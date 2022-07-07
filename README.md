# Cereal App README

## Project Description
This simple webform stores the name of cereal, whether it's eaten hot or cold, and their calories. At the moment, entries can be submitted, edited/ updated, and deleted.

## Target Browsers
This website has been developed for modern desktop web clients. It should be compatible with chromium based browsers, Safari, or Internet Explorer.

## Link
https://i-final.herokuapp.com/

# Developer Manual

## Installation and Usage
To use this website, fork the code to a local repository and install dependancies using: `npm install` after Node.js has been installed
<br>
Start the server using: `npm start`
<br>
Access the site by navigating to `localhost:3030`

## Endpoint Doc

<hr>

Below are details of the API contained within this piece of labwork.

<hr>

## REST API example using Sequelize
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>Retrieves resources</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>Creates resources</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>Changes and/or replaces resources or collections</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>Deletes resources</td>
    </tr>
  </tbody>
</table>

# Parks

## Get list of Cereals

#### Welcome

`GET /api`

    curl http://localhost:3030/api/cereal

#### Response
    Welcome to the Cereal API!

#### Request

`GET /api/cereal`

    curl http://localhost:3030/api/cereal

#### Response
    {
    {
    "message": "no results found"
    }
}

