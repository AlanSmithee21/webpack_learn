import _ from 'lodash'
// import { NAME, Nijou } from './utilities'
// import * as utilities from './utilities'

import Tiger from './utilities'

console.log(Tiger.say());

// console.log(Nijou(3));
// console.log(NAME);
// console.log(utilities.Nijou(3));
// console.log(utilities.NAME);

function component(){
    const element = document.createElement('div');
    const array = ['Hello', 'webpack']
    element.innerHTML = _.join(array, ' ')
    return element;
}
document.body.appendChild(component());
