export default function invert(obj) {
     //TODO: remove after we use this to generate the objects
        var new_obj = {};

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {

                let value = obj[prop];
                if (new_obj[value]) {
                    //already has a key defined
                    var array;
                    if (Array.isArray(new_obj[value])) {
                        //already an array, don't make a new one
                        array = new_obj[value];
                    } else {
                        //simply a string, make new array with first element the string
                        array = [new_obj[value]];
                    } 
                    array.push(prop); //add current value
                    new_obj[value] = array;                   
                } else {
                    //brand new key
                    new_obj[value] = prop;
                }
            }
        }

        return new_obj;
}