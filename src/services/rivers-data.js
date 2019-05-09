const truss = {
    id: 'truss',
    title: 'You decide to paddle the glorious Green Truss!',
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