#!/usr/bin/env node

import program from 'commander'

//Cant use import because of TS
//https://stackoverflow.com/a/53836076
const pkg = require('../../package.json')

//These commands have sub commands
//for example, theres a file called psi-mongoURI for the mongoURI command
//and yes they have to follow that name style of
// commandX = psi-commandX
//Now mongoURI has subcommands aswell,but those resolve to direct actions.

//FYI sub sub commands would follow psi-mongoURI-XXX-YYY-ZZZ, also has to be
//in this bin folder 
program
    .version(pkg.version)
    .command('mongoURI', 'URI to connect to MongoDB Atlas')
    .command('storm', 'Add a storm to the database')
    .command('addArchive', 'Add a archive to the database')
    .parse(process.argv)