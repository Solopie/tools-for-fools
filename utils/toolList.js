const toolList = [{
    name: "Counter",
    route: "counter",
    template: "counter",
    description: "Simple tool to assist with counting",
    active: true
},
{
    name: "Countdown",
    route: "countdown",
    template: "countdown",
    description: "Timer that counts down",
    active: true
},
{
    name: "Anonymous Poll",
    route: "poll",
    template: "development",
    description: "Create a poll to vote annonymously to resolve a decision",
    active: false,
},
{
    name: "Stopwatch",
    route: "stopwatch",
    template: "stopwatch",
    description: "Record amount of time to do something",
    active: true,
},
{
    name: "Scoreboard",
    route: "scoreboard",
    template: "development",
    description: "Track the score for sport or game",
    active: false
},
{
    name: "Sketch Sharing",
    route: "sketch",
    template: "development",
    description: "Create a sketch and share with your friends",
    active: false
},
{
    name: "Chat Room",
    route: "chatroom",
    template: "chatroom",
    description: "An online chat room to talk with people",
    active: false
}
]

module.exports = toolList
