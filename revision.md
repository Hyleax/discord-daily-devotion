For fully functional slash commands, there are three important pieces of code that need to be written. They are:

1. [x] The individual command files, containing their definitions and functionality.
2. [x] The command handler, which dynamically reads the files and executes the commands.
3. [x] The command deployment script, to register your slash commands with Discord so they appear in the interface.

* These steps can be done in any order, but all are required before the commands are fully functional.






Command Response Methods
* ephemeral responses - hidden 
    * add the "ephemeral: true" flag
* deferred responses
    * use when you know command will take more than 3 seconds
* follow-ups (15 minute window to send after inital message)
* delete responses
    * 