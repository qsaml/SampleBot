# SampleBot
How to set up a Discord Bot? This guide is going to be a short one on how to do so. (Using Discord.js)
*Information to read before we get started:*
- Documentation: https://discord.js.org/#/docs/main/stable/general/welcome
- Discord App Development: https://discord.com/developers/applications
- Things to have installed: Node.js, Visual Studio Code (I assume you have these already)

**Detailed Steps**
1. Create a new folder wherever you want to within VSCode
2. Run the following commands in this order: `npm init` (just spam return here) and `npm install discord.js --save`. This creates a file called "package.json"
3. Run the following commands here: `npm install` and `npm install nodemon`.
4. In the section of the file marked `scripts`, copy this line underneath what should be there: `"start": "nodemon ./index.js"` (add a comma at the end of what is there already)
5. Now navigate to the Discord app development site, login, then hit "New Appication"
6. Enter a name for your application
7. Now navigate over to Bots tab, hit create a bot and confirm, then copy the API Token
8. In VSCode, create a file "config.json" and reference the file. Copy the API token to the `API_TOKEN` field, and change the `prefix` field to whatever you'd like
9. Lastly, create a file "index.js", go to the documentation, and paste that introductory code at the front. Or copy the one from the given file
10. To run the bot, just type `npm start` in the VSCode terminal
