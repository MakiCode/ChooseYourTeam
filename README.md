Problem description:
====================
 Make an application that moves through a tree based on a users response (assume button/link click).

Parameters:
===========
 * The tree is a rooted, acyclic, digraph where every path is a two way path.
 * Each branch has some text optionally associated with it (text is arbitrary, use 'Next' if text does not exist)
 * Each leaf node either points to a picture and/or some text
 * Each node that is not a leaf has some text in it

Features:
=========
 * UI is dynamic and has the text boxes coming in from the right and leaving from the left when an option is chosen FAILED
 * The history is managed by the app (in order to enable dynamic page changes when moving through history) SUCCESS
 * Website is accessible for the visually impaired SUCCESS
 * Has counters on every node showing how many times users have reached that node NO SUCCESS
 * Mobile version of site (detected automatically) RESPONSIVE LAYOUT

Example of data:
================

    {
      whichTeam:{
        text:"Which World Cup team should I root for",
        branches:[
          {
            id:'isYourCountry',
            text:null
          }
        ]
      }
      isYourCountry:{
        text:"Is your home country playing?",
        branches:[
          {
            id:'notATraitor',
            text:'yes'
          },
          {
            id:'didYouStudy'
            text:'no'
          }
        ]
      }
    },
    korea: {
      text: "South Korea",
      img: {
        src: "Flag_of_South_Korea",
        alt: "A picture of the flag of South Korea"
       }
    }


TODO
====

Generify into framework.
Create additional features/views
