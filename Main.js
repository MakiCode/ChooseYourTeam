/**
 * Created by Huulktya on 6/22/14.
 */

//For images, assume img/ is prepended and .png is appended
//DATA IS FINALLY DONE! Time to start the above.s
var treeData = {
    whichTeam: {
        text: "Which World Cup team should I root for?",
        branches: [
            {
                id: 'isYourCountry'
            }
        ]
    },
    isYourCountry: {
        text: "Is your home country playing?",
        branches: [
            {
                id: 'notATraitor',
                text: 'Yes.'
            },
            {
                id: 'didYouStudy',
                text: 'No.'
            }
        ]
    },
    notATraitor: {
        text: "Root for your home country so you're not a traitor."
    },
    didYouStudy: {
        text: "Did you study abroad in any of the 32 countries playing?",
        branches: [
            {
                id: "dontRootForThatTeam",
                text: "Yes."
            },
            {
                id: 'aTeamMightWinItAll',
                text: 'No.'
            }
        ]
    },
    dontRootForThatTeam: {
        text: "Do not root for that team. You will be ridiculed and rightly so."
    },
    aTeamMightWinItAll: {
        text: "Do you want to root for a team that might win it all?",
        branches: [
            {
                id: "howDoYouFeelAboutDiving",
                text: 'Yes.'
            },
            {
                id: "realUnderdogs",
                text: 'No, I like underdogs.'
            }
        ]
    },
    howDoYouFeelAboutDiving: {
        text: "How do you feel about diving?",
        branches: [
            {
                id: "kindaRacist",
                text: "It's my favorite thing about soccer!"
            },
            {
                id: "sexOrSoccer",
                text: "Sissies!"
            }
        ]
    },
    kindaRacist: {
        text: "Are you kinda racist?",
        branches: [
            {
                id: 'italy',
                text: "Everyone's a little bit racist."
            },
            {
                id: "spain",
                text: "Um... no?"
            }
        ]
    },
    italy: {
        text: "Italy.",
        img: {
            src: "Flag_of_Italy",
            alt: "A picture of the flag of Italy."
        }
    },
    spain: {
        text: "Spain.",
        img: {
            src: "Flag_of_Spain",
            alt: "A picture of the flag of Spain."
        }
    },
    sexOrSoccer: {
        text: "What do you prefer: sex or soccer?",
        branches: [
            {
                id: "brazil",
                text: "What's the difference?"
            },
            {
                id: "dribblingOrPassing",
                text: "Both. But separately."
            }
        ]
    },
    dribblingOrPassing: {
        text: "What do you prefer: passing or dribbling?",
        branches: [
            {
                id: "argentina",
                text: "Dribbling."
            },
            {
                id: "germany",
                text: "passing."
            }
        ]
    },
    argentina: {
        text: "Argentina.",
        img: {
            src: "Flag_of_Argentina",
            alt: "A picture of the flag of Argentina."
        }
    },
    germany: {
        text: "Germany.",
        img: {
            src: "Flag_of_Germany",
            alt: "A picture of the flag of Germany."
        }
    },
    brazil: {
        text: "Brazil.",
        img: {
            src: "Flag_of_Brazil",
            alt: "A picture of the flag of Brazil."
        }
    },
    realUnderdogs: {
        text: "Real underdogs?",
        branches: [
            {
                id: "theColorOrange",
                text: "No, just second tier teams with inflated egos."
            },
            {
                id: "anyChanceOutOfGroup",
                text: "Only legit underdogs for me!"
            },
            {
                id: "internationalSoccerExcuse",
                text: "No, I like teams that embrace the underdog label despite being powerful, populous, and economically successful."
            }
        ]
    },
    theColorOrange: {
        text: "How do you feel about the color orange?",
        branches: [
            {
                id: "netherlands",
                text: "it's tragically underappreciated."
            },
            {
                id: "losingWithAttitude",
                text: "It's ugly."
            }
        ]
    },
    netherlands: {
        text: "Netherlands.",
        img: {
            src: "Flag_of_the_Netherlands",
            alt: "A picture of the flag of Netherlands."
        }
    },
    losingWithAttitude: {
        text: "Which statement best describes your attitude toward losing?",
        branches: [
            {
                id: "france",
                text: "There's a certain beauty in the fall."
            },
            {
                id: "england",
                text: "Losing is the natural order of the universe."
            },
            {
                id: "portugal",
                text: "It's not really losing if you're the most attractive person on the field."
            }
        ]
    },
    france: {
        text: "France.",
        img: {
            src: "Flag_of_France",
            alt: "A picture of the flag of France."
        }
    },
    england: {
        text: "England.",
        img: {
            src: "Flag_of_England",
            alt: "A picture of the flag of England."
        }
    },
    portugal: {
        text: "Portugal.",
        img: {
            src: "Flag_of_Portugal",
            alt: "A picture of the flag of Portugal."
        }
    },
    internationalSoccerExcuse: {
        text: "Do you consider international soccer an excuse to celebrate past military victories?",
        branches: [
            {
                id: "unitedStates",
                text: "Yes."
            },
            {
                id: "japan",
                text: "No."
            }
        ]
    },
    unitedStates: {
        text: "United States.",
        img: {
            src: "Flag_of_the_United_States",
            alt: "A picture of the flag of the United States."
        }
    },
    japan: {
        text: "Japan.",
        img: {
            src: "Flag_of_Japan",
            alt: "A picture of the flag of Japan."
        }
    },
    anyChanceOutOfGroup: {
        text: "Do you want any chance your team makes it out of group stage?",
        branches: [
            {
                id: "kangarooJersey",
                text: "Absolutely none."
            },
            {
                id: "likeAuthoritarianRegime",
                text: "A tiny chance."
            },
            {
                id: "bitePeople",
                text: "Yes."
            }
        ]
    },
    kangarooJersey: {
        text: "Do you want a kangaroo on your jersey?",
        branches: [
            {
                id: "australia",
                text: "Obviously."
            },
            {
                id: "costaRica",
                text: "Kangaroos are stupid."
            }
        ]
    },
    australia: {
        text: "Australia.",
        img: {
            src: "Flag_of_Australia",
            alt: "A picture of the flag of Australia."
        }
    },
    costaRica: {
        text: "Costa Rica.",
        img: {
            src: "Flag_of_Costa_Rica",
            alt: "A picture of the flag of Costa Rica."
        }
    },
    likeAuthoritarianRegime: {
        text: "Do you like authoritarian regimes?",
        branches: [
            {
                id: "honduras",
                text: "No, but I'm OK rooting for the country with the highest-per-capita murder rate in the world."
            },
            {
                id: "switzerland",
                text: "I'm completely ambivalent about all matters."
            },
            {
                id: "womenAndSoccer",
                text: "I've said it before and I'll say it again: Democracy simply doesn't work."
            },
            {
                id: "samsungGalaxy",
                text: "No, not at all."
            }
        ]
    },
    honduras: {
        text: "Honduras",
        img: {
            src: "Flag_of_Honduras",
            alt: "A picture of the flag of Honduras."
        }
    },
    switzerland: {
        text: "Switzerland",
        img: {
            src: "Flag_of_Switzerland",
            alt: "A picture of the flag of Switzerland."
        }
    },
    womenAndSoccer: {
        text: "Do you think women should be allowed to attend soccer games?",
        branches: [
            {
                id: "iran",
                text: "obviously not."
            },
            {
                id: "invadingOtherCountries",
                text: "Obviously."
            }
        ]
    },
    iran: {
        text: "Iran.",
        img: {
            src: "Flag_of_Iran",
            alt: "A picture of the flag of Iran."
        }
    },
    invadingOtherCountries: {
        text: "Do you like invading other countries?",
        branches: [
            {
                id: "russia",
                text: "It's basically my favorite thing."
            },
            {
                id: "whichOne",
                text: "Look, I just want to root for an African authoritarian regime with green jerseys."
            }
        ]
    },
    whichOne: {
        text: "Which one?",
        branches: [
            {
                id: "algeria",
                text: "Algeria."
            },
            {
                id: "cameroon",
                text: "Cameroon."
            },
            {
                id: "nigeria",
                text: "Nigeria."
            }
        ]
    },
    algeria: {
        text: "Algeria.",
        img: {
            src: "Flag_of_Algeria",
            alt: "A picture of the flag of Algeria."
        }
    },
    cameroon: {
        text: "Cameroon.",
        img: {
            src: "Flag_of_Cameroon",
            alt: "A picture of the flag of Cameroon."
        }
    },
    nigeria: {
        text: "Nigeria.",
        img: {
            src: "Flag_of_Nigeria",
            alt: "A picture of the flag of Nigeria."
        }
    },
    samsungGalaxy: {
        text: "Do you have a Samsung Galaxy?",
        branches: [
            {
                id: "korea",
                text: "Yes, I love it."
            },
            {
                id: "beautifulCheckerboard",
                text: "No."
            }
        ]
    },
    korea: {
        text: "South Korea.",
        img: {
            src: "Flag_of_South_Korea",
            alt: "A picture of the flag of South Korea."
        }
    },
    beautifulCheckerboard: {
        text: "Do you often find yourself staring at the beauty of a checkerboard.",
        branches: [
            {
                id: "croatia",
                text: "I thought I was the only one."
            },
            {
                id: "lotsOfCoffee",
                text: "No."
            }
        ]
    },
    croatia: {
        text: "Croatia.",
        img: {
            src: "Flag_of_Croatia",
            alt: "A picture of the flag of Croatia."
        }
    },
    lotsOfCoffee: {
        text: "Do you drink a lot of coffee?",
        branches: [
            {
                id: "colombia",
                text: "Does six cups a day count as a lot?"
            },
            {
                id: "aboutWine",
                text: "No."
            }
        ]
    },
    colombia: {
        text: "Colombia",
        img: {
            src: "Flag_of_Colombia",
            alt: "A picture of the flag of Colombia"
        }
    },
    aboutWine: {
        text: "What about wine?",
        branches: [
            {
                id: "greece",
                text: "Does six glasses a day count as a lot?"
            },
            {
                id: "noDistinctCharacteristics",
                text: "No."
            }
        ]
    },
    noDistinctCharacteristics: {
        text: "As you've discovered by now, I have no distinctive characteristics. Which is the team for me?",
        branches: [
            {
                id: "ecuador"
            }
        ]
    },
    ecuador: {
        text: "Ecuador.",
        img: {
            src: "Flag_of_Ecuador",
            alt: "A picture of the flag of Ecuador."
        }
    },
    greece: {
        text: "Greece.",
        img: {
            src: "Flag_of_Greece",
            alt: "A picture of the flag of Greece."
        }
    },
    bitePeople: {
        text: "Do you bite people to express your frustration?",
        branches: [
            {
                id: "uruguay",
                text: "Can't talk, mouth full of human flesh."
            },
            {
                id: "smartassBarPlayer",
                text: "No."
            }
        ]
    },
    uruguay: {
        text: "Uruguay.",
        img: {
            src: "Flag_of_Uruguay",
            alt: "A picture of the flag of Uruguay."
        }
    },
    smartassBarPlayer: {
        text: "Do you want to be the smartass in the bar by telling people the best player in the world is someone they've never heard of?",
        branches: [
            {
                id: "chile",
                text: "Yes, I love being a smartass."
            },
            {
                id: "rootForPause",
                text: "No, I hate those people."
            }
        ]
    },
    chile: {
        text: "Chile.",
        img: {
            src: "Flag_of_Chile",
            alt: "A picture of the flag of Chile."
        }
    },
    rootForPause: {
        text: "Do you want to root for a country that paused a civil war because of soccer?",
        branches: [
            {
                id: "ivoryCoast",
                text: "Yes, soccer is peace."
            },
            {
                id: "animosityToAmerica",
                text: "No, soccer is war."
            }
        ]
    },
    ivoryCoast: {
        text: "Ivory Coast.",
        img: {
            src: "Flag_of_Ivory_Coast",
            alt: "A picture of the flag of the Ivory Coast."
        }
    },
    animosityToAmerica: {
        text: "How would you describe your animosity towards Americans?",
        branches: [
            {
                id: "ghana",
                text: "I enjoy antagonizing them."
            },
            {
                id: "mexico",
                text: "I dislike them more than I like anything else."
            },
            {
                id: "satanJersey",
                text: "I harbor no great ill will towards America."
            }
        ]
    },
    ghana: {
        text: "Ghana.",
        img: {
            src: "Flag_of_Ghana",
            alt: "A picture of the flag of Ghana."
        }
    },
    mexico: {
        text: "Mexico.",
        img: {
            src: "Flag_of_Mexico",
            alt: "A picture of the flag of Mexico."
        }
    },
    satanJersey: {
        text: "Are you interested in a team that wears an intimidating jersey and is nicknamed after Satan?",
        branches: [
            {
                id: "bosniaAndHerzegovina",
                text: "Nah, just give me a sad post-Soviet territory."
            },
            {
                id: "belgium",
                text: "Who wouldn't be?"
            }
        ]
    },
    bosniaAndHerzegovina: {
        text: "Bosnia and Herzegovina.",
        img: {
            src: "Flag_of_Bosnia_and_Herzegovina",
            alt: "A picture of the flag of Bosnia and Herzegovina."
        }
    },
    belgium: {
        text: "Belgium.",
        img: {
            src: "Flag_of_Belgium",
            alt: "A picture of the flag of Belgium."
        }
    }
};
/**
 * Method taken (with slight adaptations) from [this](http://berzniz.com/post/24743062344/handling-handlebars-js-like-a-pro).
 * This method unifies the interface between precompiled handlebars templates and templates and executed at runtime
 * @param name The template name to load
 * @returns {*} A handlebars template
 */
