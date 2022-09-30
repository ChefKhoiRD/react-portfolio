// Import
import React from 'react';
import ProjectCard from './Datacards.jsx';
import pokedex from './projectphotos/pokedex.png';
import weatherdashboard from './projectphotos/weatherdashboard.png';
import notetaker from './projectphotos/notetaker.png';
import gamedeals from './projectphotos/gamedeals.jpg';
import underataack from './projectphotos/underatackplaceholder.png';
import codequiz from './projectphotos/codequiz.png';
import './Projects.css';

// Data on projects page
function Projects() {
    return (
    <section className = 'projects-page'>

        {/* title */}
        <header id = 'title'>
            <h1 className = ' '>
                My Projects
            </h1>
        </header>

        {/* projects */}
        <div className = 'projects'>
        <div className = 'row1'>
            <div className = 'column'>
            <ProjectCard
                imgPath = {pokedex}
                title = "Pokedex"
                description = "An in-browser pokedex that displays a picture of a pokemon, it's pokemon cards, and the pokemon's data"
                link = "https://github.com/ChefKhoiRD/PokemonProject"
                />
            </div>

            <div className = 'column'>
            <ProjectCard
                imgPath = {underataack}
                title = "Under A Tack"
                description = "An in browser cork board that allows users to log in and attach events on sticky notes and post it to the global website"
                link = "https://github.com/Avenix17/Project-3-Under-a-tack"
                />
            </div>

            <div className = 'column'>
            <ProjectCard
                imgPath = {notetaker}
                title = "Note Taker"
                description = "An application that utilizes express and allows users to save and delete personal notes"
                link = "https://github.com/ChefKhoiRD/note-taker-app"
                />
            </div>

        <div className = 'row2'>
            <div className = 'column'>
            <ProjectCard
                imgPath = {gamedeals}
                title = "Game Deals"
                description = "A website that scrapes prices from third party marketplaces for current video game prices using a third party api to find the cheapest current price for a searched game"
                link = "https://github.com/ChefKhoiRD/GameDeals"
                />
            </div>

            <div className = 'column'>
            <ProjectCard  
                imgPath = {weatherdashboard}
                title = "Weather Dashboard"
                description = "A dashboard that shows a city's weather when it is searched using a third party API"
                link = "https://github.com/ChefKhoiRD/weather-dashboard"
                />
            </div>

            <div className = 'column'>
            <ProjectCard
                imgPath = {codequiz}
                title = "Coding Quiz"
                description = "A website that plays a game that allows users to take a coding quiz and save high scores"
                link = "https://github.com/ChefKhoiRD/coding-quiz"
                />
            </div>
        </div>
        </div>
        </div>
    </section>
)};

// Export
export default Projects;