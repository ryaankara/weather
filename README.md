# weather

The purpose of this project is to create a weather web application.
It is unique in that it uses asynchronous HTTP requests to pull information
from two from 2 APIs (Google's geo location and dark sky). This will allow for
the simultaneous pulling of data (complete address) from google and redirecting
that to dark sky (hyperlocal weather website) in order to retrieve and convert
information into real world, accessible current weather data.

Once you have downloaded this project, use a command prompt to navigate to this folder.
You will have to use the command "npm install" in order to install yargs. Then call the
app file with the following command - "node app.js" followed by "-a" to call the address
function. Directly after this, type in the zipcode of the location that you are seeking
the current and apparent temperature of. Hit enter and the information should pull up!

-Made with the guidance of Mead from udemy