Handlebars.getTemplate = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url: 'templates/' + name + '.handlebars',
            success: function (data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

/**
 * This object manages output to the HTML. It takes the current context, an object with all of the fields needed to create the UI.
 * This object can be any of the top level objects in `treeData`
 */
var output = (function () {
    var nodeRenderer = Handlebars.getTemplate("node-template");

    var lastContext = null;

    var transitionRenderer = {

    };

    return {
        render: function (context, callback) {
            $("#main-panel").html(nodeRenderer(context));
            callback();
        }
    };
})();

/**
 * Process data to add a history field on all elements.
 *
 * Uses the following algorithm:
 *  Add root to stack
 *  While there are still nodes in the stack,
 *    Examine branches field of current node
 *    Extract each id referenced by this node.
 *    Create a 'history' variable on each nodes
 *    that is referenced that points to the current
 *    node.
 *    add each child to the stack
 *
 *    TODO detect and throw exception if data has a cyclical dependency,
 *    TODO detect and handle the multi-parent issue
 *
 */
var dataProcessor = function (data, root) {
    var stack = [root];
    while (stack.length != 0) {
        var current = stack.pop();
        //Because all leaf nodes have img properties, this hack works. I really should
        // not use it though because it's tying me to the current data structure.
        //START HACK
        if (data[current].hasOwnProperty("img")) {
            data[current].question = false;
        }
        //END HACK
        if (data[current].branches) {
            for (var i = 0; i < data[current].branches.length; i++) {
                var child = data[current].branches[i].id;
                if (data.hasOwnProperty(child)) {
                    data[child].history = current;
                    stack.push(child);
                }
            }
        }
    }
};


$(function () {
    var flowChartViewerApp = (function (output, preprocessors) {
        var root = "whichTeam";

        function getHashOrDefault() {
            var hash = window.location.hash ? window.location.hash.substring(1) : root;
            if (!treeData.hasOwnProperty(hash)) {
                hash = root;
            }
            return hash;
        }

        for (var i = 0; i < preprocessors.length; i++) {
            preprocessors[i](treeData, root);

        }

        function attachEvents() {
            $("button").click(function () {
                window.location.hash = "#" + $(this).attr('id');
            });
            $("#answers").focus();
        }

        var reload = function () {
            output.render(treeData[getHashOrDefault()], attachEvents);
        };

        $(window).on("hashchange", function () {
            reload();
        });
        reload();

    })(output, [dataProcessor])
});
