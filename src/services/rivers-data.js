const truss = {
    id: 'truss',
    title: 'The Glorious Green Truss!',
    image: 'bigbro.png',
    description: 'You pull into the dirt lot at the takeout and start asking nearby kayakers if you can join them. They ask you why you are taking THAT brought boat.',
    choices: [{
        id: 'plain',
        description: 'You laugh and tell them you know its lowwater so ofcourse you brought THAT boat.',
        result: 'They tell you sure but think to themselves they better watch this guy and tell you to throw your boat on top. Gain 15 energy and lose 70 integrity because its low summer flows and you hit a lot of rocks.',
        energy: +15,
        integrity: -70 
    }, {
        id: 'sketchy',
        description: 'You tell them thats your first kayak and youve only been paddling a few months.',
        result: 'They tell you that they wont stop you from going but they would prefer you not join them. you lose 15 energy due to discouragement but hey at least your kayak takes no damage so you get to keep your integrity.',
        energy: -15,
        integrity: 0 
    }, {
        id: 'cool',
        description: 'You tell them you almost always paddle that boat but youve been paddling for over 15 years.',
        result: 'They give you the nod of confidence and tell you to throw your boat on top. You burn 60 energy showing off but only lose 20 integrity because youre a killer at avoiding rocks!',
        energy: -60,
        integrity: -20
    }]
};

const middle = {
    id: 'middle',
    title: 'Classic, Middle White Salmon',
    image: 'bigbro.png',
    description: 'You pull into the lot at the takeout and are early for the meet time. You decide to go hangout on the bridge and watch kayaks and rafts paddle over Husum falls. Which do you tell your friends about when they arrive?',
    choices: [{
        id: 'creek',
        description: 'A creek boater you look up to gets out and walks around the falls instead of running it. You ask why? How does he answer...',
        result: 'He tells you that hes had enough beatdowns and good lines off that thing for a lifetime. This factode starles a couple of your friends, who were planning to run the falls until they heard that. Causing you a little fright. You lose 30 energy for group attitude and havent even paddled yet so your kayak integrity remains the same.',
        energy: -30,
        integrity: 0 
    }, {
        id: 'play',
        description: 'A playboater headed towards the falls and put on a show!',
        result: 'The playboater paddles towards the lip of the waterfall and sinks his bow only to flip off the it then skid out. His line enrgized you, your definitely running that! You gain 45 energy for your enthusiasm but lose 15 integrity because on the run you swam after the falls.',
        energy: +45,
        integrity: -15
    }, {
        //should complete here down tomorrow.
        id: 'raft',
        description: 'You tell them you almost always paddle that boat but youve been paddling for over 15 years.',
        result: 'They give you the nod of confidence and tell you to throw your boat on top. You burn 60 energy showing off but only lose 20 integrity because youre a killer at avoiding rocks!',
        energy: -60,
        integrity: 0
    }]
};

const lower = {
    id: 'lower',
    title: 'The Glorious Green Truss!',
    image: 'bigbro.png',
    description: 'You pull into the dirt lot at the takeout and start asking nearby kayakers if you can join them. They ask you why you are taking THAT brought boat.',
    choices: [{
        id: 'squirt',
        description: 'You laugh and tell them you know its lowwater so ofcourse you brought THAT boat.',
        result: 'They tell you sure but think to themselves they better watch this guy and tell you to throw your boat on top. Gain 15 energy and lose 70 integrity because its low summer flows and you hit a lot of rocks.',
        energy: +15,
        integrity: -70 
    }, {
        id: 'swim',
        description: 'You tell them thats your first kayak and youve only been paddling a few months.',
        result: 'They tell you that they wont stop you from going but they would prefer you not join them. you lose 15 energy due to discouragement but hey at least your kayak takes no damage so you get to keep your integrity.',
        energy: -15,
        integrity: 0 
    }, {
        id: 'surf',
        description: 'You tell them you almost always paddle that boat but youve been paddling for over 15 years.',
        result: 'They give you the nod of confidence and tell you to throw your boat on top. You burn 60 energy showing off but only lose 20 integrity because youre a killer at avoiding rocks!',
        energy: -60,
        integrity: -20
    }]
};
const rivers = [truss, middle, lower];