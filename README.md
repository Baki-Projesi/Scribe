This tool was created by The Baki Project, a Newbook Digital Texts in the Humanities project. Researchers, primarily from the University of Washington (UW), Turkish transcriptionists, Ottomanist scholars, and a UW iSchool Informatics capstone team worked together to produce Scribe, a tool designed to mitigate the faith gap between Arabic and Latin-based Turkish manuscripts.

Below you will find an overview of the project, a list of contents, a summary of the major technology decisions made, and contact information.

## Project Overview

The Baki Project began with the fall of the Ottoman Empire. In the years following written language in Turkey shifted from Ottoman Arabic script to a Latin-based Turkish alphabet. This language transformation occurred rapidly, and consequently, some texts were transcribed incorrectly or called for subjective editorial decisions. These discrepancies resulted in inaccurate and incongruent transcriptions, which have been detrimental to the preservation of Ottoman history and culture.

Transcription is a primitive and tedious task, as most transcribers perform their work manually, using pen and paper or simple text editing programs. No digital tools exist exclusively for Turkish manuscript transcription, so researchers do a considerable amount of work by hand just to verify the integrity of these documents. Digital tools created to facilitate this process could dramatically reduce overhead needed to study Turkish literature.

Scribe, a digital tool created by The Baki Project, mitigates the faith gap between Arabic and Latin-based Turkish manuscripts by standardizing the transcription workflow. Transcribers can dynamically verify the integrity of these manuscripts and transcriptions because Scribe facilitates the comparison of original Ottoman text with Latin Turkish. Scribe maintains the authenticity of primary source texts in order to preserve Ottoman tradition and literature.

The core feature of this tool is that every transcription decision made is captured. This decision is recorded by a 'disambiguation rule'. Each Latin character typed has an entity attached to it, so there is no ambiguity and each transcription decision made is conscious and purposeful.

The tool currently, from left to right, has a Latin-based Turkish input box, an image viewer, and an Arabic output box. Below the Latin input box is a dropdown menu where the user can select whether or not they are typing on an English or Turkish keyboard. The dropdown options change based on the characters the keyboard has available. The transcriber can upload a manuscript image of their choosing in the middle panel so they can reference the original manuscript without turning away from the screen. As the user types Latin-based Turkish, the corresponding Ottoman Arabic updates dynamically. The Arabic output is populated with the option selected in the dropdown.

This tool is a work in progress, and future iterations will focus on building out the collaborative features of the tool, such as authentication, a project management system, and integrating with The Baki Project's manuscript database.

Next Steps:
- finish implementing comment functionality
- continue usability testing
- add save state functionality
- refine UI
- build project management structure
- capture metadata about a particular work
- display a read-only view of The Baki Project's manuscript database

## Table of Contents

- Baki-RTT/
  - build/
  - node_modules/
  - public/
    - index.html
    - favicon.ico
  - src/
    - assets/
      - disambiguationRules.js
      - logo.svg
    - client/
      - components/
      - styles/
      - utils/
    - routes/
      - About.js
      - App.js
      - NotFound.js
    - server/
      - app.js
      - index.js
    - tests/

## Technology Stack

The technologies involved in Scribe can be broken up into three layers: client-facing, server-side, and database. Our client-facing layer uses React JS, which is a framework made to display data and create interfaces on web pages. The server-side layer is written in Express, which provides user authentication and data retrieval functionality. We store our application data in a non-relational database that uses MongoDB as the driver. These technologies are used because they are widely accepted, relevant, and frequently updated. They will persist with support for years to come.

- Application Hosting / Compute instances: Heroku Hobby/Standard Tier: $7-25/ month
- Database: https://elements.heroku.com/addons/mongolab $0-18/ month 
- Domain hosting: UW Servers, hosted by the Near Eastern Languages and Civilization (NELC) department
- Client View layer: React JS - React makes writing and re-using UI components for the browser easy. There are plenty of resources at developers’ disposal.
- Server Middleware: Express JS - Express is a fast, unopinionated server solution that is one of the most popular Node-server solutions today.
- Authentication: Auth0 - Auth0 is an industry leader when it comes to authentication frameworks, and they have simple plugins for using their auth on ExpressJS.
- Database for Document Storage: MongoDB - MongoDB’s NoSQL, JSON document-based storage matches the structure of our working application data. Using MongoDB allows us to work with native JSON.


## Contact Information

- Natasha Dietzler - ndiet@uw.edu
- Rutvi Patel - rutvi@uw.edu
- Brad Holland - bradholl@uw.edu