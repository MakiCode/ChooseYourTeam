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
 * UI is dynamic and has the text boxes coming in from the right and leaving from the left when an option is chosen
 * The history is managed by the app (in order to enable dynamic page changes when moving through history)
 * Website is accessible for the visually impaired
 * Has counters on every node showing how many times users have reached that node
 * Mobile version of site (detected automatically)

UI Mockup:
==========
 * Use a soft blue background with a pale world cup logo in the center.
 * Have a large central box with the current node's content.
 * Branches should be shown below the current node's content in 2 columns All content changes size dynamically to support an arbitrary number of two-column rows all with equal size cells (if there is an odd number of  branches, have the last row use a single column, same size button, that is centered).

Possible progress steps:
========================
 * Make javascript with plain old HTML, no stylesheets or fancy template (use JQuery, of course)
   NOTE: Wrap up all output in an object/closure to enable easy use of templates later
 * Use sample data to design UI (make it accessible at this point, do not design mobile site)
 * Hook UI and javascript together
 * Work on additional features (mobile version, history management, transitions)


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

Normalize flag sizes
Standardize use of single vs double quotes in data
Fix capitalization errors
Fix wrong refrence (e.g. talking about the flag of spain vs. showing a picture of italy)
Finally finished the data, the above has not been done but I can't stand looking at it again. Time to start on JS!
sadly, no longer finished with data. Need to have a history field added